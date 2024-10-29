import amqp from 'amqplib';

const rabbitConfig = {
  protocol: 'amqp',
  hostname: process.env.RABBITMQ_HOST,
  port: parseInt(process.env.RABBITMQ_PORT, 10),
  username: process.env.RABBITMQ_USER,
  password: process.env.RABBITMQ_PASS,
};

export default async function handler(req, res) {
  try {
    const connection = await amqp.connect(rabbitConfig);
    await connection.close();
    res.status(200).json({ message: 'connection successful' });
  } catch (error) {
    res.status(500).json({ message: 'connection failed!', error: error.message });
  }
}
