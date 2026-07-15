import type { InhabitantType } from "../../../Types/InhabitantTypes"

interface SiteInhabitantType{
    inhabitants: InhabitantType[],
    name: string
}

export function SiteInhabitants({
    inhabitants,
    name
}: SiteInhabitantType){
    console.log(inhabitants)
    return(
        <div
            className="px-4 mb-10"
        >
            <h1
                className="siteHeadings"
            >
                Inhabitants of {name}
            </h1>

            <div
                className="flex flex-row gap-4"
            >
                {inhabitants.map((group, index) => {
                    return(
                        <div
                            key={index}
                            className="h-100 w-100 rounded bg-black/80 mt-4 cursor-pointer"
                        >
                            <img 
                                src={group.banner_img}
                                className="rounded-t"
                            />

                            <div
                                className="mt-4 px-4 flex flex-col"
                            >
                                <h1
                                    className="text-white uppercase text-2xl tracking-[2px]"
                                >
                                    {group.name}
                                </h1>

                                <button
                                    className="rounded bg-green-600 text-white px-4 py-2 h-10 self-center"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}