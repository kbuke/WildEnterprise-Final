import { DropDownSiteSelect } from "../../../Components/dropDownSiteSelect"
import { TextInputs } from "../../../Components/textInputs"
import { useForm } from "react-hook-form"
import type { PostSiteImgType } from "../../../Types"
import { usePostSiteImg } from "../../../Hooks/SiteImgHooks/usePostSiteImg"


type CancelImgPost = {
    onClose: () => void
}

export function PostSiteImg({
    onClose
}: CancelImgPost){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<PostSiteImgType>()

    const {mutate, isPending, isError, error} = usePostSiteImg()

    const onSubmit = (formData: PostSiteImgType) => {
        mutate(formData, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            className="bg-white h-200 self-center w-160 flex flex-col items-center justify-items-center py-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1
                className="crudHeaders"
            >
                Post Site Image
            </h1>

            <TextInputs 
                textType="text"
                placeholder="Please enter image url"
                extraClasses="mt-10 border-b w-120"
                register={register("url", {
                    required: "Url for image is required"
                })}
                error={errors.url}
            />

            <DropDownSiteSelect 
                register={register("siteId", {
                    required: "Please select a site",
                    valueAsNumber: true,
                    validate: (value) => !Number.isNaN(value) || "Please select a site"
                })}
                error={errors.siteId}
                extraClasses="w-120 mt-10 border-b"
            />

            <div
                className="mt-10 flex flex-row gap-6"
            >
                <button
                    className="crudButtons bg-green-600/80 "
                    type="submit"
                >
                    Add Img
                </button>

                <button
                    onClick={onClose}
                    className="crudButtons bg-red-600/80"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}