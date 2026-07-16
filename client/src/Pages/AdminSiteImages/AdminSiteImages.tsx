import { useState } from "react"
import { useFetchSiteImg } from "../../Hooks/SiteImgHooks/useFetchSiteImg"
import { PopUp } from "../../Components/PopUp"
import { PostSiteImg } from "./Components/PostSiteImg"
import type { SiteImagesType } from "../../Types/SiteImgTypes"
import { DeleteSiteImg } from "./Components/DeleteSiteImg"
import { AdminCards } from "../../Components/AdminCards"

export function AdminSiteImages(){

    const [siteImgAction, setSiteImgAction] = useState<"Post" | "Delete" | "Patch" | "Info">()
    const [selectedImg, setSelectedImg] = useState<SiteImagesType>()

    const {
        siteImages,
        isError,
        error,
        isLoading
    } = useFetchSiteImg()

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

            {siteImgAction === "Delete" && selectedImg &&
                <PopUp>
                    <DeleteSiteImg 
                        id={selectedImg.id}
                        url={selectedImg.url}
                        onClose={() => {
                            setSelectedImg(undefined)
                            setSiteImgAction(undefined)
                        }}
                    />
                </PopUp>
            }

            <div
                className="grid grid-cols-3 gap-6 mx-4 mt-6"
            >
                {siteImages.map((image, index) => {
                    const {url} = image
                    return(
                        <AdminCards 
                            key={index}
                            img={url}
                            onPatch={() => {
                                setSelectedImg(image)
                                setSiteImgAction("Patch")
                            }}
                            onDelete={() => {
                                setSelectedImg(image)
                                setSiteImgAction("Delete")
                            }}
                            onSelect={() => {
                                setSelectedImg(image)
                                setSiteImgAction("Info")
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}