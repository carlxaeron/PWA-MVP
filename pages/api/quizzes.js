import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  clientPromise = client.connect();
}

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db();

  switch (req.method) {
    case 'GET':
      const quizzes = await db.collection('quizzes').find({}).toArray();
      res.status(200).json(quizzes);
      break;
    case 'POST':
      const newQuiz = req.body;
      await db.collection('quizzes').insertOne(newQuiz);
      res.status(201).json(newQuiz);
      break;
    case 'PUT':
      const { quizId, updatedQuiz } = req.body;
      await db.collection('quizzes').updateOne({ quizId }, { $set: updatedQuiz });
      res.status(200).json(updatedQuiz);
      break;
    case 'DELETE':
      const { quizId: deleteQuizId } = req.body;
      await db.collection('quizzes').deleteOne({ quizId: deleteQuizId });
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
