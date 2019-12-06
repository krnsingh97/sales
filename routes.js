const express = require('express');
const app = express();

const pageRoutes = require('./routes/pages');
const authorRoutes = require('./routes/authors')
const saleRoutes = require('./routes/sales')

const sessionRoutes = require('./routes/sessions')
// Registering our pageRoutes
app.use('/', pageRoutes);
app.use('/authors', authorRoutes);
app.use('/sales', saleRoutes);
app.use('/',sessionRoutes);

// Exporting the chang

module.exports = app;