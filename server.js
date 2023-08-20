import path from "path";
import express from "express";
import MongoClient from "mongodb";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { db } from "./db.js";
import { User } from "./Model/user.js";
import { Planet } from "./Model/planet.js";
import cors from "cors"

import { registerUser, getUserDetails } from "./Controllers/userControllers.js";

import { RegisterPlanet } from "./Controllers/planetController.js";

// Serving the react build app through NodeJS (No Cors errors)
const app = express();
app.use(express.static("dist"));
app.use(express.json());
app.use(cors());

const _dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  // res.send({ message: "Hello from home" })
  res.sendFile(path.resolve(_dirname, "dist", "index.html"));
});

app.route("/user").post(registerUser).get(getUserDetails);
app.route("/planet").post(RegisterPlanet);

// Listening port
app.listen(8080, async () => {
  console.log("Running Node Server on port 8080...");
});
