const { Kafka } = require("kafkajs");

async function produce() {
  const kafka = new Kafka({
    clientId: "player-jersey-1",
    brokers: ["127.0.0.1:9092"],
  });

  const jerseyNumber = process.argv[2];

  const producer = kafka.producer();
  await producer.connect();
  console.log("Producer connected");

  const players = {
    7: "Dhoni",
    18: "Virat",
    12: "Yuvraj",
    10: "Sachin",
    45: "Rohit",
  };

  const producedData = await producer.send({
    topic: "jersey1",
    messages: [
      {
        value: players[jerseyNumber],
        partition: jerseyNumber <= 10 ? 0 : 1,
      },
    ],
  });
  console.log(`Produced data ${JSON.stringify(producedData)}`);
}

produce();
