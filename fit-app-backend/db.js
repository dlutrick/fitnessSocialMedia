// Required files
const dotenv = require("dotenv");
const mongodb = require("mongodb");

dotenv.config();

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log(error);
    }
    module.exports = client;
    const app = require("./app");
    app.listen(process.env.PORT);
  }
);
