import { AssociatedWebsites } from "./Components/AssociatedWebsites";
import { Email } from "./Components/Email";

export function ContactPg(){
    return(
        <section className="bg-black lg:h-screen text-white p-4 flex flex-col mb-20 lg:mb-0">
            <h1 className="justify-self-center mt-4 text-4xl lg:text-7xl font-bold tracking-[2px] mb-4">
                Contact WildEnterprise
            </h1>

            <div className="flex flex-col lg:grid grid-cols-[4fr_3fr] lg:flex-1 lg:min-h-0 lg:items-start">
                <Email extraClassName="lg:order-2"/>
                <AssociatedWebsites extraClassName="lg:order-1"/>
            </div>
        </section>
    )
}