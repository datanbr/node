const express = require('express');
const app = express();
const port = process.env.port || 3000;  
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://user:userpass@mycluster.ylwxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "nouvelle_base";
const db = client.db(dbName);
const col = db.collection("collections_utilisateur");


app.get('/', (req, res) => {
    res.send("Welcom to the home page");
});

app.listen(port, () => {
    console.log('wassa');
});

app.get('/api/users',(req, res) => {
    client.connect(err => {
        col.find().toArray((error, documents) => {
            if (error){
                throw error;
            }
            res.send(documents);
             // perform actions on the collection object
            client.close();
        })
       
    });
})

app.get('/api/insert', async (req, res) => {
    console.log("0");
        try {
            console.log("1");
             await client.connect();
             console.log("2");
             console.log("Connected correctly to server");
             
    
             // Use the collection "people"
             
    
             // Construct a document                                                                                                                                                              
             let personDocument = {
                 "name": { "first": "Alan", "last": "Turing" },
                 "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
                 "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
                 "contribs": [ "Turing machine", "Turing test", "Turingery" ],
                 "views": 1250000
             }
    
             // Insert a single document, wait for promise so we can read it back
             const p = await col.insertOne(personDocument);
             // Find one document
             const myDoc = await col.findOne();
             // Print to the console
             console.log(myDoc);
    
            } catch (err) {
             console.log(err.stack);
         }
     
         finally {
            await client.close();
            res.send("c'est dans la boite")
        }
})

