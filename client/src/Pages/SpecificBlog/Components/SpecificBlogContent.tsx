import { useForm } from "react-hook-form"
import type { BlogCommentsType } from "../../../Types/BlogCommentTypes"
import type { OutletContextType } from "../../../Types/UserTypes"
import type { SiteType } from "../../../Types/SiteTypes"
import { useOutletContext } from "react-router-dom"
import { usePostBlogComments } from "../../../Hooks/Blogs/usePostBlogComment"

type SpecificBlogType = {
    blogId: number
    content: string
    sites: SiteType[]
    blog_comments: BlogCommentsType[],
    slug: string
}

type CommentFormData = {
    content: string
}

export function SpecificBlogContent({
    blogId,
    content,
    sites,
    blog_comments,
    slug
}: SpecificBlogType) {
    const resources: OutletContextType = useOutletContext()
    const loggedUser = resources.loggedUser

    const postCommentMutation = usePostBlogComments(blogId)

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm<CommentFormData>()

    const onSubmit = (data: CommentFormData) => {
        if (!loggedUser) return; 

        postCommentMutation.mutate(
            {blogId, userId: loggedUser.id, comment: data.content},
            {onSuccess: () => reset()}
        )
    }

    console.log(blog_comments)

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="py-4 px-8">
                    <p className="text-2xl tracking-[3px]">{content}</p>
                </div>

                <div className="flex flex-col bg-black text-white py-4 px-8 overflow-y-auto">
                    <h2 className="uppercase text-2xl tracking-[3px] mb-4">
                        Comments
                    </h2>

                    {blog_comments.length === 0 &&
                        <p>No Comments</p>
                    }

                    {!loggedUser &&
                        <div>
                            <p>
                                Login to leave a comment
                            </p>
                        </div>
                    }

                    <div className="mt-4 flex flex-col gap-3">
                        {blog_comments.map(comments => {
                            const {comment, user} = comments
                            if(!user) return null;
                            const {img, name} = user

                            return(
                                <div
                                    className="mb-4 flex gap-4 items-center border-b py-2"
                                >
                                    <div>
                                        <p
                                            className="uppercase font-bold"
                                        >
                                            {name}
                                        </p>
                                        <img 
                                            src={img}
                                            className="rounded-full h-14 w-14"
                                        />
                                    </div>

                                    <p>
                                        {comment}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    {loggedUser &&
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea
                                className="border rounded px-2 h-20 w-full"
                                placeholder="Enter your comment"
                                {...register("content", { required: true })}
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-green-600/80 px-4 py-2 rounded mt-4 disabled:opacity-50 cursor-pointer"
                            >
                                {isSubmitting ? "Posting..." : "Add Comment"}
                            </button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}