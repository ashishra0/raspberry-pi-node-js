const express = require('express');
const axios = require('axios');

const app = express();
const data = {
  "status": "There is power in the house💡"
}
function sendReqBackToGlitch() {
  axios
    .post("https://crimson-north-ceiling.glitch.me", data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}

app.post('/', (req, res) => {
  sendReqBackToGlitch()
  console.log('request received from glitch')
  res.send('ok')
})

app.listen('3000')