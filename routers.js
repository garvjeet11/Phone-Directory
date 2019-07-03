const express = require('express');
const route = express.Router();
const model = require('./models');


route.get('/', function(req, res){
  model.UserName.findAll({
    include: [{
      model: model.Contact
   }]
  })
  .then(temp => {
    res.send(temp);
  });
});


route.get('/user/:userid', function(req,res){
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


route.post('/user',(req,res)=>{
  model.UserName.findOne({where: {UserName:req.body.UserName}}).then(entry=>{
    if(entry == null){
      model.UserName.create({
        UserName:req.body.UserName})
      .then((temp) => {
        model.Contact.create({
          userid:req.body.connectid,
          contactNumber:req.body.contactNumber,
          address:req.body.address
        })
        .then(()=>{
          res.end(JSON.stringify(req.body));
        })
      });
    }
    else{
      model.Contact.create({
        userid: req.body.userid,
        contactNumber: req.body.contactNumber,
        address:req.body.address
      })
    }
  })
});


route.put('/put/:contactid', function (req, res) {
  
  model.Contact.findOne({where:{contactid:req.params.contactid}})
  .then(contactentry=>{
    if(contactentry!==null){
      contactentry.update(
        {contactNumber: req.body.contactNumber, address:req.body.address, userid:req.body.connectid}
      )
      .then(data=>{
        res.send(data)
      })
    }
    else{
      res.send('Entry does not exist in database')
    }
  })
  
})


route.delete('/del/:userid', function(req,res){
  model.Contact.destroy({
    where: { userid:req.params.userid}
  })
  .then(function(){
    model.UserName.destroy({
      where: { userid: req.params.userid}
    })
    res.send('user deleted')
  })
})


module.exports = route;



