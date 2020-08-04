const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 


// set up express app
const app = express();
app.use(cors());

//connect to db
mongoose.connect("mongodb+srv://Mithun:HEdlAqrrRk61mN5G@cluster0-8iwmb.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function(){
        console.log("Connected to database");
    })
    .catch(function(){
        console.log('Connection failed');
    });

mongoose.Promise = global.Promise;

// use body-parser
app.use(bodyParser.json());

//initialize routes
app.use('/apiRegister',require('./routes/apiRegister'));
app.use('/apiLogin',require('./routes/apiLogin'));
app.use('/apiTest',require('./routes/apiTest'));
app.use('/apiPractice', require('./routes/apiPractice'));
app.use('/apiStudentDashboard', require('./routes/apiStudentDashboard'));
app.use('/apiPracticedQuestionsUpdate', require('./routes/apiPracticedQuestionsUpdate'));
app.use('/apiScoreUpdate', require('./routes/apiScoreUpdate'));
app.use('/apiProgress', require('./routes/apiProgress'));
app.use('/apiDocx',require('./routes/apiDocx'))
// app.use('/apiDevelopment', require('./routes/apiDevelopment'));

//listen for request
app.use(express.static('portal'))
const PORT=process.env.port||5000
app.listen(PORT,function(){
    console.log(`Now listening for requests on ${PORT}`);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
  });
