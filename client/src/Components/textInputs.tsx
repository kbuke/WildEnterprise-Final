import type { UseFormRegisterReturn, FieldError } from "react-hook-form"

type TextInputTypes = {
    textType: "text" | "password" | "email"
    placeholder: string,
    extraClasses?: string,
    register: UseFormRegisterReturn // the object register() returns, not a function
    error?: FieldError
}

export function TextInputs({
    textType,
    placeholder,
    extraClasses,
    register,
    error
}: TextInputTypes){
    return(
        <div>
            <input 
                type={textType}
                placeholder={placeholder}
                className={`${extraClasses}`}
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
    )
}