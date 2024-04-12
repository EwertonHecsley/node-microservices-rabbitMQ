import { RabbitMQServer } from "./rabbitmqServer";

(async () => {
    const rabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start();
})();