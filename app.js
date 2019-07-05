const model = require('./models');
const express = require('express');
const connection = require('./sequelizeConnet')
const app = express();
const port = 3000;
var route = require('./routers');
var cors = require('cors');
app.use(cors()) 

app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function main(){
  connection.authenticate()
  .then(function(){
    console.log("Sequelize connection established!");
    return foreignKey();
  })
  .then(function(){
    app.listen(port, () => console.log(`PhoneDirectory app running on port ${port}!`));
    app.use('/', route);
  })
  .catch(function (error) {
    throw error;
    });
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