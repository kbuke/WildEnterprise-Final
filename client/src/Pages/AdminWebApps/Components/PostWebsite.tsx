import { useForm } from "react-hook-form"
import type { WebAppType } from "../../../Types/WebAppTypes"
import { usePostWebApp } from "../../../Hooks/WebApps/usePostWebApp"
import { WebAppInputs } from "./WebAppInputs"

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

            <div
                className="flex gap-4"
            >
                <button
                    type="submit"
                    className="w-50 bg-green-600 text-white h-14 rounded text-xl uppercase font-bold"
                >
                    Add Website
                </button>

                <button
                    onClick={onClose}
                    type="button"
                    className="w-50 bg-red-600 text-white h-14 rounded text-xl uppercase font-bold"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}