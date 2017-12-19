# Pincodeindia
npm for fetching location info by entering pincoode

# For installing
>npm install pincodeindia

# For testing the example.js, just run:
>node example.js

# Example
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

## License
This project is licensed under the MIT License - see the LICENSE file for details


