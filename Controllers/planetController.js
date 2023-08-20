import { Planet } from "./../Model/planet.js";

const RegisterPlanet = async (request, response) => {
  const planet = new Planet(request.body);

  console.log(request.body);
  try {
    await planet.save();
    response.send(planet);
  } catch (error) {
    response.status(500).send(error);
  }
};

export { RegisterPlanet };
