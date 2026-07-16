import { useFetchSites } from "../../Hooks/SiteHooks/useFetchSites"
import { useState } from "react"
import { PopUp } from "../../Components/PopUp"
import { PostNewSite } from "./Components/PostNewSite"
import type { SiteType } from "../../Types/SiteTypes"
import { DeleteSite } from "./Components/DeleteSite"
import { PatchSite } from "./Components/PatchSite"
import { AdminCards } from "../../Components/AdminCards"

export function AdminSites(){

    const [siteAction, setSiteAction] = useState<"Post" | "Patch" | "Delete" | "Info">()
    const [selectedSite, setSelectedSite] = useState<SiteType>()

    const fetchSites = useFetchSites()
    const allSites = fetchSites.sites
    
    return(
        <div
            className="p-4"
        >
            {siteAction === "Post" &&
                <PopUp>
                    <PostNewSite 
                        onClose={() => setSiteAction(undefined)}
                    />
                </PopUp>
            }

            {siteAction === "Delete" && selectedSite &&
                <PopUp>
                    <DeleteSite 
                        name={selectedSite?.name}
                        id={selectedSite?.id}
                        onClose={() => {
                            setSiteAction(undefined)
                            setSelectedSite(undefined)
                        }}
                    />
                </PopUp>
            }

            {siteAction === "Patch" && selectedSite &&
                <PopUp>
                    <PatchSite 
                        site={selectedSite}
                        onClose={() => {
                            setSiteAction(undefined)
                            setSelectedSite(undefined)
                        }}
                    />
                </PopUp>
            }

            <div
                className="flex flex-col w-full py-4"
            >
                <h1
                    className="text-4xl uppercase tracking-[2px] text-center"
                >
                    All WildEnterprise Sites
                </h1>

                <button
                    className="bg-green-600 text-white rounded mt-6 just w-40 h-14 text-2xl uppercase self-center hover:-translate-y-2 duration-200 cursor-pointer"
                    onClick={() => setSiteAction("Post")}
                >
                    Add Site
                </button>
            </div>

            <div
                className="grid grid-cols-3 px-10"
            >
                {allSites.map((site, index) => {
                    const {name, head_img} = site
                    return(
                        <AdminCards 
                            key={index}
                            name={name}
                            img={head_img}
                            onDelete={() => {
                                setSelectedSite(site)
                                setSiteAction("Delete")
                            }}
                            onPatch={() => {
                                setSelectedSite(site)
                                setSiteAction("Patch")
                            }}
                            onSelect={() => {
                                setSelectedSite(site)
                                setSiteAction("Info")
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}