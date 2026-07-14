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
import { AdminInhabitants } from "./Pages/AdminInhabitants/AdminInhabitants.tsx";
import { AdminSiteImages } from "./Pages/AdminSiteImages/AdminSiteImages.tsx";
import { AdminEvents } from "./Pages/AdminEvents/AdminEvents.tsx";

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
                    {path: "/adminsites", element: <AdminSites />},
                    {path: "/admininhabitants", element: <AdminInhabitants />},
                    {path: "/adminsiteimages", element: <AdminSiteImages />},
                    {path: "/adminevents", element: <AdminEvents />}
                ]
            }
        ]
    }
])
