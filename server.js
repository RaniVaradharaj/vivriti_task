// mongodb+srv://RaniVaradharaj:mydb123@cluster0.jtgucvc.mongodb.net/Employees?retryWrites=true&w=majority

const mongoose = require('mongoose');

const express = require('express');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const employeeRoutes = require('./routes/route');

require("dotenv").config();



const port = process.env.PORT || 4500;

// async function main() {
    const uri = "mongodb+srv://RaniVaradharaj:mydb123@cluster0.jtgucvc.mongodb.net/Employees?retryWrites=true&w=majority";
    
    //open connection
     mongoose.connect(uri).
        then((res) => {
            console.log("MongoDB is connected");
        })
        .catch((e) => {
            console.error(e);
        })
        
// }

//cors
app.use(cors());

//Middleware
app.use(bodyParser.json());

//API status
app.get('./api/', (req, res) => {
    res.send("API status 200");
})

app.use('/',employeeRoutes)


//Listening port
app.listen(port, () => { console.log(`The Server is successfuly running at port ${port}`) });

// main().catch(console.error);