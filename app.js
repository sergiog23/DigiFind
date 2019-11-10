const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get('/name',function(req,res){
  res.render('name',{qs:req.query});
});
app.listen(3000, function() {
  console.log('server is running on port 3000')
})
