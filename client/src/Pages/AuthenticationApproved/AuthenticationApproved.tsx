import { useLoggedUser } from "../../Hooks/UserHooks/useLoggedUser"

export function AuthenticationApproved(){
    const loggedUser = useLoggedUser()

    return(
        <div
            className="bg-center bg-no-repeat bg-cover h-screen flex items-center"
            style={{backgroundImage: `url(${"/ApprovedBgImg.jpg"})`}}
        >
            <div
                className="bg-white/80 p-10 ml-4"
            >
                <h1
                    className="text-2xl"
                >
                    Weclome to WildEnterprises {loggedUser.loggedUser?.name}
                </h1>
            </div>
        </div>
    )
}