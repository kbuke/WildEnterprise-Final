import { useState } from "react"
import type { EventTypes } from "../../Types/EventTypes"
import { PopUp } from "../../Components/PopUp"
import { PostEvent } from "./Components/PostEvent"
import { useFetchEvents } from "../../Hooks/EventHooks/useFetchEvents"
import { PatchEvent } from "./Components/PatchEvent"
import { DeleteEvent } from "./Components/DeleteEvent"
import { AdminCards } from "../../Components/AdminCards"

export function AdminEvents(){

    const [eventAction, setEventAction] = useState<"Post" | "Patch" | "Delete" | "Info">()
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
                    const {name, img} = event
                    return(
                        <AdminCards 
                            key={index}
                            name={name}
                            img={img}
                            onPatch={() => {
                                setEventAction("Patch")
                                setSelectedEvent(event)
                            }}
                            onDelete={() => {
                                setEventAction("Delete")
                                setSelectedEvent(event)
                            }}
                            onSelect={() => {
                                setEventAction("Info")
                                setSelectedEvent(event)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}