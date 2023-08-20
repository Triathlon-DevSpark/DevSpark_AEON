import mongoose from "mongoose";

// define the schema database of
mongoose;
const planetSchema = new mongoose.Schema({
  planetName: String,
  planetImage: String,
  planetColor: String,
  planetProperties: {
    planetMap: String,
    planetNormalMap: String,
    planetCloudsMap: String,
    planetSpecularMap: String,
  },
  planetLocation: String,
  distanceFromEarth: Number,
  planetPopulation: Number,
});

const Planet = mongoose.model("Planet", planetSchema);
export { Planet };
