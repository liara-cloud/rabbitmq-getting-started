package main

import (
	"fmt"
	"log"
	"os"
	"github.com/streadway/amqp"
	"github.com/joho/godotenv"
)

func checkRabbitMQConnection() bool {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("error in loading .env: %v", err)
	}

	rabbitHost := os.Getenv("RABBITMQ_HOST")
	rabbitPort := os.Getenv("RABBITMQ_PORT")
	rabbitUser := os.Getenv("RABBITMQ_USER")
	rabbitPass := os.Getenv("RABBITMQ_PASS")

	rabbitURL := fmt.Sprintf("amqp://%s:%s@%s:%s/", rabbitUser, rabbitPass, rabbitHost, rabbitPort)

	conn, err := amqp.Dial(rabbitURL)
	if err != nil {
		fmt.Println("connection failed, error:", err)
		return false
	}
	defer conn.Close()

	fmt.Println("connection successful")
	return true
}

func main() {
	if checkRabbitMQConnection() {
		fmt.Println("connection successful.")
	} else {
		fmt.Println("connection failed.")
	}
}
