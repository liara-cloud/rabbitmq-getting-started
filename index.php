<?php

require 'vendor/autoload.php';

use PhpAmqpLib\Connection\AMQPStreamConnection;

// for local development, uncomment if needed
// use Dotenv\Dotenv;
// $dotenv = Dotenv::createImmutable(__DIR__);
// $dotenv->load();

$host = $_ENV['RABBITMQ_HOST'];
$port = (int) $_ENV['RABBITMQ_PORT'];
$user = $_ENV['RABBITMQ_USER'];
$pass = $_ENV['RABBITMQ_PASS'];

try {
    
    $connection = new AMQPStreamConnection($host, $port, $user, $pass);
    echo "connection successful\n";

    
    $connection->close();
} catch (Exception $e) {
    echo "connection failed, error: " . $e->getMessage() . "\n";
}

?>
