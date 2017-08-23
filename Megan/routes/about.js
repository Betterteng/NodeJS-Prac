var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res, next) {
    // Display about view --> about.ejs
    res.render('about', {
        title: 'About',
        name: 'Teng'
    });
});

module.exports = router;
