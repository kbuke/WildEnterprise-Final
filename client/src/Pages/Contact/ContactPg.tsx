import { AssociatedWebsites } from "./Components/AssociatedWebsites";
import { Email } from "./Components/Email";

export function ContactPg(){
    return(
        <section
            className="bg-black/80 h-screen text-white p-4"
        >
            <h1
                className="justify-self-center mt-4 text-7xl font-bold tracking-[2px] mb-4"
            >
                Contact WildEnterprise
            </h1>
            <div
                className="grid grid-cols-[4fr_3fr]"
            >
                <AssociatedWebsites />
                <Email />
            </div>
        </section>
    )
}