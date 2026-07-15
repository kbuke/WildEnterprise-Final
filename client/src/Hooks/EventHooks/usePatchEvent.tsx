import { useMutation } from "@tanstack/react-query"
import type { PatchEventPayload } from "../../Types/EventTypes"
import { queryClient } from "../../ReactQuery/queryClient"

type PatchEventError = {
    error: string
}

type PatchEventMessage = {
    message: string
}

async function patchEvent(
    id: number,
    data: PatchEventPayload
){
    const res = await fetch(`/api/events/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify(data)
    })
    if(!res.ok){
        const errorBody: PatchEventError = await res.json().catch(() => ({
            error: "Something went wrong, please try again."
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function usePatchEvent(id: number){
    return useMutation({
        mutationFn: (data: PatchEventPayload) => patchEvent(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["events"]
            })
        }
    })
}