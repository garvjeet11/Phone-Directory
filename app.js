var Sequelize = require('sequelize');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


const model = require('./models');
const config = require('./config/config.json');


const connection = new Sequelize(config.development.database, config.development.username, config.development.password, {
	host: config.development.host,
	dialect: config.development.dialect
});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res){
  model.UserName.findAll({
    include: [{
      model: model.Contact
   }]
  })
  .then(temp => {
    res.send(temp);
  });
});


app.get('/user/:userid', function(req,res){
  model.UserName.findAll({
    where:{
      userid: req.params.userid
    },
    include: [{
      model: model.Contact
   }]
  })
  .then(function(data){
    console.log();
    res.send(data);
  })
})


app.post('/user', (req,res)=>{
    model.UserName.create({
      userid:req.params.userid,
      UserName:req.params.UserName
    }).then(temp=>{
      model.Contact.create({contactid:req.params.contact_id,
        userid:temp.userid,
        contactNumber:req.params.contact,
        address:req.params.address
    })
})
});



function main(){
  connection.authenticate()
  .then(function(){
    console.log("Sequelize connection established!");
    return foreignKey();
  })
  .then(function(){
    app.listen(port, () => console.log(`PhoneDirectory app running on port ${port}!`));
  })
}

main();


//referencing foreign key in models

var foreignKey=function()
  { return new Promise(function(resolve,reject){
    model.UserName.hasMany(model.Contact, {foreignKey: 'userid'});
    model.Contact.belongsTo(model.UserName, {foreignKey: 'userid'});
    resolve();
  })
}