// PatchSite.tsx
import { useForm } from "react-hook-form"
import { SiteInputs } from "./SiteInputs"
import { usePatchSite } from "../../../Hooks/SiteHooks/usePatchSite"
import type { PostNewSiteType, SiteType } from "../../../Types/SiteTypes"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"

type PatchSiteProps = {
    site: SiteType
    onClose: () => void
}

export function PatchSite({ site, onClose }: PatchSiteProps){

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PostNewSiteType>({
        defaultValues: {
            name: site.name,
            location: site.location,
            headImg: site.head_img,
            primaryImg1: site.primary_img_1,
            primaryImg2: site.primary_img_2,
            primaryImg3: site.primary_img_3,
            intro: site.intro,
            info: site.info
        }
    })

    const { mutate, isPending, isError, error } = usePatchSite(site.id)

    const onSubmit = (formData: PostNewSiteType) => {
        mutate(formData, {
            onSuccess: () => onClose()
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white h-[90%] w-[60%] self-center rounded flex flex-col items-center py-10 overflow-y-auto"
        >
            <h1 className="uppercase text-4xl font-bold tracking-[4px] border-b-4 mb-10">
                Edit {site.name}
            </h1>

            {isError && (
                <p className="text-red-600">
                    {error instanceof Error ? error.message : "Something went wrong"}
                </p>
            )}

            <SiteInputs 
                register={register}
                errors={errors}
            />

            <FormSubmitAndCancel 
                name={site.name}
                onClose={onClose}
                action="Edit"
            />
        </form>
    )
}