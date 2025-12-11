# **Express-приложение "Мини-опросник"**

## **Структура проекта**

```
mini-survey/
├── server.js              # Главный файл сервера
├── routes/
│   └── surveyRoutes.js    # Маршруты API
├── controllers/
│   └── surveyController.js # Логика обработки
├── middleware/
│   └── logger.js          # Middleware логирования
├── public/
│   └── index.html         # Веб-интерфейс
├── data/
│   └── surveys.json       # Данные опросов
└── package.json
```

## **Настройка проекта**

> Склонировать репозиторий
```
git clone https://github.com/matv3ykaa/TIP_KP5
```

> Установить Express
```
npm init -y
npm install express
```

> Запустить
```
node server.js
```

## **API Endpoints**

> GET /api/questions
**Получить список вопросов опроса**
```
curl http://localhost:3000/api/questions
```

> POST /api/submit
**Отправить ответы на опрос**
```
{
  "name": "Иван",
  "age": "20"
  "answers": {
    "q1": "Python",
    "q2": "Да",
    "q3": "Более 8 часов",
    "q4": "Senior Python developer",
    "q5": "300000"
  }
}
```

```
curl -X POST http://localhost:3000/api/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Иван","age":"20","answers":{"q1":"Python","q2":"Да","q3":"Более 8 часов","q4":"Senior Python developer","q5":"300000"}}'
```

> GET /api/results
**Получить все результаты опросов**
```
curl http://localhost:3000/api/results
```