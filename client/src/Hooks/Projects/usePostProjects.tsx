import { useMutation } from "@tanstack/react-query";
import type { FormPostError, FormPostMessage } from "../../Types/FormTypes";
import type { PostPatchProjectType } from "../../Types/ProjectTypes";
import { queryClient } from "../../ReactQuery/queryClient";

async function postProject({
    name,
    img,
    p1Img,
    p2Img,
    p3Img,
    video,
    introInfo,
    mainInfo
}: PostPatchProjectType): Promise<FormPostMessage> {
    const res = await fetch('/api/projects', {
        method: "POST",
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
        const errorBody: FormPostError = await res.json().catch(() => ({
            error: "Somethinhg went wrong, please try again"
        }))
        throw new Error(errorBody.error)
    }
    return res.json()
}

export function usePostProject(){
    return useMutation({
        mutationFn: postProject,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        }
    })
}