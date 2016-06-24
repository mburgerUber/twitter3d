var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/basic', function(req, res, next){
	res.render('basic', {title: 'rotatingCube' });
});

router.get('/loveislove', function(req, res, next){
	res.render('loveIsLove', {title: '#LoveisLove' });
});

module.exports = router;
