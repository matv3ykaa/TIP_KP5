const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', surveyRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});