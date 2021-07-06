# auth-api

this project is a practice prioject for lab 08 of 401 course at asac

- **Author** : hiba salem

- ### description

Authentication Server Phase 3: Role Based Access Control

---

- ### NML

![NML](./lab08.jpg)

---

- ### [PR](https://github.com/hibasalem/auth-api/pull/1)

---

- ### deploy links

  - [ deployment](https://auth-apimain.herokuapp.com)

  - [tests report](https://github.com/hibasalem/auth-api/actions)

---

- ### getting this app

  - clone and npm i
  - npm start or nodemon

---

- ### test this app

  - clone and npm i -D.
  - npm test

---

- ### Setup

  - `.env requirements`
  - `PORT` - Port Number
  - `MONGODB_URI` - mongo link
  - `SECREAT` - a password

---

- ### end points

  - `/`

  ```

  {
  home route
  }

  ```

  - post `/signup`

  - body ` {"username": "hiba","password": "1234","role": "admin","email": "0000"}`

  ```
  {
  {
  "user": {
      "role": "admin",
      "_id": "60e4c123294f9c603c89eff9",
      "username": "hiba547527",
      "password": "$2b$10$OSWCn6iIGba.RjkbRbZ9MeT783NP45BpofzTHIgXz9D/vTB6DOkt2",
      "__v": 0,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04",
      "capabilities": [
          "read",
          "create",
          "update",
          "delete"
      ],
      "id": "60e4c123294f9c603c89eff9"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"
  }
  }

  ```

  - post `/signin`

  - basic auth `{ username: 'hiba', password: '1234'};`

  ```
  {
  "user": {
      "role": "admin",
      "_id": "60e4c123294f9c603c89eff9",
      "username": "hiba547527",
      "password": "$2b$10$OSWCn6iIGba.RjkbRbZ9MeT783NP45BpofzTHIgXz9D/vTB6DOkt2",
      "__v": 0,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04",
      "capabilities": [
          "read",
          "create",
          "update",
          "delete"
      ],
      "id": "60e4c123294f9c603c89eff9"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"
  }

  ```

  - get `/api/v1/food` or `/api/v1/clothes` or `/api/v2/food` or `/api/v2/clothes`

  - barear auth for v2 only ` "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"`

  - body ` {"name": "test","color": "123","size": "sss"}` or ` {"name": "test","calories": 123,"type": "FRUIT"}`

  ```

  [
      {
          "_id": "60e4a75b84ab3a544bb63b0b",
          "name": "test",
          "color": "123",
          "size": "sss",
          "__v": 0
      }
  ]

  ```

  or

  ```

   [
       {
           "_id": "60e4a75b84ab3a544bb63b0b",
           "name": "test",
           "calories": 123,
           "type": "FRUIT",
           "__v": 0
       }
   ]

  ```

  - get `/api/v1/food/${id}` or `/api/v1/clothes/${id}` - `/api/v2/food/${id}` or `/api/v2/clothes/${id}`

  - barear auth for v2 only ` "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"`

  ```
       {
           "_id": "${id}",
           "name": "test",
           "calories": 123,
           "type": "FRUIT",
           "__v": 0
       }

  ```

  or

  ```
        {
          "_id": "${id}",
          "name": "test",
          "color": "123",
          "size": "sss",
          "__v": 0
      }
  ```

  - post `/api/v1/food` or `/api/v1/clothes` - `/api/v2/food` or `/api/v2/clothes`

  - barear auth for v2 only ` "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"`

  ```
      {
          "_id": "60e4a75b84ab3a544bb63b0b",
          "name": "test",
          "calories": 123,
          "type": "FRUIT",
          "__v": 0
      }

  ```

  or

  ```
        {
           "_id": "60e4a75b84ab3a544bb63b0b",
          "name": "test",
          "color": "123",
          "size": "sss",
          "__v": 0
      }
  ```

  - put `/api/v1/food/${id}` or `/api/v1/clothes/${id}` - `/api/v2/food/${id}` or `/api/v2/clothes/${id}`

  - barear auth for v2 only ` "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"`

  - body ` {"name": "test","color": "123","size": "sss"}` or ` {"name": "test","calories": 123,"type": "FRUIT"}`

  ```
       {
           "_id": "${id}",
           "name": "test",
           "calories": 123,
           "type": "FRUIT",
           "__v": 0
       }

  ```

  or

  ```
        {
          "_id": "${id}",
          "name": "test",
          "color": "123",
          "size": "sss",
          "__v": 0
      }
  ```

  - delete `/api/v1/food/${id}` or `/api/v1/clothes/${id}` - `/api/v2/food/${id}` or `/api/v2/clothes/${id}`

  - barear auth for v2 only ` "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmE1NDc1MjciLCJpYXQiOjE2MjU2MDQzODd9.Ej-hnXfaSJHIS1c-t5yFEo0tCXsn9TQRWR0-20iBa04"`

  ```
       {
           "_id": "${id}",
           "name": "test",
           "calories": 123,
           "type": "FRUIT",
           "__v": 0
       }

  ```

  or

  ```
        {
          "_id": "${id}",
          "name": "test",
          "color": "123",
          "size": "sss",
          "__v": 0
      }
  ```

---
