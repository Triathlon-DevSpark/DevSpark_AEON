import path from "path";
import express from "express"
import MongoClient from "mongodb";
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Serving the react build app through NodeJS (No Cors errors)
const app = express()
app.use(express.static("dist"));

const _dirname = typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))


app.get("/", (req, res) => {
    // res.send({ message: "Hello from home" })
    res.sendFile(path.resolve(_dirname, "dist", "index.html"));
})

// Other routes

// Listening port
app.listen(8080, () => {
    console.log("Running Node Server on port 8080...")
})


async function main() {
    const uri = "mongodb+srv://AEONData:AeonsuperApp123@aeon.bt4mfju.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

