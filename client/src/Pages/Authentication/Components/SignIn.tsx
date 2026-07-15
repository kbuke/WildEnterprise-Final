import type { SignInUpType } from "../../../Types/UserTypes"
import { useGoogleAuth } from "../../../Hooks/UserHooks/useGoogleAuth"
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"

export function SignIn({ onChange }: SignInUpType) {
  const googleAuth = useGoogleAuth()

  const navigate = useNavigate()

  const onGoogleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      googleAuth.mutate(response.credential, {
        onSuccess: () => navigate("/"),
      })
    }
  }

  return (
    <div className="signInUpDiv">
      <h1 className="signInUpH1">Sign In</h1>

      <div className="signInUpOptions">
        <GoogleLogin
          onSuccess={onGoogleSuccess}
          onError={() => console.error("Google login failed")}
          size="large"
          shape="pill"
          width="450"
          text="signin_with"
          theme="filled_blue"
        />

        <p className="signInUpP">Don't Have an Account?</p>
        <button className="signInUpButton" onClick={onChange}>
          Register
        </button>
      </div>
    </div>
  )
}
