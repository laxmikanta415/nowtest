// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const axios = require("axios");
// const { API_KEY } = require("./constants");
// const port = 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.send({ ok: true });
// });
// app.post("/new-messsage", function(req, res) {
//   const { message } = req.body;
//   if (!message || message.text.toLowerCase().indexOf("lax") < 0) {
//     return res.end();
//   }

//   axios
//     .post(`https://api.telegram.org/bot${API_KEY}/sendMessage`, {
//       chat_id: message.chat.id,
//       text: "Polo!!"
//     })
//     .then(res => {
//       console.log("Message posted");
//       res.end("ok");
//     })
//     .catch(err => {
//       console.log("errpor");
//       res.end(`Error :: ${err}`);
//     });
// });
// // Home route
// app.get("/", (req, res) => {
//   res.send("Welcome to a basic express App");
// });

// // Mock API
// app.get("/users", (req, res) => {
//   res.json([
//     { name: "William", location: "Abu Dhabi" },
//     { name: "Chris", location: "Vegas" }
//   ]);
// });

// app.post("/user", (req, res) => {
//   const { name, location } = req.body;

//   res.send({ status: "User created", name, location });
// });

// // Listen on port 5000
// app.listen(port, () => {
//   console.log(`Server is booming on port 5000
// Visit http://localhost:5000`);
// });

const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(80, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
