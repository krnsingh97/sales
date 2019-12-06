const router = require('express').Router();

const SurveysController = require('../controllers/surveysController');

//Begin routes
router.get('/', SurveysController.index);
router.get('/new', SurveysController.new);
router.get('/:id', SurveysController.show);
router.get('/:id/edit', SurveysController.edit);
router.post('/', SurveysController.create);
router.post('/update', SurveysController.update);
router.post('/destroy', SurveysController.destroy);
//End routes

module.exports = router;