// External Dependencies
import * as mongoDB from "mongodb";
require('dotenv').config()

// Global Variables
export const collections: { list?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);
          
  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);
  
  const listCollection: mongoDB.Collection = db.collection(process.env.LIST_COLLECTION_NAME!);

collections.list = listCollection;
     
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${listCollection.collectionName}`);
}