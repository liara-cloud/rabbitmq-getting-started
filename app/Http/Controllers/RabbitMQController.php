<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use PhpAmqpLib\Connection\AMQPStreamConnection;

class RabbitMQController extends Controller
{
    public function checkConnection(): JsonResponse
    {
        try {

            $host = env('RABBITMQ_HOST');
            $port = env('RABBITMQ_PORT');
            $user = env('RABBITMQ_USER');
            $pass = env('RABBITMQ_PASS');


            $connection = new AMQPStreamConnection($host, $port, $user, $pass);
            $connection->close();

            return response()->json(['message' => 'connection successful']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'connection failed', 'error' => $e->getMessage()], 500);
        }
    }
}

