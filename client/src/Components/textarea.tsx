import type { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface TextAreaType{
    placeholder: string,
    extraClasses?: string,
    register: UseFormRegisterReturn
    error?: FieldError
}

export function TextArea({
    placeholder,
    extraClasses,
    register,
    error
}: TextAreaType){
    return(
        <div>
            <textarea 
                placeholder={placeholder}
                className={extraClasses}
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