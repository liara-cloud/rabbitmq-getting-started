const amqp = require('amqplib');

const rabbitmqUrl = "some uri";

async function consume() {
  try {
    const connection = await amqp.connect(rabbitmqUrl);
    const channel = await connection.createChannel();

    await channel.assertQueue('test_queue', { durable: false });

    console.log("Waiting for messages in 'test_queue'...");

    channel.consume('test_queue', (msg) => {
      if (msg !== null) {
        console.log("Received:", msg.content.toString());
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

consume();
