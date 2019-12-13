/**
 *  Created solely by Eddy D. Varela
 * 
 *  Entry point for web application backend
 *  Express: Helps with handling routes and requests 
 *  Mongoose: Helps with interfacing with the database streamlined
 *  BodyParser: Helps with parsing data from different requests
 *  
 * 
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./config/db').url;
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


//Connect to DB
mongoose.connect(db, {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }
).then(()=> {
    console.log("Connection to DB established successfully");
}).catch(err => console.log(err));

// Routes
app.use('/api/forum', require('./routes/api/forumRoutes'));


app.listen(port, () => console.log(`Server started on port ${port}`));