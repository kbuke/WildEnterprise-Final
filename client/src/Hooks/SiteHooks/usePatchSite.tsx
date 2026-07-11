import { useMutation } from "@tanstack/react-query"
import type { PostNewSiteType } from "../../Types"
import { queryClient } from "../../ReactQuery/queryClient"

type PatchSiteError = {
    error: string
}

type PatchSiteResponse = {
    message: string
}

async function patchSite(
    id: number,
    {
        name,
        location,
        intro,
        headImg,
        info,
        primaryImg1,
        primaryImg2,
        primaryImg3
    }: PostNewSiteType
): Promise<PatchSiteResponse> {
    const res = await fetch(`/api/sites/${id}`, {
        method: "PATCH",
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
        const errorBody: PatchSiteError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }

    return res.json()
}

export function usePatchSite(id: number){
    return useMutation({
        mutationFn: (formData: PostNewSiteType) => patchSite(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["sites"] })
        }
    })
}