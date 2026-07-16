import { useForm } from "react-hook-form";
import type { PostEmailType } from "../../../Types/Emails";
import { EmailInputs } from "./EmailInputs";
import { usePostEmail } from "../../../Hooks/Email/usePostEmail";
import { useState } from "react";

type EmailType = {
    extraClassName: string
}

export function Email({
    extraClassName
}: EmailType){
    const [emailSent, setEmailSent] = useState(false)

    const {
        register,
        formState: {errors, isLoading},
        handleSubmit
    } = useForm<PostEmailType>()

    const {mutate, isPending, isError, error} = usePostEmail()

    const onSubmit = (formData: PostEmailType) => {
        mutate(formData, {
            onSuccess: () => {
                setEmailSent(true)
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${extraClassName}`}
        >
            <h2
                className="uppercase text-2xl border-b inline-block font-bold tracking-[2px]"
            >
                Send Us An Email
            </h2>

            {isPending && 
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source 
                        src="emailSent.mp4"
                        type="video/mp4"
                    />
                </video>
            }

            {emailSent &&
                <div
                    className="bg-green-600/80 mt-6 h-15 w-[80%] text-center text-5xl flex items-center justify-center rounded-lg"
                >
                    Email Sent Successfully
                </div>
            }

            {!emailSent && !isPending &&
                <div>
                    <EmailInputs 
                        register={register}
                        errors={errors}
                    />

                    <button
                        className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg h-12 w-50 uppercase text-xl font-bold tracking-[2px] cursor-pointer hover:-translate-y-2 duration-200"
                    >
                        Send Email
                    </button>
                </div>
            }
        </form>
    )
}