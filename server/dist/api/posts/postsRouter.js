import { Router } from "express";
import { createPost, getRouter, updatePost } from "./postsController.js";
const router = Router();
router.get('/', getRouter);
router.post('/', createPost);
router.patch('/:id', updatePost);
export default router;
//# sourceMappingURL=postsRouter.js.map