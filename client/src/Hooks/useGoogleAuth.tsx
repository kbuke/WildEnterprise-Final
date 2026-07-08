import { useMutation } from "@tanstack/react-query"

type User = { id: number; email: string; name: string | null }

async function postGoogleAuth(credential: string): Promise<User> {
  const res = await fetch("http://localhost:5555/auth/google", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ credential }),
  })
  if (!res.ok) throw new Error("Google auth failed")
  return res.json()
}

export function useGoogleAuth() {
  return useMutation({ mutationFn: postGoogleAuth })
}