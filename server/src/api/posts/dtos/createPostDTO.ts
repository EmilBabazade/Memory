export interface ICreatePostDTO {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount: number
}