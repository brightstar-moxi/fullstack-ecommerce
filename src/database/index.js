// import mongoose from "mongoose";


// const configOptions = {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }


// const connectToDB = async()=>{
//   const connectionUrl='mongodb+srv://brightstar:tiplingold@cluster0.jls0e.mongodb.net/brightstardatabase?retryWrites=true&w=majority';
//   //const connectionUrl='mongodb+srv://jojololamoses:Tiplingold@cluster0.s29silt.mongodb.net/';

//   (await mongoose.connect(connectionUrl,configOptions)
//   .then(() => console.log('Ecommerce database connected successfully')).catch((err)=> console.log(`Getting eror from DB connection ${err.message}`))
// }

// export default connectToDB

// import mongoose from "mongoose";

// const configOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// const apiUrl = process.env.DATABASE_MONGODB_SECRET;

// const connectToDB = async () => {
//   const connectionUrl =
//   apiUrl;

//   mongoose
//     .connect(connectionUrl, configOptions)
//     .then(() => console.log("Ecommerce database connected successfully!"))
//     .catch((err) =>
//       console.log(`Getting Error from DB connection ${err.message}`)
//     );
  
// };

// export default connectToDB;






// const mongoose = require('mongoose');

// mongoose.connect('your-connection-string', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   connectTimeoutMS: 30000, // Increase the timeout as needed
//   socketTimeoutMS: 30000,  // Increase the timeout as needed
// });

import mongoose from "mongoose";

const configOptions = { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Increase the timeout as needed
  socketTimeoutMS: 30000,  // Increase the timeout as needed

};

// const apiUrl = process.env.DATABASE_MONGODB_SECRET;

const connectToDB = async () => {
  const connectionUrl = 'mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/';

  try {
    await mongoose.connect(connectionUrl, configOptions);
    console.log("Ecommerce database connected successfully!");
  } catch (err) {
    console.log(`Error connecting to the database: ${err.message}`);
  }
};

export default connectToDB;
