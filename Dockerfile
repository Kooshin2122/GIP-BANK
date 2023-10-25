FROM node:16

RUN mkdir /gibbank-website

WORKDIR /gibbank-website

COPY . /gibbank-website

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]

