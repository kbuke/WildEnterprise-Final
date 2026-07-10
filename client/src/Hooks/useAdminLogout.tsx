import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../ReactQuery/queryClient";

async function deleteAdminSession(): Promise<{ message: string }> {
    const res = await fetch(`/api/admin/logout`, {
        method: "DELETE",
        credentials: "include"
    });

    if (!res.ok) {
        throw new Error("Failed to log out");
    }

    return res.json();
}

export function useAdminLogout() {
    return useMutation({
        mutationFn: deleteAdminSession,
        onSuccess: () => {
            queryClient.setQueryData(["admnSession"], {is_admin: false})
        }
    });
}