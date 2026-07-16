import { useForm } from "react-hook-form"
import type { WebAppType } from "../../../Types/WebAppTypes"
import { usePostWebApp } from "../../../Hooks/WebApps/usePostWebApp"
import { WebAppInputs } from "./WebAppInputs"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"

type PostWebsiteType = {
    onClose: () => void
}

export function PostWebsite({
    onClose
}: PostWebsiteType){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<WebAppType>()

    const {mutate, isPending, isError, error} = usePostWebApp()

    const onSubmit = (formData: WebAppType) => {
        mutate(formData, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="popUpPatchPostForm"
        >
            <h1
                className="popUpPatchPostFormTitle"
            >
                Add New Web App
            </h1>

            <WebAppInputs 
                register={register}
                errors={errors}
            />

            <FormSubmitAndCancel 
                name="Website"
                onClose={onClose}
                action="Add"
            />
        </form>
    )
}