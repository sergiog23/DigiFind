const express = require('express')
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const app = express()
const path = require('path');

app.use(fileUpload());
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())

var urlencodedParser = bodyParser.urlencoded({
  extended: true
})

app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  console.log('Rendering index');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/submit-form', function (req, res) {
  console.log('just something')
  res.render('submit-form', {
    qs: req.query
  });
});

app.post('/submit-form', function (req, res) {
  console.log('Received submit POST request');
  console.log(JSON.stringify(req.body, null, 2))

  // let sampleFile = req.files.itemImage;

  // // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv('./src/imgs/filename.png', function (err) {
  //   if (err)
  //     return res.status(500).send(err);

  //   res.send('File uploaded!');
  // });

  res.render('submit-form.html', {
    data: req.body
  });
});

app.listen(3000, function () {
  console.log('server is running on port 3000')
})