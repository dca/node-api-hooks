var express = require('express');
var router = express.Router();

function hooks(req, res) {

  var message = req.body;

  console.log('call webhook', message);
  console.log('call webhook', Object.keys(message));

  res.json({
    body: req.body,
    key: Object.keys(req.body),
    time: Date.now()
  });

};



router.get('/', hooks);
router.post('/', hooks);

module.exports = router;
