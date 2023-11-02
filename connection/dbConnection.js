// load env
if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
}

const mongoose = require('mongoose');

// set strict query mongoose
mongoose.set('strictQuery', true)

async function connecToDb(){
  try{
      await mongoose.connect(process.env.DB_URL );
      console.log('databases connection success');
  }catch(err){
      console.log(err);
  }
}

module.exports =  connecToDb;


