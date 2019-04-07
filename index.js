const express = require('express')
const axios = require('axios')
const PORT = 8080;
const MongoClient = require('mongodb').MongoClient

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello From NodeJS\n');
});

MongoClient.connect('mongodb://mongodb:27017/database', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(PORT, () => {
      console.log(`Backend Running on ${PORT}`);
    });
  }
})