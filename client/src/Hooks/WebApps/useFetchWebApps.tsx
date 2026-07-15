import { useQuery } from "@tanstack/react-query";
import type { WebAppType } from "../../Types/WebAppTypes";

async function fetchWebApps(): Promise<WebAppType[]> {
    const response = await fetch("/api/othersites")

    if(!response.ok){
        throw new Error(`HTTP Error! Status ${response.status}`)
    }

    return response.json()
}

export function useFetchWebApps(){
    const {
        data = [],
        error,
        isError,
        isLoading
    } = useQuery<WebAppType[], Error>({
        queryKey: ["websites"],
        queryFn: fetchWebApps
    })

    return{
        websites: data,
        error,
        isLoading,
        isError
    }
}