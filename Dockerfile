FROM node:8.11
WORKDIR /src
ADD package.json .
RUN npm install --quiet
ADD . .
CMD npm test
