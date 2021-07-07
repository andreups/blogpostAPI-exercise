module.exports = (app) => {
  const users = require("../controllers/user.controller");
  const router = require("express").Router();

  router.get("/", users.findAll); // GET all users
  router.get("/:id", users.findById); // GET user by Id

  app.use("/api/users", router);
};
