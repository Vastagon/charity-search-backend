const express = require("express")
const app = express()
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function connectToMongo(){
    await client.connect(err => console.log(err));    
    console.log("Mongo Connected")


    const db = client.db("Charities")
    console.log(db)
    let col = db.collection("Charities")
    console.log(col)
    // let doc = await col.insertOne(personDocument)
    // console.log(doc)
}



connectToMongo()




app.listen(5000, () =>{
    console.log("Server Running")
})

