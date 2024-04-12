import { RabbitMQServer } from "./rabbitmqServer";

(async () => {
    const rabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start();

    const isEnv = await rabbitMQServer.publish("Teste_Menssageria", "Primeira mensagem teste");
    console.log({ isEnv });
})();