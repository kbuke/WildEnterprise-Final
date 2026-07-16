import { useForm } from "react-hook-form";
import type { PatchInstanceType } from "../../../Types/FormTypes";
import type { FetchProjectType, PostPatchProjectType } from "../../../Types/ProjectTypes";
import { usePatchProject } from "../../../Hooks/Projects/usePatchProject";
import { ProjectInputs } from "./ProjectInputs";
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel";

export function PatchProject({
    selectedInstance,
    onCancel
}: PatchInstanceType<FetchProjectType>){

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue
    } = useForm<PostPatchProjectType>({
        defaultValues: {
            name: selectedInstance.name,
            img: selectedInstance.img,
            p1Img: selectedInstance.p1_img,
            p2Img: selectedInstance.p2_img,
            p3Img: selectedInstance.p3_img,
            video: selectedInstance.video,
            introInfo: selectedInstance.intro_info,
            mainInfo: selectedInstance.main_info
        }
    })

    const {mutate} = usePatchProject(selectedInstance.id)

    const onSubmit = (formData: PostPatchProjectType) => {
        mutate(formData, {
            onSuccess: () => onCancel()
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white h-[90%] w-[60%] self-center rounded flex flex-col items-center py-10 overflow-y-auto"
        >
            <h1>
                Edit {selectedInstance.name}
            </h1>

            <ProjectInputs 
                register={register}
                errors={errors}
            />

            <FormSubmitAndCancel 
                name={selectedInstance.name}
                onClose={onCancel}
                action="Edit"
            />
        </form>
    )
}