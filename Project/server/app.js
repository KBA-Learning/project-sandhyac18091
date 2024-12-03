const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const auth = require('./routes/auth.js')
// const router=require('./routes/adminroute.js')
const cookieParser = require('cookie-parser')
const path = require("path")

app.use(
  cors({ 
    origin: "http://localhost:3003",
    credentials:true
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", routes);
app.use("/", auth)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use("/",router)

const PORT = 2201;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/Pro_ject");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});