import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { HomePg } from "./Pages/HomePg/HomePg";
import { SpecificSites } from "./Pages/SpecificSites/SpecificSites.tsx";
import { SpecificBlog } from "./Pages/SpecificBlog/SpecificBlog.tsx";
import { Authentication } from "./Pages/Authentication/Authentication.tsx";
import { AuthenticationApproved } from "./Pages/AuthenticationApproved/AuthenticationApproved.tsx";
import { AdminLogin } from "./Pages/AdminLogin/AdminLogin.tsx";
import { AdminDashboard } from "./Pages/AdminDashboard/AdminDashboard.tsx";
import { ProtectedAdminRoute } from "./Components/ProtectedAdminRoute.tsx";
import { AdminSites } from "./Pages/AdminSites/AdminSites.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <HomePg />},
            {path: "sites/:slug/:id", element: <SpecificSites />},
            {path: "blogs/:slug/:id", element: <SpecificBlog />},
            {path: "/signin", element: <Authentication />},
            {path: "/approved", element: <AuthenticationApproved />},
            {path: "/adminlogin", element: <AdminLogin />},
            {
                element: <ProtectedAdminRoute />,
                children: [
                    {path: "/admindashboard", element: <AdminDashboard />},
                    {path: "/adminsites", element: <AdminSites />}
                ]
            }
        ]
    }
])
