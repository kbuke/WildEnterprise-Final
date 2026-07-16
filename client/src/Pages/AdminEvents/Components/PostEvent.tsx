import { useForm } from "react-hook-form"
import type { PostEventType } from "../../../Types/EventTypes"
import { EventInputs } from "./EventInputs"
import { usePostEvent } from "../../../Hooks/EventHooks/usePostEvent"
import { useOneDayEvent } from "../../../Hooks/EventHooks/useOneDayEvent"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"

type CancelEventPost = {
    onClose: () => void
}

export function PostEvent({
    onClose
}: CancelEventPost){

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm<PostEventType>({
        shouldUnregister: true // tells RHF that when a fields input unmounts we forget its value entirely
    })

    const {oneDayEvent, handleToggleOneDayEvent} = useOneDayEvent({setValue: setValue})

    const {mutate, isPending, isError, error} = usePostEvent()

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

            <FormSubmitAndCancel 
                onClose={onClose}
                name="Event"
                action="Add"
            />
        </form>
    )
}