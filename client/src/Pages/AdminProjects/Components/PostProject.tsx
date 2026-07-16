import { useForm } from "react-hook-form"
import type { PostPatchProjectType } from "../../../Types/ProjectTypes"
import { ProjectInputs } from "./ProjectInputs"
import { FormSubmitAndCancel } from "../../../Components/FormSubmitAndCancel"
import type { CloseFormType } from "../../../Types/FormTypes"
import { usePostProject } from "../../../Hooks/Projects/usePostProjects"

export function PostProject({onClose}: CloseFormType){

    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<PostPatchProjectType>()

    const {mutate, isPending, isError, error} = usePostProject()

    const onSubmit = (formData: PostPatchProjectType) => {
        mutate(formData, {
            onSuccess: () => {
                onClose()
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="popUpPatchPostForm overflow-y-auto"
        >
            <h1>Add New Project</h1>

            <ProjectInputs 
                register={register}
                errors={errors}
            />

            <FormSubmitAndCancel 
                onClose={onClose}
                name="Project"
                action="Add"
            />
        </form>
    )
}