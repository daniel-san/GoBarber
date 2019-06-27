const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res, next) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes;
