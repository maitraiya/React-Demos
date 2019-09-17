const express = require('express');
const controller = require('./ask').getMessage;
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.post('/ask', controller)  
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Listening on port '+port);
});