import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import type { EventTypes } from "../../../Types/EventTypes";
import { formatDate } from "../../../Utils/formatDate";

type SiteEventsType = {
    events: EventTypes[]
}

export function SiteEvents({
    events
}: SiteEventsType){
    return(
        <div
            className="p-4 bg-black/80 text-white"
        >
            <h1
                className="text-4xl font-bold inline-block border-b-2 uppercase tracking-[2px]"
            >
                Upcoming Events
            </h1>

            {events.map((event, index) => {
                const{
                    end_date,
                    end_time,
                    id,
                    img,
                    info,
                    name,
                    start_date,
                    start_time
                } = event

                return(
                    <div
                        key={index}
                        className="lg:grid grid-cols-[2fr_3fr] mb-4 border-b py-4 gap-6 items-center"
                    >
                        <img 
                            src={img}
                            className="rounded w-200"
                        />

                        <div
                            className="pr-6 flex flex-col"
                        >
                            <h1
                                className="text-3xl uppercase tracking-[2px] border-b-2 font-bold"
                            >
                                {name}
                            </h1>

                            <div
                                className="mt-4 flex flex-row items-center gap-4 border-b"
                            >
                                <CalendarDateRangeIcon 
                                    className="h-10 w-10"
                                />

                                <div>
                                    <p><span className="font-bold">Start Date & Time: </span>{formatDate({date: start_date})} at {start_time}</p>
                                    <p><span className="font-bold">End Date & Time: </span>{formatDate({date: end_date? end_date : start_date})} at {end_time}</p>
                                </div>
                            </div>

                            <p
                                className="mt-2 text-xl"
                            >
                                {info}
                            </p>

                            <button
                                className="bg-green-600 text-white border self-center w-40 mt-6 h-10 py-2 rounded-md hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer uppercase text-xl"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}