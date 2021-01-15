FROM node:14-slim

COPY ./api /home/api

RUN apt -y update &&\
 apt -y upgrade &&\
 npm i -g npm@latest

RUN mkdir -p /home/api &&\
 useradd api &&\
 chown -R api:api /home/api &&\
 chown -R api:api /home/api

USER api

WORKDIR /home/api

CMD npm i && npm audit fix --force && npm start