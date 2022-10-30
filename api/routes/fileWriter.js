const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', function (req, res) {
  res.send('API is working properly');
  fs.writeFile('../src/constants/formData.json', JSON.stringify(req.body), (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
});

module.exports = router;
