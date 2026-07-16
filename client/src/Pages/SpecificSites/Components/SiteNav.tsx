import { useState } from "react"

type SiteNavType = {
    name: string
    selectedNav: string,
    setSelectedNav: (value: string) => void
}

export function SiteNav({
    name,
    selectedNav,
    setSelectedNav
}: SiteNavType){
    const [selectedSiteSection, setSelectedSiteSection] = useState<string>("About")

    const siteNavOptions = ["About", "Location", "Events", "News", "Accomodation", "Activities", "Animals", "Images"]
    return(
        <>
            {/* Small Screen Design */}
            <div
                className="bg-black/90 h-14 p-4 text-white flex items-center sticky top-0 z-50 border-b"
            >
                <select
                    defaultValue={"About"}
                    className="border h-10 px-4 rounded-lg uppercase font-bold tracking-[2px]"
                    onChange={(e) => setSelectedNav(e.target.value)}
                >
                    {siteNavOptions.map((option, index) => {
                        return(
                            <option
                                key={index}
                                className=""
                                value={option}
                            >
                                {option}
                            </option>
                        )
                    })}
                </select>
            </div>
            {/* Large Screen Design */}
            <div
                className="hidden bg-black text-white lg:flex py-4 px-6 gap-6 uppercase text-2xl sticky z-50 top-30 border-b"
            >
                <h1
                    className="font-bold text-3xl tracking-[2px]"
                >
                    {name}
                </h1>

                {siteNavOptions.map(option => (
                    <div
                        key={option}
                        className={`px-4 cursor-pointer ${selectedNav === option 
                            ? "border-b-2" 
                            : "opacity-60 hover:opacity-80 hover:border-b duration-200"}`}
                        onClick={() => setSelectedNav(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </>
    )
}