require ('dotenv').config();
const express = require ('express');
const db = require('./db/connect');
const employeeRoutes = require('./routes/employees.routes')
const cors = require('cors')

const app = express();
app.use(cors());
//connecting db
db();

app.get('/',(req,res)=>{
    res.send('Wellcome Saran')
});

//middleware
app.use(express.json());


app.use('/api',employeeRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`)
});