const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

// const connectToMongo = () => {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(mongoURI, () => {
//         console.log('Connected to MongoDB');
//     })
// }
const run = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/inotebook");
    console.log("Connected to myDB");
  }
  
  run()
  .catch((err) => console.error(err))

module.exports = run;