FROM node:14-slim

RUN mkdir -p /home/files &&\
 useradd dev &&\
 mkdir -p /home/dev &&\
 chown -R dev:dev /home/dev &&\
 chown -R dev:dev /home/files

USER dev

WORKDIR /home/files

CMD npm i && npm start