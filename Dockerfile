FROM node:14.17-alpine
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn config set "strict-ssl" false -g
RUN yarn install 
COPY . .
CMD [ "yarn", "start" ]