import express from "express";
import path from "path";
const app = express();
//using middleware
app.use(express.static("public"));
app.use(express.json());
// using get method
app.get("/", (req, res) => {
  req.redirect("/index.html");
});
app.get("/main", (req, res) => {
  res.send("Main page");
});
app.get("/json", (req, res) => {
  res.send({
    url: "json",
  });
});

// using post method
app.post("/hi", (req, res) => {
  console.log(req.body.name);
  res.send("everythin is ok");
});

app.listen(process.env.MY_APP_PORT || 3000, () => {
  console.log("server started on ");
});
