import express from "express";
import cors from "cors"

const app = express();

app.use(cors({
  origin: "*"
}));

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.listen(8081, () => {
  console.log("Server is running on port 3000");
})