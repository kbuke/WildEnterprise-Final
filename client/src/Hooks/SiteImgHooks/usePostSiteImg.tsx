import { useMutation } from "@tanstack/react-query"
import type { PostSiteImgType } from "../../Types/SiteImgTypes"
import { queryClient } from "../../ReactQuery/queryClient"

type PostSiteImgError = {
    error: string
}

type PostSiteImgResponseType = {
    message: string
}

async function postSiteImg({
    url,
    siteId
}: PostSiteImgType): Promise<PostSiteImgResponseType> {
    const res = await fetch("/api/siteimages", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            url,
            siteId
        })
    })
    if(!res.ok){
        const errorBody: PostSiteImgError = await res.json().catch(() => ({
            error: "Something went wrong. Please try again"
        })) 
        throw new Error(errorBody.error)
    }

    return res.json()
}

export function usePostSiteImg(){
    return useMutation({
        mutationFn: postSiteImg,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["siteimages"]})
        }
    })
}