const amqp = require('amqplib');
require('dotenv').config(); 

const rabbitConfig = {
    protocol: 'amqp',
    hostname: process.env.RABBITMQ_HOST,
    port: parseInt(process.env.RABBITMQ_PORT, 10),
    username: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS,
  };

async function checkRabbitMQConnection() {
  try {
    const connection = await amqp.connect(rabbitConfig);
    console.log('connection successful');
    await connection.close(); 
  } catch (error) {
    console.error('connection failed! error:', error.message);
  }
}

checkRabbitMQConnection();
