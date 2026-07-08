import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"
import { useGoogleAuth } from "../../../Hooks/useGoogleAuth"
import { useNavigate } from "react-router-dom"

export function SignUp(){
    const googleAuth = useGoogleAuth()

    const navigate = useNavigate()

    const onGoogleSuccess = (response: CredentialResponse) => {
        if(response.credential) {
            googleAuth.mutate(response.credential, {
                onSuccess: () => navigate("/approved")
            })
        }
    }

    return(
        <div>
            <h1>Sign Up</h1>

            <div
                className="px-40 uppercase w-200"
            >
                <GoogleLogin 
                    onSuccess={onGoogleSuccess}
                    onError={() => console.error("Google login failed")}
                />
            </div>
        </div>
    )
}