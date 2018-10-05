FROM node:latest
LABEL maintainer "Victor Hugo <victorhundo@gmail.com>"

WORKDIR /opt

RUN apt-get update && apt-get install -y \
    nmap \
&& rm -rf /var/lib/apt/lists/*

RUN npm install -g nodemon

EXPOSE 3000

COPY ./* /opt/

CMD [ "bash", "/opt/start.sh"]
