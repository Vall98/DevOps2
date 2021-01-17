FROM node:14-slim

COPY ./api /home/api

RUN apt -y update &&\
 apt -y upgrade &&\
 apt -y install openssl &&\
 npm i -g npm@latest

RUN mkdir -p /home/api &&\
 useradd api &&\
 chown -R api:api /home/api &&\
 chown -R api:api /home/api &&\
 cd /home/api/passport/secrets &&\
 ssh-keygen -t rsa -b 4096 -m PEM -f id_rsa_priv.pem &&\
 openssl rsa -in id_rsa_priv.pem -pubout -outform PEM -out id_rsa_pub.pem

USER api

WORKDIR /home/api

CMD npm i && npm audit fix --force && npm start