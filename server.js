const express = require('express');
const axios = require('axios');
const SmeeClient = require('smee-client')

// smee webhook client
const smee = new SmeeClient({
  source: 'https://smee.io/mQAzpDaQKOQpXyr0',
  target: 'http://localhost:3000/',
  logger: console
})

// start forwarding to localhost
smee.start()

// express server
const app = express();

// payload
const data = "There is power in the house💡";

// helper methods
function sendReqBackToGlitch() {
  axios
    .post("http://localhost:8000/", data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}

// routes
app.post('/', (req, res) => {
  sendReqBackToGlitch()
  console.log('request received from glitch')
  res.sendStatus(200)
})

// run the server on port 3000
app.listen('3000')
