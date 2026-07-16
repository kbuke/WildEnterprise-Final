import { useForm } from "react-hook-form"
import type { CloseCrudType } from "../../../Types"
import type { PostNewSiteType } from "../../../Types/SiteTypes"
import { usePostSite } from "../../../Hooks/SiteHooks/usePostSite"
import { SiteInputs } from "./SiteInputs"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"

export function PostNewSite({
    onClose
}: CloseCrudType){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<PostNewSiteType>()

    const {mutate, isPending, isError, error} = usePostSite()

    const onSubmit = (formData: PostNewSiteType) => {
        mutate(formData, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white h-[90%] w-[60%] self-center rounded flex flex-col items-center py-10 overflow-y-auto"
        >
            <h1
                className="uppercase text-4xl font-bold tracking-[4px] border-b-4 mb-10"
            >
                Add New Site
            </h1>

            {isError && (
                <p
                    className="text-red-600"
                >
                    {error instanceof Error ? error.message: "Something went wrong"}
                </p>
            )}

            <SiteInputs 
                register={register}
                errors={errors}
            />

            <FormSubmitAndCancel 
                name="Site"
                onClose={onClose}
                action="Add"
            />
        </form>
    )
}