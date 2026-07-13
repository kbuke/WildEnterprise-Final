import { useNavigate } from "react-router-dom";
import { useAdminLogout } from "../../Hooks/useAdminLogout";
import { AdminLogout } from "./Components/AdminLogout";
import type { DashboardType } from "../../Types";
import { DashboardRow } from "./Components/DashboardRow";
import { groupsOfThree } from "../../Components/groupsOfThree";

export function AdminDashboard(){
    const navigate = useNavigate()

    const dashboardOptions: DashboardType[] = [
        {
            bgImg: "/SiteDbImg.jpg",
            bgTitle: "Sites",
            bgUrl: "/adminsites"
        },

        {
            bgImg: "BlogDbImg.jpg",
            bgTitle: "Blogs",
            bgUrl: "/adminblogs"
        },

        {
            bgImg: "/TeamDbImg.jpg",
            bgTitle: "Teams",
            bgUrl: "/adminteams"
        },

        {
            bgImg: "InhabitantsDbImg.jpg",
            bgTitle: "Inhabitants",
            bgUrl: "/admininhabitants"
        },

        {
            bgImg: "SiteImgBg.jpg",
            bgTitle: "Site Images",
            bgUrl: "/adminsiteimages"
        }
    ]

    const groups = groupsOfThree(dashboardOptions)

    
    return(
        <div
            className="px-6 flex flex-col gap-4"
        >
            <div
                className="flex flex-col gap-4"
            >
                <div>
                    {groups.map((group, index) => {
                        return(
                            <DashboardRow 
                                key={index}
                                group={group}
                                navigate={navigate}
                            />
                        )
                    })}
                </div>
            </div>
            <AdminLogout />
        </div>
    )
}