const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  console.log('Rendering index');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/submit-form',function(req,res){
  console.log('just something')
  res.render('submit-form',{qs:req.query});
});

app.post('/submit-form',urlencodedParser,function(req,res){
  console.log('Received submit POST request');
  console.log(JSON.stringify(req.body, null, 2));
  res.render('submit-form.html',{data: {
    ...req.body,
    item: 'something',
    name: 'test',
    number: '',
  }});
});

app.listen(3000, function() {
  console.log('server is running on port 3000')
})
