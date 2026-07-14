import { useState } from "react"
import type { EventTypes } from "../../Types"
import { PopUp } from "../../Components/PopUp"
import { PostEvent } from "./Components/PostEvent"
import { useFetchEvents } from "../../Hooks/EventHooks/useFetchEvents"
import { formatDate } from "../../Utils/formatDate"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { PatchEvent } from "./Components/PatchEvent"
import { DeleteEvent } from "./Components/DeleteEvent"

export function AdminEvents(){

    const [eventAction, setEventAction] = useState<"Post" | "Patch" | "Delete">()
    const [selectedEvent, setSelectedEvent] = useState<EventTypes>()

    const eventsData = useFetchEvents()

    const allEvents = eventsData.events

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

            {eventAction === "Patch" && selectedEvent &&
                <PopUp>
                    <PatchEvent 
                        onCancel={() => {
                            setEventAction(undefined)
                            setSelectedEvent(undefined)
                        }}
                        event={selectedEvent}
                    />
                </PopUp>
            }

            {eventAction === "Delete" && selectedEvent &&
                <PopUp>
                    <DeleteEvent 
                        id={selectedEvent.id}
                        name={selectedEvent.name}
                        onClose={() => {
                            setEventAction(undefined)
                            setSelectedEvent(undefined)
                        }}
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
                                className="py-6"
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

                                 <div
                                    className="flex flex-row gap-4 mt-6 text-center justify-between"
                                >
                                    <PencilIcon 
                                        className="h-10 w-10 text-black bg-white rounded-full cursor-pointer"
                                        onClick={() => {
                                            setEventAction("Patch")
                                            setSelectedEvent(event)
                                        }}
                                    />
                                    <TrashIcon 
                                        className="h-10 w-10 text-black bg-white rounded-full cursor-pointer"
                                        onClick={() => {
                                            setEventAction("Delete")
                                            setSelectedEvent(event)
                                        }}
                                    />
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}