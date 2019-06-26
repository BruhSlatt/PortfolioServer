
const express = require('express')
const app = express()

// adding middleware // setting up template engine
app.set("view engine","ejs"); 

app.use(express.static('./public'));
 
app.get('/home', function (req, res) {
  res.render('home');
});
app.get('/bucketList', function (req, res) {
    res.render('bucketList');
  });
  app.get('/games', function (req, res) {
    res.render('games');
  });
  app.get('/interests', function (req, res) {
    res.render('interests');
  });
  app.get('/music', function (req, res) {
    res.render('music');
  });
  app.get('/projects', function (req, res) {
    res.render('projects');
  });
 
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})