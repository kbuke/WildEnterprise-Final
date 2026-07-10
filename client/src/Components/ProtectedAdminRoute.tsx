import { Navigate, Outlet } from "react-router-dom";
import { useCheckAdminSession } from "../Hooks/useCheckAdminSession";

export function ProtectedAdminRoute() {
    const { data, isLoading } = useCheckAdminSession();

    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>; // or a spinner component
    }

    if (!data?.is_admin) {
        return <Navigate to="/adminlogin" replace />;
    }

    return <Outlet />;
}