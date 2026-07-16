import { useForm } from "react-hook-form"
import { useDeleteSiteImg } from "../../../Hooks/SiteImgHooks/useDeleteSiteImg"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"

type DeleteSiteImgType = {
    id: number,
    url: string,
    onClose: () => void
}

export function DeleteSiteImg({
    id,
    url,
    onClose
}: DeleteSiteImgType){

    const {
        handleSubmit
    } = useForm()

    const {mutate, isPending, isError, error} = useDeleteSiteImg(id)

    const onSubmit = () => {
        mutate(undefined, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white h-200 w-250 self-center rounded flex flex-col items-center"
        >
            <h1
                className="text-center uppercase mt-6 text-2xl tracking-[2px] font-bold flex flex-col"
            >
                Are You Sure You Want to Delete Img?
            </h1>

            <img 
                src={url}
                className="h-140 mt-6 justify-self-center rounded"
            />

            <FormSubmitAndCancel 
                onClose={onClose}
                name="Image"
                action="Delete"
            />
        </form>
    )
}