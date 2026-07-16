import { useForm } from "react-hook-form";
import type { DeleteSiteType } from "../../../Types/SiteTypes";
import { useDeleteSite } from "../../../Hooks/SiteHooks/useDeleteSite";
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel";


export function DeleteSite({
    id,
    name,
    onClose
}: DeleteSiteType){
    const {handleSubmit} = useForm()

    const {mutate, isPending, isError, error} = useDeleteSite(id)

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
                name={name}
                action="Delete"
                onClose={onClose}
            />
        </form>
    )
}