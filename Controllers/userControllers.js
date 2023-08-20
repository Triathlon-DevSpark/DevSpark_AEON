import { User } from "./../Model/user.js";

const registerUser = async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getUserDetails = async (request, response) => {
  const users = await User.find({}).populate("userDestination");
  response.send(users);
};

export { registerUser, getUserDetails };
