const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = "8080";

const jsonParser = bodyParser.json();

const fixtures = {
  users: [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" }
  ]
};

app.use(jsonParser);

app.get("/api/users", (req, res) => {
  res.send(fixtures.users);
});

app.get("/api/users/:id", (req, res) => {
  const user = fixtures.users.find((u) => u.id === parseInt(req.params.id, 10));

  res.send(user);
});

app.post("/api/users", (req, res) => {
  if (req.body.name) {
    const newUserId = fixtures.user[fixtures.users.length - 1].id + 1;
    const user = { id: newUserId, name: req.body.name };

    fixtures.users.push(user);

    res.send(fixtures.user[fixtures.users.length - 1]);
  }
});

app.delete("/api/users/:id", (req, res) => {
  let deleted = false;
  fixtures.user = fixtures.user.filter((u) => {
    if (u.id !== req.params.id) {
      return u;
    } else {
      deleted = true;
      return u;
    }
  });

  res.send(deleted);
});

app.listen(port, () => {
  console.log("server started on port: ", port);
});
