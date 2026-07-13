import { useQuery } from "@tanstack/react-query";
import type { SiteImagesType } from "../../Types";

async function fetchSiteImages(): Promise<SiteImagesType[]> {
    const response = await fetch("/api/siteimages")

    if(!response.ok){
        throw new Error(`HTTP Error! Status ${response.status}`)
    }

    return response.json()
}

export function useFetchSiteImg(){
    const {
        data = [],
        error,
        isError,
        isLoading
    } = useQuery<SiteImagesType[], Error>({
        queryKey: ["siteimages"],
        queryFn: fetchSiteImages
    })
    return{
        siteImages: data,
        error,
        isError,
        isLoading
    }
}