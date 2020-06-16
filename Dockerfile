FROM node:stretch-slim
RUN apt-get update && apt-get install -y build-essential python
WORKDIR /app
COPY ./ /app
RUN npm i --production
CMD ["node", "index.js"]
