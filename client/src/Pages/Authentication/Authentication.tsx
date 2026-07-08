import { useState } from "react"
import { SignIn } from "./Components/SignIn"
import { SignUp } from "./Components/SignUp"

type AuthMethod = "Sign In" | "Sign Up"

export function Authentication(){
    const [authMethod, setAuthMethod] = useState<AuthMethod | undefined>("Sign Up")
    return(
        <section>
            <div>

            </div>

            <>
                {authMethod === "Sign Up" 
                    ? <SignUp />
                    : <SignIn />
                }
            </>
        </section>
    )
}