module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");

  router.get("/", controller.findAll);
  
  router.get('/:id', controller.findById);

  app.use("/api/blogposts", router);
};
