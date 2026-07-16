import type { PostEmailType } from "../../../Types/Emails";
import type { FormInputTypes } from "../../../Types/FormTypes";
import { TextInputs } from "../../../Components/textInputs";
import { TextArea } from "../../../Components/textarea";

export function EmailInputs({
    register,
    errors
}: FormInputTypes<PostEmailType>){
    return(
        <div>
            <TextInputs 
                textType="email"
                placeholder="Please enter your email address"
                extraClasses="border-b px-2 w-160 h-14 text-xl mt-4 focus:outline-none focus:border-b-4"
                register={register("address", {
                    required: "Please enter address"
                })}
                error={errors.address}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter email subject"
                extraClasses="border-b px-2 w-160 h-14 text-xl mt-4 focus:outline-none focus:border-b-4"
                register={register("subject", {
                    required: "Please enter subject"
                })}
                error={errors.subject}
            />

            <TextArea 
                placeholder="Please enter your message"
                extraClasses="border rounded focus:outline-none w-160 mt-4 text-xl h-30 p-2 focus:border-2"
                register={register("message", {
                    required: "Please enter your message"
                })}
                error={errors.message}
            />
        </div>
    )
}