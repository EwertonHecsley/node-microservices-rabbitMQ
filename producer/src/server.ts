import { RabbitMQServer } from "./rabbitmqServer";

(async () => {
    const rabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start();

    await rabbitMQServer.publish("Teste_Menssageria", "Primeira mensagem teste");
})();