import mongoose from "mongoose";

// define the schema database of
mongoose;
const userSchema = new mongoose.Schema({
  travelID: String,
  userName: String,
  userLocation: String,
  userDestination: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
  departureDate: Date,
  returnDate: Date,
  numberOfPassengers: Number,
  travelMode: String,
});

const User = mongoose.model("User", userSchema);
export { User };
