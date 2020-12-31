let express = require("express");
let app = express();
let port = 8080;

app.use(express.static("./src"));

app.listen(process.env.PORT || 3000, 
  () => console.log("Server is running..."));