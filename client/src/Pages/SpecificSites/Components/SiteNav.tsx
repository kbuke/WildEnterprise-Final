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
    const siteNavOptions = ["About", "Location", "Events", "News", "Accomodation", "Activities", "Animals", "Images"]
    return(
        <div
            className="bg-black text-white flex py-4 px-6 gap-6 uppercase text-2xl sticky z-50 top-30 border-b"
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
    )
}