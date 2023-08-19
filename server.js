import express from "express"
import MongoClient from "mongodb";

const app = express()

app.get("/", (req,res) =>{
    res.send({message: "Hello from home"})
})

app.listen(8080,() =>{
    console.log("Running Node Server on port 8080...")
})


async function main(){
    const uri = "mongodb+srv://AEONData:AeonsuperApp123@aeon.bt4mfju.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        await client.connect();

        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

