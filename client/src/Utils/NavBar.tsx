import { NavLink, Link } from "react-router-dom"
import type { UserType } from "../Types"

type NavLinkType = {
    link: string,
    linkText: string
}

export function NavBar({
    loggedUser
}: {loggedUser: UserType | null}){

    console.log(loggedUser)

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
        <div
            className="
                none lg:flex sticky top-0 z-50 bg-white border-b border-black
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
    )
}