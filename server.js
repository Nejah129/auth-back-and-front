let express = require("express");
const conectDB = require("./config/conectDB");
let app = express();
let user=require("./routes/user")
conectDB()
app.use(express.json())
app.use("/user",user)
let PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is runing ")
);
