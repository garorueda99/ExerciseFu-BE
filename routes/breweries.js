var express = require('express');
var router = express.Router();
const axios = require('axios').default;

/* GET users listing. */
router.get('/', function(req, res2, next) {
  axios.get('https://api.openbrewerydb.org/breweries')
  .then(function (response) {
    // handle success
    res2.json(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


});

module.exports = router;
