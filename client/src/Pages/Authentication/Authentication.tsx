// import { useState } from "react"
// import { SignIn } from "./Components/SignIn"
// import { SignUp } from "./Components/SignUp"

import { useState } from "react"
import { SignUp } from "./Components/SignUp"
import { SignIn } from "./Components/SignIn"

// type AuthMethod = "Sign In" | "Sign Up"

// export function Authentication(){
//     const [authMethod, setAuthMethod] = useState<AuthMethod | undefined>("Sign Up")
//     return(
//         <section
//             className="grid grid-cols-[4fr_2fr] h-screen"
//         >
//             <div
//                 style={{backgroundImage: `url(${"/SignInBgImg.jpg"})`}}
//                 className="bg-center bg-no-repeat bg-cover min-w-0"   
//             />

//             <div
//                 className="min-w-0 flex flex-col items-center"
//             >
                
//                 <div
//                     className="border w-40"
//                 >
//                         {authMethod === "Sign Up" 
//                             ? <SignUp />
//                             : <SignIn />
//                         }
//                 </div>
//             </div>
//         </section>
//     )
// }

type AuthType = "Sign In" | "Sign Up"

export function Authentication(){
    const [authMethod, setAuthMethod] = useState<AuthType | undefined>("Sign Up")

    return(
        <div
            style={{backgroundImage: `url(${"/SignInBgImg.jpg"})`}}
            className="bg-center bg-no-repeat bg-cover h-screen flex items-center justify-center"
        >
            <div
                className="h-150 w-120 bg-white/80 rounded"
            >
                {authMethod === "Sign Up"
                    ? <SignUp 
                        onChange={() => setAuthMethod("Sign In")}
                    />
                    : <SignIn 
                        onChange={() => setAuthMethod("Sign Up")}
                    />
                }
            </div>
        </div>
    )
}