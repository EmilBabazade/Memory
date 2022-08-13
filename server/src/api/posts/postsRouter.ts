import { Router } from "express";
import { createPost, getRouter } from "./postsController.js";

const router = Router();

router.get('/', getRouter);
router.post('/', createPost);

export default router;