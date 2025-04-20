import express from "express";
const app = express();
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "welcome to postgress" });
});
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

export default app;
