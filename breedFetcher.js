const request = require("request");
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

request(URL, (error, response, content) => {

  if (error) {
    console.log("URL is wrong");
  } else {
    const data = JSON.parse(content);
    if (!data[0]) {
      console.log("The requested breed is not found.");
    } else {
      console.log(data[0].description);
    }
  }

});