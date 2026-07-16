import { useMutation } from "@tanstack/react-query";
import type { FormError, FormMessage } from "../../Types/FormTypes";
import type { PostPatchProjectType } from "../../Types/ProjectTypes";
import { queryClient } from "../../ReactQuery/queryClient";

async function patchProject(
    id:number,
    {
        name,
        img,
        p1Img,
        p2Img,
        p3Img,
        video,
        introInfo,
        mainInfo
    }: PostPatchProjectType
): Promise<FormMessage> {
    const res = await fetch(`/api/projects/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            name,
            img,
            p1Img,
            p2Img,
            p3Img,
            video,
            introInfo,
            mainInfo
        })
    })
    if(!res.ok){
        const errorBody: FormError = await res.json().catch(() => ({
            error: "Something went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function usePatchProject(id: number){
    return useMutation({
        mutationFn: (formData: PostPatchProjectType) => patchProject(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        }
    })
}