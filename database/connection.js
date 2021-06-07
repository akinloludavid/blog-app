const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(String(process.env.MONGO_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
      useCreateIndex:true,
      useFindAndModify:true
    })
    console.log(`MongoDB connected to ${connect.connection.host}`);
  } catch (err) {
    console.log(err)

  }

}
module.exports = connectDB;