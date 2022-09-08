const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "persona",
});

app.post("/input/create", (req, res) => {
  const response = req.body.response;

  db.query(
    "INSERT INTO responses (text) VALUES (?)",
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

app.get("/responses", (req, res) => {
  db.query("SELECT * FROM responses", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3010, () => {
  console.log("Server is running yoo hoo!");
});
