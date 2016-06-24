var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'twitter3d' });
});

router.get('/basic', function(req, res, next){
	res.render('basic', {title: 'rotatingSphere' });
});

router.get('/loveislove', function(req, res, next){
	res.render('loveIsLove', {title: '#LoveisLove' });
});

module.exports = router;

