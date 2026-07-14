import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../ReactQuery/queryClient"

type DeleteEventError = {
    error: string
}

type DeleteEventResponse = {
    message: string
}

async function deleteEvent(id:number): Promise<DeleteEventResponse> {
    const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        credentials: "include"
    })
    if(!res.ok){
        const errorBody: DeleteEventError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }

    return res.json()
}

export function useDeleteEvent(id: number){
    return useMutation({
        mutationFn: () => deleteEvent(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["events"]
            })
        }
    })
}