// "mongodb+srv://AEONData:AeonsuperApp123@aeon.bt4mfju.mongodb.net/"
import mongoose from "mongoose"

const server = "AEONData:AeonsuperApp123@aeon.bt4mfju.mongodb.net"; 
const database = 'aeon_database'; 
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb+srv://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

const db = new Database(); // Create an instance of the Database class
export { db }; // Export the instance