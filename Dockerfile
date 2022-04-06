FROM node

WORKDIR ch-guide/

COPY package*.json ./
COPY scripts scripts/

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
