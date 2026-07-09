import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"
import { useGoogleAuth } from "../../../Hooks/useGoogleAuth"
import { useNavigate } from "react-router-dom"
import type { SignInUpType } from "../../../Types"
import { queryClient } from "../../../ReactQuery/queryClient"

export function SignUp({
    onChange
}: SignInUpType){
    const googleAuth = useGoogleAuth()

    const navigate = useNavigate()

    const onGoogleSuccess = (response: CredentialResponse) => {
        if(response.credential) {
            googleAuth.mutate(response.credential, {
                onSuccess: async () => {
                    await queryClient.invalidateQueries({queryKey: ["loggeduser"]})
                    navigate("/approved")
                }
            })
        }
    }

    return(
        <div
            className="signInUpDiv"
        >
            <h1
                className="signInUpH1"
            >
                Sign Up
            </h1>

            <div
                className="signInUpOptions"
            >
                <GoogleLogin 
                    onSuccess={onGoogleSuccess}
                    onError={() => console.error("Google login failed")}
                    size="large"
                    shape="pill"
                    width="450"
                    text="signup_with"
                    theme="filled_blue"
                />

                <p
                    className="signInUpP"
                >
                    Already Have an Account?
                </p>
                <button
                    className="signInUpButton"
                    onClick={onChange}
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}