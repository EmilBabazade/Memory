import mongoose, { Schema, Types } from "mongoose";

export interface IPostMessage {
    _id: Types.ObjectId,
    title: string,
    message: string,
    creator: string,
    tags: Types.Array<string>,
    selectedFile: string,
    likeCount: number,
    createdAt: Date
};

const postSchema = new mongoose.Schema<IPostMessage>({
    title: {type: String, required: true},
    message: {type: String, required: true},
    creator: {type: String, required: true},
    tags: {type: [String], required: true},
    selectedFile: {type: String, required: true},
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() }
});

export const PostMessage = mongoose.model<IPostMessage>('PostMessage', postSchema);