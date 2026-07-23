const cors = require("cors");
const express = require("express");
const taskRoute = require("./routes/taskRoute");
const db = require("./config/database");
require("dotenv").config();

const app = express();
const portAPI = process.env.PORT;

db.connect((err) => {
  if (err) {
    console.error(err.message);
    console.log("Koneksi ke database GAGAL ❌");
    process.exit(1);
  }
  console.log("Koneksi ke database BERHASIL ✅");
});
app.use(cors());

app.use(express.json());

app.use("/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("Koneksi ke database BERHASIL ✅");
  // res.send ("ToDo API Berjalan")
});

app.listen(portAPI, () => {
  console.log(`Server berjalan di port ${portAPI}`);
});
