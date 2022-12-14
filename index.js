require ('dotenv').config();
const express = require ('express');
const db = require('./db/connect');
const employeeRoutes = require('./routes/employees.routes')
const cors = require('cors')

const app = express();
//connecting db
db();

app.get('/',(req,res)=>{
    res.send('Wellcome Saran')
});

//middleware
app.use(express.json());
app.use(cors());

app.use('/api',employeeRoutes)

const PORT = process.env.PORT || 5000

app.listen(5000,()=>{
    console.log(`App is running on PORT ${PORT}`)
});