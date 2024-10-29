using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var rabbitConfig = builder.Configuration.GetSection("RabbitMQ");

string host = rabbitConfig["Host"];
int port = int.Parse(rabbitConfig["Port"]);
string user = rabbitConfig["User"];
string pass = rabbitConfig["Pass"];

bool CheckRabbitMQConnection()
{
    try
    {
        var factory = new ConnectionFactory()
        {
            HostName = host,
            Port = port,
            UserName = user,
            Password = pass
        };

        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        Console.WriteLine("connection successful");
        return true;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"connection failed, error: {ex.Message}");
        return false;
    }
}

app.MapGet("/test-rabbitmq", () =>
{
    bool isConnected = CheckRabbitMQConnection();
    return isConnected ? Results.Ok("connection successful") : Results.Problem("connection failed");
});

app.Run();
