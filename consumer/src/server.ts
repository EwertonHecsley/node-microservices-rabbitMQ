import { Message } from "amqplib";
import { RabbitMQServer } from "./rabbitmqServer";

(async () => {
    const rabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start();

    await rabbitMQServer.consumer("Teste_Menssageria", (message: Message) => {
        console.log(message.content.toString());
    })
})();