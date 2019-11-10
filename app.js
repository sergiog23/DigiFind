const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get('/submit-form',function(req,res){
  res.render('submit-form',{qs:req.query});
});

app.post('/submit-form',urlencodedParser,function(req,res){
  console.log(req.body);
  res.render('submit-form',{data: req.body});
});

app.listen(3000, function() {
  console.log('server is running on port 3000')
})
