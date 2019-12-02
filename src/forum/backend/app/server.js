const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./config/db').url;
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

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

// // Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }

app.listen(port, () => console.log(`Server started on port ${port}`));