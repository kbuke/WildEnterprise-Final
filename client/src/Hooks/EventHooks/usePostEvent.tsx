import { useMutation } from "@tanstack/react-query"
import type { PostEventType } from "../../Types/EventTypes"
import { queryClient } from "../../ReactQuery/queryClient"

type PostEventError = {
    error: string
}

type PostEventResponseType = {
    message: string
}

async function postEvent({
    name,
    img,
    startDate,
    endDate,
    startTime,
    endTime,
    info,
    siteId
}: PostEventType): Promise<PostEventResponseType> {
    const res = await fetch(`/api/events`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            name,
            img,
            startDate,
            endDate,
            startTime,
            endTime,
            info,
            siteId
        })
    })
    if(!res.ok){
        const errorBody: PostEventError = await res.json().catch(() => ({
            error: "Something went wrong. Please try again"
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function usePostEvent(){
    return useMutation({
        mutationFn: postEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["events"]
            })
        }
    })
}