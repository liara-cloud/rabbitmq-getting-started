from flask import Flask
import os
import pika
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

RABBITMQ_HOST = os.getenv('RABBITMQ_HOST')
RABBITMQ_PORT = int(os.getenv('RABBITMQ_PORT'))
RABBITMQ_USER = os.getenv('RABBITMQ_USER')
RABBITMQ_PASS = os.getenv('RABBITMQ_PASS')

def check_rabbitmq_connection():
    try:
        credentials = pika.PlainCredentials(RABBITMQ_USER, RABBITMQ_PASS)
        parameters = pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT, credentials=credentials)

        connection = pika.BlockingConnection(parameters)
        print("connection successful")

        connection.close()
        return "connection successful"
    except Exception as e:
        print("connection failed, error: ", e)
        return f"connection failed, error: {e}"

@app.route('/test-rabbitmq')
def test_rabbitmq_connection():
    result = check_rabbitmq_connection()
    return result

if __name__ == '__main__':
    app.run(debug=True)
