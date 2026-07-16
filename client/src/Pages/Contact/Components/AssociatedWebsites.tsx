import { useFetchWebApps } from "../../../Hooks/WebApps/useFetchWebApps"
import { Link } from "react-router-dom"

type AssociatedWebsiteType = {
    extraClassName: string
}

export function AssociatedWebsites({
   extraClassName 
}: AssociatedWebsiteType){

    const websiteData = useFetchWebApps()
    const allWebsites = websiteData.websites

    return(
        <div className={`lg:overflow-y-auto lg:h-full lg:min-h-0 mt-10 lg:mt-0 ${extraClassName}`}>
            <h2
                className="text-center mb-4 border-b inline-block text-3xl font-bold tracking-[2px]"
            >
                Websites linked to WildEnterprise
            </h2>

            {allWebsites.map((website, index) => {
                const {name, img, info, url} = website
                return(
                    <>
                        <Link
                            key={index}
                            to={url}
                            style={{backgroundImage: `url(${img})`}}
                            className="group relative overflow-hidden border-white border h-60 lg:h-112 lg:w-220 rounded bg-center bg-cover bg-no-repeat block mt-4"
                        >
                            <div
                                className="hidden absolute inset-0 lg:flex flex-col items-center justify-center text-center
                                        bg-black/80 text-white
                                        translate-y-full opacity-0
                                        group-hover:translate-y-0 group-hover:opacity-100
                                        transition-all duration-300 ease-out"
                            >
                                <h2
                                    className="uppercase text-2xl border-b inline-block font-bold tracking-[2px]"
                                >
                                    {name}
                                </h2>

                                <p
                                    className="mt-4 text-xl"
                                >
                                    {info}
                                </p>
                            </div>
                        </Link>

                        <h1
                            className="lg:hidden text-center mt-2 uppercase text-3xl font-bold"
                        >
                            {name}
                        </h1>

                        <p
                            className="text-xl text-center border-b py-2 lg:hidden"
                        >
                            {info}
                        </p>
                    </>
                )
            })}
        </div>
    )
}