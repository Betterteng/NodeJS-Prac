var express = require('express');
var router = express.Router();

// 其实也可以在js文件中传各种东西，这样如果不是global的话就会更有效了。
var vd = require('../videodata.json');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        name: 'Oscar',
        videoData2: vd
    });
});

module.exports = router;
