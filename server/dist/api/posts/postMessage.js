import mongoose from "mongoose";
;
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    creator: { type: String, required: true },
    tags: { type: [String], required: true },
    selectedFile: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() }
});
export const PostMessage = mongoose.model('PostMessage', postSchema);
//# sourceMappingURL=postMessage.js.map