FROM node:10.19-alpine

ENV PROJECT_ROOTDIR /app/

WORKDIR $PROJECT_ROOTDIR

# COPY package.json yarn.lock $PROJECT_ROOTDIR

RUN yarn install

COPY . $PROJECT_ROOTDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["npm", "run", "dev"]