const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  auth = require('./auth');

const config = require('./config.json');

// Resource
const contactResource = require('./resource/contact');

// Configuration
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");  
  // res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//auth checking
app.get('/checkauth', auth, (req, res, next) => {
  res.send({'message': 'auth granted'});
})

// Resource Route Definition
app.use('/contact', contactResource);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({error: 500, message:'Internal Server Error'});
});

app.listen(config.port, () => {
    console.log('Listening on ' + config.port);
})
