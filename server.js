

var express=require('express');

var app=express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
dotenv.config({ path: './config/config.env' });
const Company = require('./models/companylistsave');



connectDB();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));





app.post('/add',async (req,res) => {
   console.log("got request");
  const {
    name,
    status,
    type,
    role,
    country
  }=req.body;
  
   const company = await Company.create({
    Name: name,
    Status: status,
    Type: type,
    Role: role,
    Country: country,

  });
  
   
  
 
}); 


app.get('/getlist',(req,res) => {

  
  Company.find({}, function(err, coompanies) {

    res.json(coompanies);  
    
  });
});


const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

//Start server
const server = app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  
}