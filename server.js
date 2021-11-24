var express = require('express'); 
var app = express(); 
var PORT = 3001; 
  
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", PORT); 
})