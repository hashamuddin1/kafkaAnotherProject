#STEPS
1. first Install npm i express nodemon kafkajs.
2. on cmd run "docker run --name zookeeper -p 2181:2181 zookeeper"
3. on cmd run 
docker run -p 9092:9092 ^
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 ^
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 ^
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 ^
confluentinc/cp-kafka