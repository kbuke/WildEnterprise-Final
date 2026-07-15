import { useMutation } from "@tanstack/react-query";
// import type { BlogCommentsType, BlogType } from "../Types";
// import { queryClient } from "../ReactQuery/queryClient";
import type { BlogCommentsType } from "../../Types/BlogCommentTypes";
import type { BlogType } from "../../Types/BlogTypes";
import { queryClient } from "../../ReactQuery/queryClient";

type PostCommentPayload = {
    blogId: number,
    userId: number,
    comment: string
}

async function postComment({
    blogId,
    userId,
    comment
}: PostCommentPayload): Promise<BlogCommentsType> {
    const res = await fetch(`/api/comments`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({blogId, userId, comment})
    })

    if(!res.ok) throw new Error(`HTTP Error! Status ${res.status}`)

    return res.json()
}

export function usePostBlogComments(blogId: number) {

    return useMutation({
        mutationFn: postComment,
        onSuccess: (newComment) => {
            queryClient.setQueryData<BlogType>(["blogs", blogId], (old) => {
                if (!old) return old
                return {
                    ...old,
                    blog_comments: [...old.blog_comments, newComment]
                }
            })
        }
    })
}