const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your MongoDB connection string.
const uri = "mongodb+srv://cs316:BgtSfYrPDBZpOWE0@cluster0.cpyz9nz.mongodb.net/?retryWrites=true&w=majority";

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

////

// const { MongoClient, ObjectId } = require("mongodb");

// // Replace the uri string with your MongoDB connection string.
// const uri = "mongodb+srv://cs316:BgtSfYrPDBZpOWE0@cluster0.cpyz9nz.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// // Array of sample post texts
// const samplePosts = [
//   "Exciting breakthrough in biometric research revealed today.",
//   "Our latest publication on genetic markers has been released.",
//   "Attended a fascinating lecture on molecular biology applications.",
//   "Just submitted a paper on innovative approaches to bioinformatics.",
//   "Thrilled to be part of the team that discovered a new metabolic pathway.",
// ];

// function getRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

// function getRandomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("test");
//     const threads = database.collection("threads");

//     // Generate dynamic posts and insert them one by one
//     for (let i = 1; i <= 2; i++) {
//       let post = {
//         text: getRandomElement(samplePosts),
//         author: new ObjectId("651f35b212d87a9e70056f1c"), // Ensure this is the correct ObjectId format
//         comments: [],
//         createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
//         reactionCount: Math.floor(Math.random() * 100), // Random number of reactions between 0 and 99
//       };

//       const result = await threads.insertOne(post);
//       console.log(`Inserted post with _id: ${result.insertedId}`);
//     }
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
