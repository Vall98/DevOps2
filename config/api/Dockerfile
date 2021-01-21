FROM node:14

COPY ./api /home/api

RUN apt -y update &&\
 apt -y upgrade &&\
 npm i -g npm@latest

RUN mkdir -p /home/api /home/images &&\
 useradd api &&\
 chown -R api:api /home/api /home/images &&\
 chown -R api:api /home/api /home/images

USER api

WORKDIR /home/api

CMD ssh-keygen -t rsa -b 4096 -m PEM -f /home/api/passport/secrets/id_rsa_priv.pem &&\
 openssl rsa -in /home/api/passport/secrets/id_rsa_priv.pem -pubout -outform PEM -out /home/api/passport/secrets/id_rsa_pub.pem &&\
 sed -i "s/USERNAME/\"${USERNAME}\"/g" config/config.json &&\
 sed -i "s/PASSWORD/\"${PASSWORD}\"/g" config/config.json &&\
 npm i && npm audit fix --force && npm start