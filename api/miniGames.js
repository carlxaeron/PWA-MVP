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
      const miniGames = await db.collection('miniGames').find({}).toArray();
      res.status(200).json(miniGames);
      break;
    case 'POST':
      const newMiniGame = req.body;
      await db.collection('miniGames').insertOne(newMiniGame);
      res.status(201).json(newMiniGame);
      break;
    case 'PUT':
      const { gameId, updatedMiniGame } = req.body;
      await db.collection('miniGames').updateOne({ gameId }, { $set: updatedMiniGame });
      res.status(200).json(updatedMiniGame);
      break;
    case 'DELETE':
      const { gameId: deleteGameId } = req.body;
      await db.collection('miniGames').deleteOne({ gameId: deleteGameId });
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
