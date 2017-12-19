# pincodeindia
npm for fetching location info by entering pincoode

# for installing
npm install pincodeindia

# for testing the example.js, just run:
>node example.js

# example
>var pincodeSearch = require('./index.js');
>var async = require('async');

>async.auto({
>  getPinInfo:function(next){
>    pincodeSearch(208024,next);
>  }
>},function(err,results){
>  console.log(results.getPinInfo);
>
>})


