import express from "express";
import { config } from "dotenv";

import cors from "cors";
import router from "./router/router.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();
const dotEnv = config();

const port = process.env.PORT || 5001;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200", "https://aboutgrdtech.web.app/"],
  })
);

app.use(express.json()); // This is required to enable of getting data from client side to our apis.
app.use("/api/sendmail", router); // here /api/sendmail is our default route for all setup by middleware app.use

app.use(errorHandler); // This is middleware to handle global error handlers for apis Must be last line before "app.listne".
app.listen(port, () => console.log("server-started... on port ", port));
