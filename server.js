const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config()

const PORT = process.env.YOUR_PORT || process.env.PORT || 3003;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));S
app.use(express.json());
app.use(express.static("public"));
console.log(process.env.MONGODB_URI )
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});