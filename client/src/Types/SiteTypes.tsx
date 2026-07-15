import type { AnimalType } from "./AnimalTypes"
import type { BlogType } from "./BlogTypes"
import type { EventTypes } from "./EventTypes"
import type { InhabitantType } from "./InhabitantTypes"
import type { SiteImagesType } from "./SiteImgTypes"

export type DeleteSiteType = {
    id: number,
    name: string,
    onClose: () => void
}

export type PostNewSiteType = {
    name: string,
    location: string,
    intro: string,
    headImg: string,
    info: string,
    primaryImg1: string,
    primaryImg2: string,
    primaryImg3: string
}

export type SiteInfoType = {
    name: string,
    info: string,
    img1: string,
    img2: string,
    img3: string
}

export type SiteType = {
    id: number,
    name: string,
    slug: string,
    location: string,
    intro: string,
    head_img: string,
    info: string,
    primary_img_1: string,
    primary_img_2: string,
    primary_img_3: string,
    animals: AnimalType[],
    blogs: BlogType[],
    inhabitants: InhabitantType[],
    images: SiteImagesType[],
    events: EventTypes[]
}