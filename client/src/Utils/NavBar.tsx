import { NavLink, Link } from "react-router-dom"
import type { UserType } from "../Types/UserTypes"
import { EnvelopeIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline"

type NavLinkType = {
    link: string,
    linkText: string
}

export function NavBar({
    loggedUser
}: {loggedUser: UserType | null}){

    const navLinks = ({
        link, linkText
    }: NavLinkType) => {
        return(
            <NavLink
                to={link}
                className="
                    text-4xl tracking-[4px] font-bold py-4 px-8 rounded-lg
                    w-70 text-black text-center hover:bg-black hover:text-white duration-200
                "
            >
                {linkText}
            </NavLink>
        )
    }

    return(
        <>
            {/* Small Screen NavBar */}
            <div
                className="flex lg:hidden fixed bottom-0 left-0 z-50 bg-gray-600 border-t border-white h-20 w-full justify-between text-white p-4"
            >
                <HomeIcon />
                <EnvelopeIcon />
                <UserIcon />
            </div>
            {/* Large Screen Nav Bar */}
            <div
                className="
                    hidden lg:flex sticky top-0 z-50 bg-white border-b border-black
                    text-white h-30 items-center px-10 uppercase justify-between
                "
            >
                {navLinks({
                    link: "/sites",
                    linkText: "Sites"
                })}

                {navLinks({
                    link: "/blogs",
                    linkText: "Blogs"
                })}

                <Link
                    className="h-40 w-40 cursor-pointer"
                    to={"/"}
                >
                    <img 
                        src={"/WTLogo.png"}
                    />
                </Link>

                {navLinks({
                    link: "/animals",
                    linkText: "Animals"
                })}


                {loggedUser
                    ? <img 
                        src={loggedUser.img}
                        className="h-20 w-20 border rounded-full border-black"
                        alt={`${loggedUser.name} Img`}
                    />
                    : navLinks({
                        link: "/signin",
                        linkText: "Sign In"
                    })
                }
            </div>
        </>
    )
}