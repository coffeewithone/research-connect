const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your MongoDB connection string.
const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("test");
    const threads = database.collection("threads");

    // Generate 5000 new posts
    let newPosts = [];
    for (let i = 1; i <= 5001; i++) {
      newPosts.push({
        text: `Computer Research article Post #${i}`, // Replace this with actual content if needed
        //Zaid Muqsit profile
        author: new ObjectId("651f35b212d87a9e70056f1c"),
        comments: [],
        createdAt: new Date(),
        reactionCount: 0,
      });
    }

    const result = await threads.insertMany(newPosts);
    console.log(`Inserted ${result.insertedCount} new posts`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
