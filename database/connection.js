const mongoose = require('mongoose');

const dbURI = "mongodb://localhost/blog-app";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dbURI, {
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