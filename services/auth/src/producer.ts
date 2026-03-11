import {Kafka , Producer , Admin} from "kafkajs"
import dotenv from "dotenv"


dotenv.config()

let producer: Producer;
let admin : Admin;

export const connectKafka = async() => {
  try {
     const kafka = new Kafka({
  clientId: 'auth-service',
  brokers: [process.env.Kafka_Broker || 'localhost:9092'],
});
admin = kafka.admin()
await admin.connect();


const topics = await admin.listTopics();


if(!topics.includes("send-mail")){
  await admin.createTopics({
    topics: [
      {
        topic: "send-mail",
        numPartitions:1,
        replicationFactor:1,
      },
    ],
  });
  console.log("✅ Topic send-mail created");
}


await admin.disconnect();
producer = kafka.producer();

await producer.connect();

console.log("✅connected to kafka producer")




  } catch (error) {
    console.log("Failed to connect to kafka" , error);
  }
}