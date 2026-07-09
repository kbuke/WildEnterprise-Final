import { Outlet } from "react-router-dom"
import { NavBar } from "./Utils/NavBar"
import { useLoggedUser } from "./Hooks/useLoggedUser"

function App() {
  const { loggedUser, isLoading } = useLoggedUser()

  if(isLoading) return <p>Loading...</p>

  console.log(loggedUser)

  return (
    <>
      <NavBar loggedUser={isLoading ? null : loggedUser} />
      <Outlet context={{ loggedUser }} />
    </>
  )
}

export default App
