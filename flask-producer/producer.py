from flask import Flask, jsonify
import pika

app = Flask(__name__)

rabbitmq_url = "some uri"
parameters = pika.URLParameters(rabbitmq_url)

@app.route('/send_message', methods=['POST'])
def send_message():
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()

    channel.queue_declare(queue='test_queue')

    message = "Hello from Flask producer!"
    channel.basic_publish(exchange='', routing_key='test_queue', body=message)
    connection.close()

    return jsonify({"message": "Message sent to RabbitMQ!"})

if __name__ == "__main__":
    app.run(port=5000)
