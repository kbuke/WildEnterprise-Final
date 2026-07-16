import { useState } from "react"
import { useFetchWebApps } from "../../Hooks/WebApps/useFetchWebApps"
import { PopUp } from "../../Components/PopUp"
import { PostWebsite } from "./Components/PostWebsite"
import { AdminCards } from "../../Components/AdminCards"
import type { WebAppType } from "../../Types/WebAppTypes"

export function AdminWebApps(){
    const [websiteAction, setWebsiteAction] = useState<"Post" | "Patch" | "Delete" | "Info">()
    const [selectedWebsite, setSelectedWebsite] = useState<WebAppType>()

    const websiteData = useFetchWebApps()
    const allWebSites = websiteData.websites

    return(
        <div
            className="mt-4 flex flex-col text-center px-10"
        >
            <h1
                className="uppercase text-4xl tracking-[2px] font-bold inline-block border-b"
            >
                Associated Web Apps
            </h1>

            <button
                className="bg-green-600 text-white uppercase mt-4 w-60 h-12 rounded font-bold text-xl hover:-translate-y-2 duration-200 cursor-pointer self-center"
                onClick={() => setWebsiteAction("Post")}
            >
                Add New Web App
            </button>

            {allWebSites.length === 0 && 
                <p
                    className="mt-4 text-xl text-red-600"
                >
                    No websites to display
                </p>
            }

            {websiteAction === "Post" &&
                <PopUp>
                    <PostWebsite 
                        onClose={() => setWebsiteAction(undefined)}
                    />
                </PopUp>
            }

            <div>
                {allWebSites.map((website) => {
                    const {name, img} = website
                    return(
                        <AdminCards 
                            name={name}
                            img={img}
                            onPatch={() => {
                                setWebsiteAction("Patch")
                                setSelectedWebsite(website)
                            }}
                            onDelete={() => {
                                setWebsiteAction("Delete")
                                setSelectedWebsite(website)
                            }}
                            onSelect={() => {
                                setWebsiteAction("Info")
                                setSelectedWebsite(website)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}