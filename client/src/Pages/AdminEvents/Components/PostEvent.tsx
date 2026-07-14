import { useForm } from "react-hook-form"
import type { PostEventType } from "../../../Types"
import { EventInputs } from "./EventInputs"
import { useState } from "react"
import { usePostEvent } from "../../../Hooks/EventHooks/usePostEvent"
import { useOneDayEvent } from "../../../Hooks/EventHooks/useOneDayEvent"

type CancelEventPost = {
    onClose: () => void
}

export function PostEvent({
    onClose
}: CancelEventPost){

    // const [oneDayEvent, setOneDayEvent] = useState<boolean>(true)

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm<PostEventType>({
        shouldUnregister: true // tells RHF that when a fields input unmounts we forget its value entirely
    })

    // const handleToggleOneDayEvent = () => {
    //     setOneDayEvent((prev) => {
    //         const next = !prev
    //         if(next){
    //             setValue("endDate", undefined)
    //         }
    //         return next
    //     })
    // }
    const {oneDayEvent, handleToggleOneDayEvent} = useOneDayEvent({setValue: setValue})

    const {mutate, isPending, isError, error} = usePostEvent()

    console.log(error)

    const onSubmit = (formData: PostEventType) => {
        mutate(formData, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            className="popUpPatchPostForm"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1
                className="popUpPatchPostFormTitle"
            >
                Add New Event
            </h1>

            <EventInputs 
                register={register}
                errors={errors}
                watch={watch}
                setOneDayEvent={handleToggleOneDayEvent}
                oneDayEvent={oneDayEvent}
            />

            <div
                className="mt-4 flex flex-row gap-10"
            >
                <button
                    className="crudButtons bg-green-600"
                    type="submit"
                >
                    Add Event
                </button>

                <button
                    className="crudButtons bg-red-600"
                    type="button"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}