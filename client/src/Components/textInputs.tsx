import type { UseFormRegisterReturn, FieldError } from "react-hook-form"

type TextInputTypes = {
    textType: "text" | "password" | "email" | "date" | "time"
    placeholder?: string,
    extraClasses?: string,
    register: UseFormRegisterReturn // the object register() returns, not a function
    error?: FieldError
    label?: string
}

export function TextInputs({
    textType,
    placeholder,
    extraClasses,
    register,
    error,
    label
}: TextInputTypes){

    const textInput = <div>
        <input 
            type={textType}
            placeholder={placeholder}
            className={`${label ? null : extraClasses}`}
            {...register}
        />
            {error &&
                <p
                    className="text-red-600"
                >
                    {error.message}
                </p>
            }
    </div>

    return(
        <div>
            {label 
                ? <div
                    className={`flex flex-row gap-4 ${extraClasses}`}
                >
                    <p>{label}</p>
                    {textInput}
                </div>
                :
                textInput
            }
        </div>
    )
}