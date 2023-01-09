const mongoose = require ('mongoose');
 db = async()=>{
   try {
      await mongoose.connect("mongodb+srv://sarans:fullstackedemobackend@full-stack-demo-backend.drq0dgt.mongodb.net/employees?retryWrites=true&w=majority");
        console.log('Db Connnection Established')
    } catch(error){
        console.log('DB Error: ',error);
    }
   
}
module.exports = db;