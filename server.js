const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Gtts = require('gtts');
const app = express();

//To create an environment variable port
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

//To create middleware instance
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/speech', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/hear', (req, res) => {
  const gtts = new Gtts(req.query.text, req.query.lang, req.query.speed);
  gtts.stream().pipe(res);
});

// app.post(`/stream`, (req, res) => {
//   const text = req.body.text
//   const speech = new gtts(text, 'sw', true)

//   speech.save("output.mp3")
//       .then(function () {
//           res.download("output.mp3")
//       })

//       .catch(function (err) {
//           console.log(err)
//       })
// });  

app.listen(port, () => console.log(`Server is running on ${port}`));
