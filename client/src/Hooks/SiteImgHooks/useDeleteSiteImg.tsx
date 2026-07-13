import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../ReactQuery/queryClient"

type DeleteSiteImgError = {
    error: string
}

type DeleteSiteImgMessage = {
    message: string
}

async function DeleteSiteImg(id:number): Promise<DeleteSiteImgMessage> {
    const res = await fetch(`/api/siteimages/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        credentials: "include"
    })
    if(!res.ok){
        const errorBody: DeleteSiteImgError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }

    return res.json()
}

export function useDeleteSiteImg(id: number){
    return useMutation({
        mutationFn: () => DeleteSiteImg(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["siteimages"]
            })
        }
    })
}