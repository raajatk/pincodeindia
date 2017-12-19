var currentDir = process.cwd();
var pincodeSearch = require(currentDir+'/index.js');
var async = require('async');

async.auto({
  getPinInfo:function(next){
    pincodeSearch(208024,next);
  }
},function(err,results){
  console.log(results.getPinInfo);
})
