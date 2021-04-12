const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/test", (req, res) => {
  console.log(req.body);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("app is listening at port 5000");
});
