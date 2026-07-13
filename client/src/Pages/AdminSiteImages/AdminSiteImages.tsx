import { useState } from "react"
import { useFetchSiteImg } from "../../Hooks/SiteImgHooks/useFetchSiteImg"
import { TrashIcon } from "@heroicons/react/20/solid"
import { PopUp } from "../../Components/PopUp"
import { PostSiteImg } from "./Components/PostSiteImg"

export function AdminSiteImages(){

    const [siteImgAction, setSiteImgAction] = useState<"Post" | "Delete">()

    const {
        siteImages,
        isError,
        error,
        isLoading
    } = useFetchSiteImg()

    console.log(siteImages)

    return(
        <div
            className="flex flex-col mt-4 mb-4"
        >
            <h1
                className="text-4xl uppercase tracking-[2px] text-center"
            >
                Site Images
            </h1>

            <button
                onClick={() => setSiteImgAction("Post")}
                className="bg-green-600 text-white rounded mt-6 just w-60 h-14 text-2xl uppercase self-center hover:-translate-y-2 duration-200 cursor-pointer px-4"
            >
                Add Site Images
            </button>

            {siteImgAction === "Post" &&
                <PopUp>
                    <PostSiteImg 
                        onClose={() => setSiteImgAction(undefined)}
                    />
                </PopUp>
            }

            <div
                className="grid grid-cols-3 gap-6 mx-4 mt-6"
            >
                {siteImages.map((image, index) => {
                    return(
                        <div
                            key={index}
                            className="rounded hover:scale-106 duration-200"
                        >
                            <img 
                                src={image.url}
                                className="rounded-t"
                            />

                            <div
                                className="bg-black/80 py-4 text-white flex flex-col items-center rounded-b"
                                onClick={() => setSiteImgAction("Delete")}
                            >
                                <TrashIcon 
                                    className="h-10 w-10 border rounded-full cursor-pointer"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}