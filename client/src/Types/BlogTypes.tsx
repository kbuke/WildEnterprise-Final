import type { BlogCommentsType } from "./BlogCommentTypes"
import type { SiteType } from "./SiteTypes"

export type BlogType = {
    id: number
    title: string,
    slug: string,
    cover_photo: string,
    views: number,
    content: string,
    status?: "Draft" | "Published",
    published_at: string,
    updated_at: string,
    edited_at: string,
    sites: SiteType[],
    blog_comments: BlogCommentsType[]
}