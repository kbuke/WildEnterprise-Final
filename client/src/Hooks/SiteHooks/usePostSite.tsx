import { useMutation } from "@tanstack/react-query";
import type { PostNewSiteType } from "../../Types/SiteTypes";
import { queryClient } from "../../ReactQuery/queryClient";

type PostSiteError = {
    error: string
}

type PostSiteResponseType = {
    message: string
}

async function postNewSite({
    name,
    location,
    intro,
    headImg,
    info,
    primaryImg1,
    primaryImg2,
    primaryImg3
}: PostNewSiteType): Promise<PostSiteResponseType> {
    const res = await fetch('/api/sites', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            name,
            location,
            intro,
            headImg,
            info,
            primaryImg1,
            primaryImg2,
            primaryImg3
        })
    })
    if(!res.ok){
        const errorBody: PostSiteError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }

    return res.json()
}

export function usePostSite(){
    return useMutation({
        mutationFn: postNewSite,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["sites"]})
        }
    })
}