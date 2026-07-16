import { useMutation } from "@tanstack/react-query";
import type { FormError, FormMessage } from "../../Types/FormTypes";
import { queryClient } from "../../ReactQuery/queryClient";

async function deleteProject(id:number): Promise<FormMessage> {
    const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        credentials: "include"
    })
    if(!res.ok){
        const errorBody: FormError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function useDeleteProject(id: number){
    return useMutation({
        mutationFn: () => deleteProject(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        }
    })
}