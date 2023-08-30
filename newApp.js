const path = require('path');

const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');

// get config vars
dotenv.config(); //when process env gets defined



const app = express();



app.use(cors());

// app.use(bodyParser.urlencoded());  ////this is for handling forms
app.use(express.json());  //this is for handling jsons



app.use((req, res) => {
    console.log('u1rlll', req.url);
    console.log('Req is succesfful');
    res.sendFile(path.join(__dirname, `public/${req.url}`));
})


// console.log(process.env)
app.listen(3000)