FROM node:22.9.0-alpine3.19

WORKDIR /app/

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4321

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]