const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = "mongodb+srv://ADMIN:V47iMvsQyuwnUikx@cluster0.trhpy.mongodb.net/blog?retryWrites=true&w=majority";
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