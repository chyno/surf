//0f9877d63b94697f985124d9cbb9c6cb
//http://maps.googleapis.com/maps/api/geocode/json?address=22207
//https://api.forecast.io/forecast/0f9877d63b94697f985124d9cbb9c6cb/38.932453,-77.081608
var rp = require('request-promise');



export function cords(zip)
{
   var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + zip;
    var options = {
    uri: url,
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
  };
  
   return rp(options);
    

  // return { lat : '23', long : '99'};
}

export function forcast(lat, long)
{
  var url = 'https://api.forecast.io/forecast/0f9877d63b94697f985124d9cbb9c6cb/' + lat +',' + long;
  
    var options = {
    uri: url,
     headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
  };
  
   return rp(options);
}
