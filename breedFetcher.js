const request = require("request");


const fetchBreedDescription = function(argument1, _callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + argument1;
  request(URL, (error, response, content) => {
    if (error) {
      _callback("URL is wrong");
    } else {
      const data = JSON.parse(content);
      if (!data[0]) {
        _callback("The requested breed is not found.");
      } else {
        _callback(error, data[0].description.trim());
      }
    }
  });
};



module.exports = { fetchBreedDescription };