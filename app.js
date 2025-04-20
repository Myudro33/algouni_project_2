import express from "express";
const app = express();
import userRoutes from "./routes/userRoutes.js";
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "welcome to postgress" });
});
app.use("/api/users", userRoutes);

export default app;
