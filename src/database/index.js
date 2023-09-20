import mongoose from "mongoose";


const configOptions = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}


const connectToDB = async()=>{
  const connectionUrl='mongodb+srv://jojololamoses:Tiplingold@cluster0.s29silt.mongodb.net/';

  (await mongoose.connect(connectionUrl,configOptions)).then(()=>console.log('Ecommerce database connected successfully')).catc((err)=> console.log(`Getting eror from DB connection ${err.message}`))
}

export default connectToDB