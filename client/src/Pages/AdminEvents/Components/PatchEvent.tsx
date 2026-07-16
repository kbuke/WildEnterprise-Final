import { useForm } from "react-hook-form";
import type { PatchEventPayload, PostEventType, SelectedEventType } from "../../../Types/EventTypes";
import { EventInputs } from "./EventInputs";
import { useOneDayEvent } from "../../../Hooks/EventHooks/useOneDayEvent";
import { toDateInput } from "../../../Components/toDateInput";
import { usePatchEvent } from "../../../Hooks/EventHooks/usePatchEvent";
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel";




export function PatchEvent({
    event,
    onCancel
}: SelectedEventType){
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue
    } = useForm<PostEventType>({
        shouldUnregister: true,
        defaultValues: {
            name: event.name,
            img: event.img,
            startDate: toDateInput(event.start_date),
            endDate: toDateInput(event.end_date),
            startTime: event.start_time,
            endTime: event.end_time,
            info: event.info,
            siteId: event.site_id
        }
    })

    const {oneDayEvent, handleToggleOneDayEvent} = useOneDayEvent({
        setValue: setValue,
        initialValue: event.end_date ? false : true
    })

    const {
        mutate,
        isPending,
        isError,
        error
    } = usePatchEvent(event.id)

    const onSubmit = (formData: PostEventType) => {
        const payload: PatchEventPayload = {
            ...formData,
            endDate: formData.endDate ?? null
        }
        mutate(payload, {
            onSuccess: () => onCancel()
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="popUpPatchPostForm"
        >
            <h1>
                Edit {event.name}
            </h1>

            <EventInputs 
                register={register}
                errors={errors}
                watch={watch}
                oneDayEvent={oneDayEvent}
                setOneDayEvent={handleToggleOneDayEvent}
            />

            <FormSubmitAndCancel 
                onClose={onCancel}
                name={event.name}
                action="Edit"
            />
        </form>
    )
}