export type AnimalType = {
    id?: number,
    img: string,
    name: string,
    info: string,
    endangered_level: "Least Concern" | "Never Threatened" | "Vulnerable" | "Endangered" | "Critically Endangered",
    animal_type: "Big Cats" | "Large Mammals" | "Antelope" | "Primates" | "Birds" | "Reptiles" | "Carnivores",
    big_five: Boolean
}

export type AnimalProfileType = {
    onClose: () => void
} & AnimalType

export type BlogCommentsType = {
    id: number,
    comment: string,
    blog_id: number,
    user_id: number,
    user?: UserType
}

export type BlogType = {
    id: number
    title: string,
    slug: string,
    cover_photo: string,
    views: number,
    content: string,
    status?: "Draft" | "Published",
    published_at: string,
    updated_at: string,
    edited_at: string,
    sites: SiteType[],
    blog_comments: BlogCommentsType[]
}

export type CloseCrudType = {
    onClose: () => void
}

export type DashboardType = {
    bgImg: string,
    bgTitle: string,
    bgUrl: string
}

export type DeleteSiteType = {
    id: number,
    name: string,
    onClose: () => void
}

export type EventTypes = {
    id: number
    name: string,
    img: string,
    start_date: string,
    end_date: string | null,
    start_time: string,
    end_time: string,
    info: string,
    site_id: number
}

export type InhabitantType = {
    id: number,
    name: string,
    banner_img: string,
    info: string,
    site_id: number
}

export type OutletContextType = {
    loggedUser: UserType
}

export type ParamsType = {
    slug: string,
    id: string,
    info: string,
    site_id: number
}

export type PatchEventPayload = Omit<PostEventType, "endDate"> & {
    endDate: string | null
}

export type PostEventType = {
    name: string,
    img: string,
    startDate: string,
    endDate?: string,
    startTime: string,
    endTime: string,
    info: string,
    siteId: number
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

export type PostSiteImgType = {
    url: string,
    siteId: number
}

export type SectionHeadingType = {
    heading: string,
    textWhite: boolean
}

export type SelectedEventType = {
    onCancel: () => void,
    event: EventTypes
}

export type SignInUpType = {
    onChange: () => void
}

export type SiteInfoType = {
    name: string,
    info: string,
    img1: string,
    img2: string,
    img3: string
}

export type SiteImagesType = {
    id: number,
    url: string,
    site_id: number
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
    images: SiteImagesType[]
}

export type UserType = {
    id: number,
    email: string,
    name: string,
    img: string
}