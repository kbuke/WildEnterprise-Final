import { useForm } from "react-hook-form";
import type { DeleteInstanceType } from "../../../Types/FormTypes";
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel";
import { useDeleteProject } from "../../../Hooks/Projects/useDeleteProject";

export function DeleteProject({
    name,
    id,
    onClose
}: DeleteInstanceType){
    const {handleSubmit} = useForm()

    const {mutate} = useDeleteProject(id)

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
                Delete {name}
            </h1>

            <FormSubmitAndCancel 
                onClose={onClose}
                action="Delete"
                name={name}
            />
        </form>
    )
}