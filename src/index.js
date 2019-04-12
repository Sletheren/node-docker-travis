const express = require('express')
const axios = require('axios')
const PORT = 8080;
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');

// App
const app = express();

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));   

app.get('/', (req, res) => {
  res.send('Hello From NodeJS');
});

MongoClient.connect('mongodb://mongodb:27017/database', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.', err)
    process.exit(1)
  } else {
    console.log('Connected to Mongodb!!')
  }
});

if(!module.parent){
  app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
  });
}
module.exports = app