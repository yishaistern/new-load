const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/tell', (req, res) => {
    res.send('Hello World!')
})

app.post('/userState', (req, res) => {
    setTimeout(() => {
        res.send({ userName: 'supercalifragilisticexpialidocious'})
    }, 2000);
    
})


app.post('/get-frist-list', (req, res) => {
    setTimeout(() => {
        res.send({ list: ['']})
    }, 2000);
    
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})