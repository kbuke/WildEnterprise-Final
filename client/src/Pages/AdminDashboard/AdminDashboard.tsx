import { useCheckAdminSession } from "../../Hooks/useCheckAdminSession"

export function AdminDashboard(){
    const loggedAdmin = useCheckAdminSession()
    console.log(loggedAdmin)
    return(
        <div>

        </div>
    )
}