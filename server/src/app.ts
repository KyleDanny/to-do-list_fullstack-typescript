import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import { connectToDatabase } from "./services/database.service";
import todoRoutes from "./routes/todos";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

connectToDatabase()
.then(() => {
  app.use("/todos", todoRoutes);
  
  app.listen(3001);
})
.catch((error: Error) => {
  console.error("Database connection failed", error);
  process.exit();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('im the error handler')
  res.status(500).json({ message: err.message });
});