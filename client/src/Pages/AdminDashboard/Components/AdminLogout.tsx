import { useNavigate } from "react-router-dom";
import { useAdminLogout } from "../../../Hooks/UserHooks/useAdminLogout";

export function AdminLogout(){
    const navigate = useNavigate()
    const adminLogout = useAdminLogout()

    const handleLogout = () => {
        adminLogout.mutate(undefined, {
            onSuccess: () => {
                navigate("/adminlogin")
            }
        })
    }

    return(
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white cursor-pointer"
        >
            Logout
        </button>
    )
}