const router = require('express').Router();

const SalesController = require('../controllers/salesController');

//Begin routes
router.get('/', SalesController.index);
router.get('/new', SalesController.new);
router.get('/:id', SalesController.show);
router.get('/:id/edit', SalesController.edit);
router.post('/', SalesController.create);
router.post('/update', SalesController.update);
router.post('/destroy', SalesController.destroy);
//End routes

module.exports = router;