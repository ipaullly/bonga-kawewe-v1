const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

//To create an environment variable port
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

//To create middleware instance
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/speech', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server is running on ${port}`));
