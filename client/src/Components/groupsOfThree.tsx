import type { DashboardType } from "../Types";

export function groupsOfThree(items: DashboardType[]): DashboardType[][]{
    const groups: DashboardType[][] = []
    for (let i = 0; i < items.length; i += 3){
        groups.push(items.slice(i, i+3))
    }
    return groups
}