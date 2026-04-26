// src/index.ts

import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "@/middleware/cors";
import { errorHandler } from "@/middleware/errorHandler";
import { cowRouter } from "@/routes/cowRoutes";
import { parentageRouter } from "@/routes/parentageRoutes";
import { medicalRouter } from "@/routes/medicalRoutes";
import { farmRouter } from "@/routes/farmRoutes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date() });
});

// API Routes
app.use("/api/cows", cowRouter);
app.use("/api/parentage", parentageRouter);
app.use("/api/medical", medicalRouter);
app.use("/api/farms", farmRouter);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 HerdTrack API running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${process.env.DATABASE_URL}`);
});

export default app;
