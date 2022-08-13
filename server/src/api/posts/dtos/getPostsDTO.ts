export interface IGetPostDTO {
    id: string,
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount: number,
    createdAt: Date
};