import type { FieldErrors, UseFormRegister } from "react-hook-form"
import { TextInputs } from "../../../Components/textInputs"
import { TextArea } from "../../../Components/textarea"
import type { PostNewSiteType } from "../../../Types/SiteTypes"

type SiteInputsType = {
    register: UseFormRegister<PostNewSiteType>
    errors: FieldErrors<PostNewSiteType>
}

export function SiteInputs({
    register,
    errors
}: SiteInputsType){
    return(
        <div>
            <TextInputs 
                textType="text"
                placeholder="Please enter site name"
                extraClasses="newFormInput"
                register={register("name", {
                    required: "Site Name is required"
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
        </div>
    )
}