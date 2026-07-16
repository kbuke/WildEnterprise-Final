export type FetchProjectType = {
    id: number,
    name: string,
    img: string,
    p1_img?: string,
    p2_img?: string,
    p3_img?: string,
    video?: string,
    intro_info: string,
    main_info: string
}

export type PostPatchProjectType = {
    id?: number,
    name: string,
    img: string,
    p1Img?: string,
    p2Img?: string,
    p3Img?: string,
    video?: string,
    introInfo: string,
    mainInfo: string
}