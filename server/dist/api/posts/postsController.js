var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PostMessage } from "./postMessage.js";
export const getRouter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMessages = yield PostMessage.find();
        res.status(200).json(postMessages.map(p => ({
            id: p._id.toString(),
            createdAt: p.createdAt,
            creator: p.creator,
            likeCount: p.likeCount,
            message: p.message,
            selectedFile: p.selectedFile,
            tags: p.tags.toObject(),
            title: p.title
        })));
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
export const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        yield newPost.save();
        res.status(201).json({
            id: newPost._id.toString(),
            createdAt: newPost.createdAt,
            creator: newPost.creator,
            likeCount: newPost.likeCount,
            message: newPost.message,
            selectedFile: newPost.selectedFile,
            tags: newPost.tags.toObject(),
            title: newPost.title
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
//# sourceMappingURL=postsController.js.map