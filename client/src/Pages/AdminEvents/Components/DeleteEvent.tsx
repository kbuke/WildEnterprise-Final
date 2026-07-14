import { useForm } from "react-hook-form"
import { useDeleteEvent } from "../../../Hooks/EventHooks/useDeleteEvent"

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

            <div
                className="flex gap-4 mt-4"
            >
                <button
                    className="bg-green-600 crudButtons"
                    type="submit"
                >
                    Delete
                </button>

                <button
                    onClick={onClose}
                    className="bg-red-600 crudButtons"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}