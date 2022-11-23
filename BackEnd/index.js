import express, { json, urlencoded } from "express";
import router from "./router.js";
import cors from "cors";


import { config } from "dotenv";

config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));

app.set('view engine', 'ejs')



app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
