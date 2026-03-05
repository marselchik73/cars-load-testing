## Тестируемое API

### Базовый URL

`https://testologia.ru`

### Эндпоинты

| Метод | Путь            | Описание                          | Параметры                                  |
|-------|-----------------|-----------------------------------|--------------------------------------------|
| GET   | `/cars-data`    | Получение списка автомобилей      | `filter` (опционально) – марка автомобиля |
| POST  | `/cars-order`   | Отправка заявки на бронирование   | JSON: `{ "car": "BMW M4 Competition", "name": "Иван", "phone": "81234567890" }` |

### Примеры запросов

**GET /cars-data**


**POST /cars-order**

```json
POST https://testologia.ru/cars-order

Content-Type: application/json

{
  "car": "BMW M4 Competition",
  "name": "Иван Петров",
  "phone": "81234567890"
}