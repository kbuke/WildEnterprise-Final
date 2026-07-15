import { useQuery } from "@tanstack/react-query";
import type { BlogCommentsType } from "../../Types/BlogCommentTypes";

async function getComments(): Promise<BlogCommentsType[]> {
    const response = await fetch("/api/comments")

    if(!response.ok){
        throw new Error(`HTTP Error! Status ${response.status}`)
    }

    return response.json()
}

export function useFetchBlogs(){
    const {
        data = [],
        error,
        isError,
        isLoading
    } = useQuery<BlogCommentsType[], Error>({
        queryKey: ["comments"],
        queryFn: getComments
    })

    return{
        comments: data,
        error,
        isError,
        isLoading
    }
}