FROM node:14-slim

COPY . /home/files


RUN useradd front &&\
 mkdir -p /home/front &&\
 chown -R front:front /home/front &&\
 chown -R front:front /home/files

WORKDIR /home/files

CMD /home/files/scripts/permissions.sh /home/files/ready front "cd /home/files rm -rf ready/.ready && npm i && npm run build && mkdir -p front && cp -R build/* front/ && touch ready/.ready"