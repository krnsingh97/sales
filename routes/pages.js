const router = require('express').Router();

//controllers
const PagesController = require('../controllers/pagesController')
const SalesController = require('../controllers/salesController');

//routes
router.get('/', PagesController.show);
router.get('/new', SalesController.new);
router.get('/about', PagesController.show);
router.get('/contact', PagesController.show);

module.exports = router;