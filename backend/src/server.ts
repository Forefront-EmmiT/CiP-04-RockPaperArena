import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./routes/index";

const app = express();
app.set("json spaces", 2);

app.use((req, res, next) => {
  next();
});

app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log("Server listening on PORT:", PORT);
});
