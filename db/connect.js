const mongoose = require ('mongoose');
 db = async()=>{
   try {
      await mongoose.connect(process.env.MONGO_URL);
        console.log('Db Connnection Established')
    } catch(error){
        console.log('DB Error: ',error);
    }
   
}
module.exports = db;