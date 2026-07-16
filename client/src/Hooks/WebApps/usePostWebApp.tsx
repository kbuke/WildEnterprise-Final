import { useMutation } from "@tanstack/react-query"
import type { WebAppType } from "../../Types/WebAppTypes"
import { queryClient } from "../../ReactQuery/queryClient"
import type { FormPostError, FormPostMessage } from "../../Types/FormTypes"

// type PostWebsiteError = {
//     error: string
// }

// type PostWebsiteMessage = {
//     message: string
// }

async function postNewWebsite({
    name,
    img,
    info,
    url
}:WebAppType): Promise<FormPostMessage> {
    const res = await fetch(`/api/othersites`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            name,
            img,
            info,
            url
        })
    })
    if(!res.ok){
        const errorBody: FormPostError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function usePostWebApp(){
    return useMutation({
        mutationFn: postNewWebsite,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["websites"]
            })
        }
    })
}