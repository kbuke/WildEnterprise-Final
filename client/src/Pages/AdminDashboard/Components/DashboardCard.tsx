import type { DashboardType } from "../../../Types";

interface DashboardCardType{
    option: DashboardType,
    onClick: () => void,
    className?: string
}

export function DashboardCard({
    option,
    onClick,
    className
}: DashboardCardType){
    return(
        <div
            onClick={onClick}
            style={{backgroundImage: `url(${option.bgImg})`}}
            className={`rounded mt-6 cursor-pointer bg-cover bg-no-repeat bg-center flex flex-col justify-end ${className}`}
        >
            <div
                className="flex items-center justify-center text-white uppercase w-full bg-gray-600/80 rounded-b h-10"
            >
                <span
                    className="text-4xl font-bold tracking-[4px] self-center"
                >
                    {option.bgTitle}
                </span>
            </div>
        </div>
    )
}