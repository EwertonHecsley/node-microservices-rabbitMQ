import 'dotenv/config';
import { Channel, connect, Connection } from "amqplib";

export class RabbitMQServer {

    private connection: Connection;
    private channel: Channel;

    async start() {
        const url = process.env.RABBITMQ_URL || "";

        this.connection = await connect(url);
        this.channel = await this.connection.createChannel();
    }

    async stop() {
        await this.channel.close();
        await this.connection.close();
    }

    async publish(queue: string, message: string) {
        return await this.channel.sendToQueue(queue, Buffer.from(message))
    }
}