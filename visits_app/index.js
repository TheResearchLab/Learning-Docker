const express = require('express'); // call dependencies
const redis = require('redis');
const process = require('process');


const app = express(); // instansiate objects
const client = redis.createClient({
    host: 'redis-server', // w/o docker compose this would be host: 'https://my-redis-server.com', instead we can just call name from compose yml
    port: 6379 //default port number
});

client.set('visits',0); // preset visits to 0

app.get('/',(req,res) => {
    process.exit(0); // exit status code, exit on purpose
    client.get('visits', (err,visits) => { // get # of visits
        res.send('Number of visits is ' + visits); // send # of visits
        client.set('visits', parseInt(visits) + 1); // update number of visits
    });
});

app.listen(8081,() => {
    console.log('Listening on port 4001');
});

