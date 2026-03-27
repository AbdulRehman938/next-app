import { Router } from "express";
import {
  getAboutValuesHandler,
  getBlogPostsHandler,
  getLiveMetricsHandler,
} from "../controllers/content.controller.js";

const router = Router();

router.get("/about-values", getAboutValuesHandler);
router.get("/blog-posts", getBlogPostsHandler);
router.get("/metrics", getLiveMetricsHandler);

export default router;