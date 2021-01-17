FROM node:14-slim

COPY ./api /home/api

RUN apt -y update &&\
 apt -y upgrade &&\
 apt -y install openssl openssl-client &&\
 npm i -g npm@latest

RUN mkdir -p /home/api &&\
 useradd api &&\
 chown -R api:api /home/api &&\
 chown -R api:api /home/api

USER api

WORKDIR /home/api

CMD ssh-keygen -t rsa -b 4096 -m PEM -f /home/api/passport/secrets/id_rsa_priv.pem &&\
 openssl rsa -in /home/api/passport/secrets/id_rsa_priv.pem -pubout -outform PEM -out /home/api/passport/secrets/id_rsa_pub.pem &&\
 npm i && npm audit fix --force && npm start