import { useFetchWebApps } from "../../../Hooks/WebApps/useFetchWebApps"
import { Link } from "react-router-dom"

export function AssociatedWebsites(){

    const websiteData = useFetchWebApps()
    const allWebsites = websiteData.websites

    return(
        <div>
            <h2
                className="text-center mb-4 border-b inline-block text-3xl font-bold tracking-[2px]"
            >
                Websites linked to WildEnterprise
            </h2>

            {allWebsites.map((website, index) => {
                const {name, img, info, url} = website
                return(
                    <Link
                        key={index}
                        to={url}
                        style={{backgroundImage: `url(${img})`}}
                        className="group relative overflow-hidden border-white border h-112 w-220 rounded bg-center bg-cover bg-no-repeat block"
                    >
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center
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
                )
            })}
        </div>
    )
}