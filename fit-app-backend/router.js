// Required files
const apiRouter = require("express").Router();
const cors = require("cors");
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");

apiRouter.use(cors());

apiRouter.get("/", (req, res) => {
  res.send("The server is working.");
});

apiRouter.post("/register", userController.apiRegister);
apiRouter.post("/login", userController.apiLogin);
apiRouter.post(
  "/create-post",
  userController.apiMustBeLoggedIn,
  postController.apiCreate
);

module.exports = apiRouter;
