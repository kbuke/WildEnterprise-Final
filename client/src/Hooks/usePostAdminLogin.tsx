import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../ReactQuery/queryClient";

type AdminPayload = {
    email: string;
    password: string;
};

type AdminLoginResponse = {
    message: string;
};

type AdminLoginError = {
    error: string;
};

async function postAdminLogin({
    email,
    password
}: AdminPayload): Promise<AdminLoginResponse> {
    const res = await fetch(`/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        const errorBody: AdminLoginError = await res.json().catch(() => ({
            error: "Something went wrong. Please try again."
        }));
        throw new Error(errorBody.error);
    }

    return res.json();
}

export function usePostAdminLogin() {
    return useMutation({
        mutationFn: postAdminLogin,
        onSuccess: () => {
            queryClient.setQueryData(["adminSession"], {is_admin: true})
        }
    });
}