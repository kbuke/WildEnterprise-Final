import { useState } from "react"
import type { SiteImagesType } from "../../../Types/SiteImgTypes"
import { PopUp } from "../../../Components/PopUp"
import { EnlargedImg } from "./EnlargedImg"

type SpecificSiteImagesType = {
    images: SiteImagesType[],
    name: string
}

export function SiteImgs({
    images,
    name
}: SpecificSiteImagesType){
    const [selectedImg, setSelectedImg] = useState<SiteImagesType>()

    return(
        <div
            className="px-4 bg-black/80 text-white pb-4"
        >
            {selectedImg &&
                <PopUp>
                    <EnlargedImg 
                        img={selectedImg.url}
                        onCancel={() => setSelectedImg(undefined)}
                    />
                </PopUp>
            }
            <h1
                className="siteHeadings"
            >
                {name} Images
            </h1>

            <div
                className="grid lg:grid-cols-3 gap-6 mt-4"
            >
                {images.map((image, index) => {
                    return(
                        <img 
                            src={image.url}
                            key={index}
                            className="cursor-pointer rounded hover:scale-106 duration-200"
                            onClick={() => setSelectedImg(image)}
                        />
                    )
                })}
            </div>
        </div>
    )
}