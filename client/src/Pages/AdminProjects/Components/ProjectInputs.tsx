import { TextArea } from "../../../Components/textarea";
import { TextInputs } from "../../../Components/textInputs";
import type { FormInputTypes } from "../../../Types/FormTypes";
import type { PostPatchProjectType } from "../../../Types/ProjectTypes";

export function ProjectInputs({
    register,
    errors
}: FormInputTypes<PostPatchProjectType>){
    return(
        <div>
            <TextInputs 
                textType="text"
                placeholder="Please enter project name"
                extraClasses="mt-8 w-200 border-b"
                register={register("name", {
                    required: "Project name is required"
                })}
                error = {errors.name}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter project image"
                extraClasses="mt-8 w-200 border-b"
                register={register("img", {
                    required: "Project img is required"
                })}
                error={errors.img}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter primary image 1"
                extraClasses="mt-8 w-200 border-b"
                register={register("p1Img")}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter primary image 2"
                extraClasses="mt-8 w-200 border-b"
                register={register("p2Img")}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter primary image 3"
                extraClasses="mt-8 w-200 border-b"
                register={register("p3Img")}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter video url"
                extraClasses="mt-8 w-200 border-b"
                register={register("video")}
            />

            <TextArea 
                placeholder="Please enter info to display on card"
                extraClasses="mt-8 w-200 border h-40"
                register={register("introInfo", {
                    required: "Please enter intro info"
                })}
                error={errors.introInfo}
            />

            <TextArea 
                placeholder="Please enter main info"
                extraClasses="mt-8 w-200 border h-40"
                register={register("mainInfo", {
                    required: "Please enter intro info"
                })}
                error={errors.mainInfo}
            />
        </div>
    )
}