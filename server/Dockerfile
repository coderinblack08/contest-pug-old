FROM node:12

RUN npm install pm2 -g
RUN pm2 install typescript

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . .

ENTRYPOINT ["sh", "./entrypoint.sh"]

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--only=api" ]