import { TextArea } from "../../../Components/textarea"
import { TextInputs } from "../../../Components/textInputs"
import type { WebAppType } from "../../../Types/WebAppTypes"
import type { UseFormRegister, FieldErrors } from "react-hook-form"


type WebSiteInputsType = {
    register: UseFormRegister<WebAppType>
    errors: FieldErrors<WebAppType>
}

export function WebAppInputs({
    register,
    errors
}: WebSiteInputsType){
    return(
        <div
            className="mt-10"
        >
            <TextInputs 
                textType="text"
                placeholder="Please enter websites name"
                extraClasses="newFormInput"
                register={register("name", {
                    required: "Website name is required"
                })}
                error={errors.name}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter websites url"
                extraClasses="newFormInput"
                register={register("url", {
                    required: "Website url is required"
                })}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter websites image"
                extraClasses="newFormInput"
                register={register("img", {
                    required: "Website img is required"
                })}
            />

            <TextArea 
                placeholder="Please enter websites info"
                extraClasses="border w-150 h-40 p-4"
                register={register("info", {
                    required: "Please enter website info"
                })}
                error={errors.info}
            />
        </div>
    )
}