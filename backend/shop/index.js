const express = require('express');
const sql = require('mssql');

const app = express()

const port = process.env.PORT || 8888;

// config for your database
const config = {
  user: 'superman',
  password: 'iamon99$',
  server: 'on99shop.database.windows.net',
  database: 'Shop',
  "options": {
    "encrypt": true,
    "enableArithAbort": true
  }
};

sql.on('error', err => {
  console.log("Error Occurred");
})


sql.connect(config).then(db => {
  if (!db) {
    console.log("Cannot Connect to Database");
    process.exit();
  } else {
    console.log("Connect to Database");
    const request = db.request();
    request.query("SELECT * FROM Users WHERE First_Name='123'", (err, record) => {
      if (err) {
        console.log(err);
      } else if (!record.recordset.length) {
        console.log("No Result!");
      } else {
        console.log(record);
      }
    });
  }
}).catch(err => {
  console.log(err);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})