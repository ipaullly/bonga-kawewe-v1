const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gtts = require('gtts.js').gTTS

const app = express();

//To create an environment variable port
const port = process.env.PORT || 8080;

//To create a middleware instance from the root directory 
app.use(express.static('build'));

//To create middleware instance
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/speech', function (req, res) {
  return res.send('pong');
});

app.get(`/`, (req, res) => {
  const speed = req.query.speed;
  const text = req.query.text;
  const speech = new gtts(text,'sw',speed)

  speech.save("bongaSwahili.mp3")
    .then(() => {
      res.download("bongaSwahili.mp3");
    })
    .catch((err)=> {
      console.log(err);
    })
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
