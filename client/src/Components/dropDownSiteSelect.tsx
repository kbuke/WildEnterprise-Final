import type { FieldError, UseFormRegisterReturn } from "react-hook-form"
import { useFetchSites } from "../Hooks/SiteHooks/useFetchSites"
import type { SiteType } from "../Types/SiteTypes"

type DropDownSiteelectType = {
    register: UseFormRegisterReturn,
    error?: FieldError
    extraClasses?: string
}

export function DropDownSiteSelect({
    register,
    error,
    extraClasses
}: DropDownSiteelectType){
    const {sites} = useFetchSites()
    return(
        <div>
            <select
                defaultValue=""
                className={`${extraClasses}`}
                {...register}
            >
                <option
                    disabled
                    value=""
                >
                    Select Site
                </option>

                {sites.map((site, index) => {
                    return(
                        <option
                            key={index}
                            value={site.id}
                        >
                            {site.name}
                        </option>
                    )
                })}
            </select>

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