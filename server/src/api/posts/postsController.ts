import { Request, Response } from "express";
import { PostMessage } from "./postMessage.js";
import { IGetPostDTO } from "./dtos/getPostsDTO.js";
import { IErrorResult } from "../../Errors/errorResult.js";
import { ICreatePostDTO } from "./dtos/createPostDTO.js";

export const getRouter = async (req: Request, res: Response<IGetPostDTO[] | IErrorResult>) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages.map(p => <IGetPostDTO> {
            id: p._id.toString(),
            createdAt: p.createdAt,
            creator: p.creator,
            likeCount: p.likeCount,
            message: p.message,
            selectedFile: p.selectedFile,
            tags: p.tags.toObject(),
            title: p.title
        }));
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createPost = async (req: Request<{}, {}, ICreatePostDTO>, res: Response<IGetPostDTO | IErrorResult>) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
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
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}