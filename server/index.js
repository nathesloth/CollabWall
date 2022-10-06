const express = require("express");
const bodyParser = require("body-parser"); //format everything related to json format
const cors = require("cors");
const app = express();
const mysql = require("mysql");

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "password",
//   database: "persona",
// });

const db = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b9d291ccf00bfa",
  password: "d31a854d",
  database: "heroku_02cfd9a3bf546ef",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const response = req.body.response;

  db.query(
    "INSERT INTO responses (response) VALUES (?)",
    [response],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // End request - send message
        res.send("Values inserted.");
      }
    }
  );
});

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM responses", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.listen(3002, () => {
//   console.log("Server is running on 3002!");
// });

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on ${PORT}!");
});
