import { useQuery } from "@tanstack/react-query";
import type { FetchProjectType } from "../../Types/ProjectTypes";

async function fetchProjects(): Promise<FetchProjectType[]> {
    const response = await fetch("/api/projects")

    if(!response.ok){
        throw new Error(`HTTP Error! Status ${response.status}`)
    }

    return response.json()
}

export function useFetchProjects(){
    const {
        data = [],
        error,
        isError,
        isLoading
    } = useQuery<FetchProjectType[], Error>({
        queryKey: ["projects"],
        queryFn: fetchProjects
    })

    return{
        projects: data,
        error,
        isError,
        isLoading
    }
}