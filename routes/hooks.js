var express = require('express');
var router = express.Router();

function hooks(req, res) {

	var message = req.body;
	var query = req.query;

	console.log('call webhook', message, query);
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
