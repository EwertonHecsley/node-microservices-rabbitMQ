import { RabbitMQServer } from "./rabbitmqServer";

(async () => {
    const rabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start();

    const isEnv = await rabbitMQServer.publish("Teste_Menssageria", "Conexão foi um sucesso!");
    console.log({ isEnv })
})();