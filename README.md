# Connect to RabbitMQ Using NextJS
## Steps

```
git clone https://github.com/liara-cloud/rabbitmq-getting-started.git
```
```
cd rabbitmq-getting-started
```
```
git checkout nextjs
```
```
mv .env.example .env.local // or mv .env.example .env.production
```
- set ENVs on `.env.local` or `.env.production`
```
npm i
```
```
npm run dev
```
- check `localhost:3000/api/check-rabbitmq`
