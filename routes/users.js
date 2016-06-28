var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 
router.get('/basic', function(req, res, next) {
	res.render('basic', {title: 'rotatingCube' });
});

router.get('/loveislove', function(req, res, next) {
	res.render('loveisLove.jade', {title: '#LoveisLove' });
});

router.get('/Pexperiment', function(req, res, next) {
	res.render('pExperiment', {title: 'Pexperiment' });
});

module.exports = router;
