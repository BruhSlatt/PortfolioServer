
const express = require('express')
const app = express()

// adding middleware // setting up template engine
app.set("view engine","ejs"); 
 
app.get('/projects', function (req, res) {
  res.render('projects');
});
 
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})