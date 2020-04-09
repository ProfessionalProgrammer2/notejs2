const fs = require('fs');
// require express
const express = require('express');
 //create object and add port
const app = express();
const port = 6500;

// Define default route with express
  app.get('/',(req,res) => {
      res.send('<h1> Welcome to express server</h1>')
  })

// Read file using express server
app.get('/getMovies', (req,res) => {
    fs.readFile('./data/db.json',(err,result) => {
        if(err){
            throw err;
        }else {
           // console.log(JSON.parse(result))
           res.send(JSON.parse(result))
        }
    })
})


// fs.appendFile('./data/mytext.txt','My text read file\n',(err) => {
//     if(err) {
//     throw err;
//     }
//     else{
//         console.log('Data written successfully')
//     }
//  })

// Create server to listen on port
 app.listen(port,(err) => {
     console.log('server is running on port '+port);
 })