import { useQuery } from "@tanstack/react-query";
import type { EventTypes } from "../../Types";

async function fetchEvents(): Promise<EventTypes[]> {
    const response = await fetch("/api/events")

    if(!response.ok){
        throw new Error(`HTTP Error! Status ${response.status}`)
    }

    return response.json()
}

export function useFetchEvents(){
    const {
        data= [],
        error,
        isError,
        isLoading
    } = useQuery<EventTypes[], Error>({
        queryKey: ["events"],
        queryFn: fetchEvents
    })
    return{
        events: data,
        error,
        isError,
        isLoading
    }
}