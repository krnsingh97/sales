const router = require('express').Router();

//controllers
const PagesController = require('../controllers/pagesController')
const SurveysController = require('../controllers/surveysController');

//routes
router.get('/', PagesController.show);
router.get('/new', SurveysController.new);
router.get('/about', PagesController.show);
router.get('/contact', PagesController.show);

module.exports = router;