import { useForm } from "react-hook-form"
import { TextInputs } from "../../../Components/textInputs"
import type { CloseCrudType, PostNewSiteType } from "../../../Types"
import { TextArea } from "../../../Components/textarea"
import { usePostSite } from "../../../Hooks/SiteHooks/usePostSite"

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

            <TextInputs 
                textType="text"
                placeholder="Please enter site name"
                extraClasses="newFormInput"
                register={register("name", {
                    required: "Pattern is required"
                })}
                error={errors.name}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter location"
                extraClasses="newFormInput"
                register={register("location", {
                    required: "Location name is required"
                })}
                error={errors.location}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter main image of site"
                extraClasses="newFormInput"
                register={register("headImg", {
                    required: "Head image is required"
                })}
                error={errors.headImg}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter 1st primary img of site"
                extraClasses="newFormInput"
                register={register("primaryImg1", {
                    required: "Primary image 1 is required"
                })}
                error={errors.primaryImg1}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter 2nd primary img of site"
                extraClasses="newFormInput"
                register={register("primaryImg2", {
                    required: "Primary image 1 is required"
                })}
                error={errors.primaryImg2}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter 3rd primary img of site"
                extraClasses="newFormInput"
                register={register("primaryImg3", {
                    required: "Primary image 1 is required"
                })}
                error={errors.primaryImg3}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter site intro (for site card)"
                extraClasses="newFormInput"
                register={register("intro", {
                    required: "Please enter site intro"
                })}
                error={errors.intro}
            />

            <TextArea 
                placeholder="Please enter info about the site"
                extraClasses="border w-150 h-40 py-4 px-2 text-lg"
                register={register("info", {
                    required: "Please enter info on site"
                })}
                error={errors.info}
            />

            <div
                className="flex gap-10 mt-4"
            >
                <button
                    className="bg-green-600/80 crudButtons"
                    type="submit"
                    disabled={isPending}
                >
                    {isPending ? "Submitting..." : "Submit"}
                </button>

                <button
                    className="bg-red-600/80 crudButtons"
                    onClick={onClose}
                    type="button"
                    disabled={isPending}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}