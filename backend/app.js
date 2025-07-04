import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
  origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

export default app;
