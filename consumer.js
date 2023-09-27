const { Kafka } = require("kafkajs");

async function consume() {
  const kafka = new Kafka({
    clientId: "player-jersey-1",
    brokers: ["127.0.0.1:9092"],
  });

  const consumer = kafka.consumer({ groupId: "player-jersey" });
  await consumer.connect();
  console.log("Consumer connected");

  await consumer.subscribe({
    topic: "jersey1",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        `To Partition ${partition} -> message ${message.value.toString()}`
      );
    },
  });
}

consume();
