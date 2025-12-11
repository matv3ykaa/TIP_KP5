const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/surveys.json');

const questions = [
  { id: 1, text: 'Какой язык программирования Вы сейчас изучаете?', type: 'lang' },
  { id: 2, text: 'Вам нравится этот язык?', type: 'yesno' },
  { id: 3, text: 'Сколько времени Вы уделяете разработке в день?', type: 'time' },
  { id: 4, text: 'На какой позиции Вы хотите работать?', type: 'text' },
  { id: 5, text: 'Какую зароботную плату Вы ожидаете на данной позиции?', type: 'number' },
];

const getQuestions = (req, res) => {
  res.json({ questions });
};

const getResults = (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    const surveys = JSON.parse(data);
    res.json({ count: surveys.length, surveys });
  } catch (err) {
    res.json({ count: 0, surveys: [] });
  }
};

const submitSurvey = (req, res) => {
  const { name, answers } = req.body;

  if (!name || !answers) {
    return res.status(400).json({ error: 'Не указано имя или ответы' });
  }

  const survey = {
    id: Date.now(),
    name,
    answers,
    date: new Date().toLocaleString()
  };

  try {
    let surveys = [];
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      surveys = JSON.parse(data);
    }
    surveys.push(survey);
    fs.writeFileSync(dataPath, JSON.stringify(surveys, null, 2));
    res.status(201).json({ message: 'Опрос сохранён', survey });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка сохранения' });
  }
};

module.exports = { getQuestions, getResults, submitSurvey };