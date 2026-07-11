import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../ReactQuery/queryClient"

type DeleteSiteError = {
    error: string
}

type DeleteSiteResponse = {
    message: string
}

async function deleteSite(id:number): Promise<DeleteSiteResponse> {
    const res = await fetch(`/api/sites/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
    })
    if(!res.ok){
        const errorBody: DeleteSiteError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }

    return res.json()
}

export function useDeleteSite(id: number){
    return useMutation({
        mutationFn: () => deleteSite(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["sites"]
            })
        }
    })
}