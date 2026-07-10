import { useForm } from "react-hook-form";
import { TextInputs } from "../../Components/textInputs";
import { usePostAdminLogin } from "../../Hooks/usePostAdminLogin";
import { useNavigate } from "react-router-dom";

interface AdminLoginForm{
    email: string,
    password: string
}

export function AdminLogin(){
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<AdminLoginForm>()

    const postAdminLogin = usePostAdminLogin()

    const onSubmit = (formData: AdminLoginForm) => {
        console.log(formData)
        postAdminLogin.mutate(formData,{
            onSuccess: () => {
                console.log("nice one")
                navigate("/admindashboard")
            }
        })
    }

    return(
        <div
            style={{backgroundImage: `url(${"/AdminSignInBg.jpg"})`}}
            className="h-screen w-full bg-center bg-no-repeat bg-cover flex flex-col items-end"
        >
            <form
                className="bg-white/80 py-20 px-4 rounded mr-10 mt-10 flex flex-col w-120"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1
                    className="uppercase text-4xl tracking-[3px]"
                >
                    Admin Sign In
                </h1>

                <TextInputs 
                    textType="email"
                    placeholder="Please enter email"
                    extraClasses="border-b border-black mt-10 w-100"
                    register={register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address"
                        }
                    })}
                    error={errors.email}
                />

                <TextInputs 
                    textType="password"
                    placeholder="Please enter password"
                    extraClasses="border-b border-black mt-10 w-100"
                    register={register("password", {
                        required: "Password is required"
                    })}
                    error={errors.password}
                />

                <button
                    className="mt-10 bg-green-600/80 text-white uppercase cursor-pointer py-4 w-40 rounded hover:-translate-y-2 duration-200"
                >
                    Sign In
                </button>

                {postAdminLogin.isError && (
                    <p
                        className="text-red-600"
                    >
                        {postAdminLogin.error.message}
                    </p>
                )}
            </form>
        </div>
    )
}