import { useState } from "react"
import type { EventTypes } from "../../Types"
import { PopUp } from "../../Components/PopUp"
import { PostEvent } from "./Components/PostEvent"
import { useFetchEvents } from "../../Hooks/EventHooks/useFetchEvents"
import { formatDate } from "../../Utils/formatDate"

export function AdminEvents(){

    const [eventAction, setEventAction] = useState<"Post" | "Patch" | "Delete">()
    const [selectedEvent, setSelectedEvent] = useState<EventTypes>()

    const eventsData = useFetchEvents()
    console.log(eventsData)

    const allEvents = eventsData.events

    console.log(allEvents)

    return(
        <div
            className="adminDiv"
        >
            {eventAction === "Post" &&
                <PopUp>
                    <PostEvent 
                        onClose={() => setEventAction(undefined)}
                    />
                </PopUp>
            }
            <h1
                className="adminH1"
            >
                Events
            </h1>

            <button
                className="adminAddInstance"
                onClick={() => setEventAction("Post")}
            >
                Add Event
            </button>

            <div
                className="px-6 mt-6 grid grid-cols-3 gap-6"
            >
                {allEvents.length === 0 &&
                    <p>No Events to Display</p>
                }

                {allEvents.map((event, index) => {
                    const {start_date, start_time, end_time, end_date} = event
                    return(
                        <div
                            key={index}
                            className="rounded bg-black/80 flex flex-col text-center items-center text-white text-2xl tracking-[2px]"
                        >
                            <img 
                                src={event.img}
                                className="rounded h-80 w-full"
                            />

                            <div
                                className="py-4"
                            >
                                <h1>{event.name}</h1>

                                {!end_date
                                    ? <p>
                                        {formatDate({date: start_date})}: {start_time} - {end_time}
                                    </p>
                                    : <div>
                                        <p>
                                            {formatDate({date: start_date})}: {start_time}
                                        </p>

                                        <p>
                                            {formatDate({date: end_date})}: {end_time}
                                        </p>
                                    </div>
                                }

                                <button
                                    className="bg-green-600 text-white cursor-pointer mt-4 rounded hover:-translate-y-2 duration-200 px-4 py-2 uppercase"
                                >
                                    More Info
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}