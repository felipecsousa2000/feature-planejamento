import express from "express";
import healthRoute from "./routes/health.route.js";

const app = express();

app.use(express.json());

// routes
app.use("/health", healthRoute);

// fallback
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;