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

## **Пример работы**

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/36f711f5-c1b5-475d-b288-174af32c8a5c" />

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/4eea64cc-9058-42b3-ae4c-3027f47baf60" />

<img width="589" height="126" alt="image" src="https://github.com/user-attachments/assets/31054f1c-dbf4-41e4-b745-ae45efa7d52a" />
