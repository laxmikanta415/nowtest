const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const { API_KEY } = require("./constants");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send({ ok: true });
});
app.post("/new-messsage", function(req, res) {
  const { message } = req.body;
  if (!message || message.text.toLowerCase().indexOf("lax") < 0) {
    return res.end();
  }

  axios
    .post(`https://api.telegram.org/bot${API_KEY}/sendMessage`, {
      chat_id: message.chat.id,
      text: "Polo!!"
    })
    .then(res => {
      console.log("Message posted");
      res.end("ok");
    })
    .catch(err => {
      console.log("errpor");
      res.end(`Error :: ${err}`);
    });
});
// Finally, start our server
app.listen(3000, function() {
  console.log("Telegram app listening on port 3000!");
});
module.exports = (req, res) => {
  const { name = "World" } = req.query;
  res.send(`Hello ${name}!`);
};
//module.exports = app;
