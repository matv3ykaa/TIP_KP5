const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.get('/questions', surveyController.getQuestions);

router.get('/results', surveyController.getResults);

router.post('/submit', surveyController.submitSurvey);

module.exports = router;