# Как запустить это приложение

## Для начала нужно установить необходимые пакеты

```
cd frontend
npm i
cd backend
npm i
```
## Запускаем фронт
```
cd frontend
npm run dev
```
## Запускаем бэк
```
cd backend
npm start
```
После этих команд запустится фронт по ссылке [http://localhost:3000](http://localhost:3000).\
Бэк будет доступен по адресу [http://localhost:3003](http://localhost:3003)
## Документация к бэкэнду
Используемая база данных MongoDB
Дамп дабы лежит в `backend/users.users.json`

### Ручки:
1. Пользователи

| Описание запроса     |                  Пример                  | 
|----------------------|:----------------------------------------:| 
| _Зарегистрироваться_ | POST - http://localhost:3003/user/signup |
| _Войти_              |  POST - http://localhost:3003/user/auth  |

## Регистрация
Запрос
```js
{
    login: string, // опционально
    email: string,
    name: string,
    age: number,
    password: string  
}
```
Ответ
```js
{
    ok: boolean,
    info: {
        type: sting,
    },
    authToken: string,
    detail: string,
}
```
Авторизация
---
Запрос
```js
{
    type: email | user, 
    login:string,
    password:string
}
```
Ответ
```js
{
    ok: boolean,
    info: {
        type: sting,
    },
    authToken: string,
    detail: string,
}
```





