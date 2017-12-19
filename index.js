'use strict';

module.exports = function(pincode, callback) {

  const file = require.resolve('./info.json');
  const fs = require('fs');
  const async = require('async');
  var pincode = pincode.toString();

  async.auto({
    readFile:function(next){
      fs.readFile(file,'utf8',function(err,data){
        var obj=JSON.parse(data);
        next(null,obj);
      });
    },
    searchPin:['readFile',function(result, next){
      var pinArray = result.readFile;
      var resObj = [];
      async.forEach(pinArray,function(pinObj, arrNext){
        if(pincode == pinObj.pincode){
          resObj.push(pinObj);
        }
        arrNext();
      },function(err){
        next(null,resObj);
      })
    }]
  },function(err, results){
    if(results.searchPin.length>0){
      var resObj = {
        error:err,
        result:results.searchPin,
        message:"The Data has been fetched Successfully."
      }
      callback(null,resObj);
    }else {
      var resObj = {
        error:err,
        result:results.searchPin,
        message:"Sorry! No data available for the queried PinCode."
      }
      callback(null,resObj);
    }
  })
};
