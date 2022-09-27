FROM python:3.8-slim-buster

WORKDIR /usr/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

CMD airflow db init

# below creates, starts, connects to container's port 8080 to mine and opens container's cli 
# docker run -it -p 8080:8080 -t tellisa/airflow:latest sh