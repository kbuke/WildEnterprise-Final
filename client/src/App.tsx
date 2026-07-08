// import { QueryClientProvider } from "@tanstack/react-query"
// import { queryClient } from "./ReactQuery/queryClient"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
// import { Outlet } from "react-router-dom"
// import { NavBar } from "./Utils/NavBar"
// import { GoogleOAuthProvider } from "@react-oauth/google"
// import { useLoggedUser } from "./Hooks/useLoggedUser"

// function App() {

//   const {
//     loggedUser,
//     error,
//     isError,
//     isLoading
//   } = useLoggedUser()

//   console.log(loggedUser)

//   return(
//     <QueryClientProvider
//       client={queryClient}
//     >

//       <GoogleOAuthProvider
//         clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
//       >
//         <NavBar />
//         <Outlet />
//       </GoogleOAuthProvider>

//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   )
// }

// export default App

import { Outlet } from "react-router-dom"
import { NavBar } from "./Utils/NavBar"
import { useLoggedUser } from "./Hooks/useLoggedUser"

function App() {
  const { loggedUser, isLoading } = useLoggedUser()

  console.log(loggedUser)

  return (
    <>
      <NavBar loggedUser={isLoading ? null : loggedUser} />
      <Outlet context={{ loggedUser }} />
    </>
  )
}

export default App
