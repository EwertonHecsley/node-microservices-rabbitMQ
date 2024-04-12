import 'dotenv/config';
import { Channel, connect, Connection, Message } from "amqplib";

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

    async consumer(queue: string, callback: (message: Message) => void) {
        return this.channel.consume(queue, (message: any) => {
            callback(message);
        })
    }
}