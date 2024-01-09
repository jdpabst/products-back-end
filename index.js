require('dotenv').config();
const express = require("express");
const massive = require("massive");

const app = express();

const { SERVER_PORT, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env

massive({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    ssl: false,
    poolSize: 10
  }).then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json())

app.listen(SERVER_PORT, () =>{
    console.log(`Server listening on port ${ SERVER_PORT }.`);
});
