const { createClient } = require("redis");

let redisClient;

const connect = async () => {
  try {
    // redisClient = createClient("redis://redis:6379"); //Default port 6379
    redisClient = createClient()//for docker
    // client = createClient({
    //   host: 'SG-fr-60784.servers.mongodirector.com',
    //   port: 6379,
    //   password: 'cuALUyExG9fxfAvK4Q99c8Sk82HM6qhG',
    // })
    await redisClient.connect();
    // await redisClient.flushAll("ASYNC");
    console.log("Redis connected!!");
  } catch (err) {
    console.log(err);
    // throw new Error(err)
  }
};

connect();

module.exports = { redisClient };
