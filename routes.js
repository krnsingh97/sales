const express = require('express');
const app = express();

const pageRoutes = require('./routes/pages');
const authorRoutes = require('./routes/authors')
const surveyRoutes = require('./routes/surveys')

const sessionRoutes = require('./routes/sessions')
// Registering our pageRoutes
app.use('/', pageRoutes);
app.use('/authors', authorRoutes);
app.use('/surveys', surveyRoutes);
app.use('/',sessionRoutes);

// Exporting the chang

module.exports = app;