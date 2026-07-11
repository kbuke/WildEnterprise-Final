import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useFetchSites } from "../../Hooks/useFetchSites"
import { useState } from "react"
import { PopUp } from "../../Components/PopUp"
import { PostNewSite } from "./Components/PostNewSite"

export function AdminSites(){

    const [siteAction, setSiteAction] = useState<"Post" | "Patch" | "Delete">()

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
                    return(
                        <div
                            key={index}
                            className="rounded h-120 w-100 bg-gray-500"
                        >
                            <img 
                                src={site.head_img}
                                className="rounded-t"
                            />

                            <div
                                className="px-4"
                            >
                                <h2
                                    className="mt-4 uppercase text-white tracking-[4px] font-bold text-3xl border-b"
                                >
                                    {site.name}
                                </h2>

                                <div
                                    className="bg-white h-12 flex items-center justify-between px-20 rounded-full mt-2 cursor-pointer hover:bg-gray-600 hover:text-white duration-200"
                                >
                                    <PencilIcon 
                                        className="h-10 w-10"
                                    />

                                    <p
                                        className="text-2xl uppercase"
                                    >
                                        Edit
                                    </p>
                                </div>

                                <div
                                    className="bg-white h-12 flex items-center justify-between px-20 rounded-full mt-4 cursor-pointer hover:bg-gray-600 hover:text-white duration-200"
                                >
                                    <TrashIcon 
                                        className="h-10 w-10"
                                    />

                                    <p
                                        className="text-2xl uppercase"
                                    >
                                        Delete
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}