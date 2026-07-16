import { useMutation } from "@tanstack/react-query";
import type { PostEmailType } from "../../Types/Emails";
import type { FormError, FormMessage } from "../../Types/FormTypes";
import { queryClient } from "../../ReactQuery/queryClient";

async function postEmail({
    subject,
    message,
    address
}: PostEmailType): Promise<FormMessage> {
    const res = await fetch("/api/emails", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            subject,
            message,
            address
        })
    })
    if(!res.ok){
        const errorBody: FormError = await res.json().catch(() => ({
            error: "Something went wrong, please try again."
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function usePostEmail(){
    return useMutation({
        mutationFn: postEmail,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["emails"]
            })
        }
    })
}