FROM node:14.15.4

WORKDIR /Documeto/DockerArquivos

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5555

CMD ["yarn", "start"]

