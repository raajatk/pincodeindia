var pincodeSearch = require('./index.js');
var async = require('async');

async.auto({
  getPinInfo:function(next){
    pincodeSearch(208024,next);
  }
},function(err,results){
  console.log(results.getPinInfo);

})
