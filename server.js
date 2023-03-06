const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const app = require("./index");
const URL = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 50,
    socketTimeoutMS: 60000,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    connectTimeoutMS: 30000,
    autoIndex: false,
  })
  .then(() => {
    console.log("successfully connecvted");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
