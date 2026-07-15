import type { UserType } from "./UserTypes"

export type BlogCommentsType = {
    id: number,
    comment: string,
    blog_id: number,
    user_id: number,
    user?: UserType
}