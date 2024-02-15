# RabbitMQ apps getting started

Example of how deploy a simple RabbitMQ project on [liara](https://liara.ir).

## Deploying

- [Create New RabbitMQ  one-click-app](https://console.liara.ir/apps/create)
- [Create New Flask  app](https://console.liara.ir/apps/create) 
- [Create New Nodejs  app](https://console.liara.ir/apps/create)
- install the [Liara CLI](https://docs.liara.ir/cli/install)
- Make sure all apps are on the same private network to connect each other successfully

```bash
$ git clone https://github.com/liara-cloud/rabbitmq-getting-started.git # or clone your own fork
$ cd rabbitmq-getting-started
```
- extract flask-producer.zip and nodejs-consumer.zip files
  
- deploy flask app on Liara:
```bash
$ cd flask-producer
$ liara deploy
```

- deploy nodejs app on Liara:
```bash
$ cd nodejs-consumer
$ liara deploy
```

- add RabbitMQ ENVs to both apps
- now you can use your apss
- more information and video in [docs](https://docs.liara.ir/one-click-apps/rabbitmq/)
