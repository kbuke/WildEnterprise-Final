import { useNavigate } from "react-router-dom";
import { useAdminLogout } from "../../Hooks/useAdminLogout";

export function AdminDashboard(){
    const navigate = useNavigate();
    const adminLogout = useAdminLogout();

    const handleLogout = () => {
        adminLogout.mutate(undefined, {
            onSuccess: () => {
                navigate("/adminlogin");
            }
        });
    };

    return(
        <div>
            <button
                onClick={handleLogout}
                className="bg-red-600 text-white cursor-pointer"
            >
                Logout
            </button>
        </div>
    )
}