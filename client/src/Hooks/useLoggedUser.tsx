import { useQuery } from "@tanstack/react-query";
import type { UserType } from "../Types";

async function getLoggedUser(): Promise<UserType | null> {
    const response = await fetch("/api/auth/checksession", {
        credentials: "include"
    })

    if (response.status === 401) {
        return null
    }

    if (!response.ok) {
        throw new Error(`HTTP Error! Status ${response.status}`)
    }

    return response.json()
}

export function useLoggedUser() {
    const {
        data,
        error,
        isError,
        isLoading
    } = useQuery<UserType | null>({
        queryKey: ["loggeduser"],
        queryFn: getLoggedUser,
        retry: false,
    })

    return {
        loggedUser: data ?? null, // undefined (loading) -> null, otherwise UserType | null
        error,
        isLoading,
        isError
    }
}
