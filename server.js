const express = require('express');
const axios = require('axios');
const SmeeClient = require('smee-client')

// smee webhook client
const smee = new SmeeClient({
  source: 'https://smee.io/Y4NJTCDjHI8UawNi',
  target: 'http://localhost:3000/',
  logger: console
})

let count = 0

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
  // sendReqBackToGlitch()
    count += 1
  console.log("Request received,", count)
})

// run the server on port 3000
app.listen('3000')
