FROM node:14-slim

COPY . /home/files

RUN apt -y update &&\
 apt -y upgrade &&\
 npm i -g npm@latest

RUN mkdir -p /home/files &&\
 useradd ${USER} &&\
 mkdir -p /home/${USER} &&\
 chown -R ${USER}:${USER} /home/${USER} &&\
 chown -R ${USER}:${USER} /home/files

USER ${USER}

WORKDIR /home/files

CMD npm i && npm audit fix --force && npm start