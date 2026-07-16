import { useForm } from "react-hook-form"
import { useDeleteEvent } from "../../../Hooks/EventHooks/useDeleteEvent"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"

type DeleteEventType = {
    id: number,
    name: string,
    onClose: () => void
}

export function DeleteEvent({
    id,
    name,
    onClose
}: DeleteEventType){
    const {handleSubmit} = useForm()

    const {mutate, isPending, isError, error} = useDeleteEvent(id)

    const onSubmit = () => {
        mutate(undefined, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            className="bg-white h-[20%] w-[40%] self-center flex flex-col items-center py-10"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1
                className="crudHeaders"
            >
                Delete {name}?
            </h1>

            <FormSubmitAndCancel 
                onClose={onClose}
                action="Delete"
                name={name}
            />
        </form>
    )
}