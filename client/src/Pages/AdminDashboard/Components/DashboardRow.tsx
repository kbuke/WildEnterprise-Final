import type { DashboardType } from "../../../Types"
import { DashboardCard } from "./DashboardCard"

type DashboardRowType = {
    group: DashboardType[],
    navigate: (url: string) => void
}

export function DashboardRow({
    group,
    navigate
}: DashboardRowType){
    const [heroOption, ...stackedOptions] = group

    return(
        <div
            className="grid grid-cols-2 gap-4"
        >
            {heroOption && (
                <DashboardCard 
                    option={heroOption}
                    onClick={() => navigate(heroOption.bgUrl)}
                    className="h-160"
                />
            )}

            <div>
                {stackedOptions.map(option => (
                    <DashboardCard 
                        key={option.bgUrl}
                        option={option}
                        onClick={() => navigate(option.bgUrl)}
                        className="h-77"
                    />
                ))}
            </div>
        </div>
    )
}