export function toDateInput(
    value: string | null | undefined
): string | undefined {
    if(!value) return undefined
    return value.slice(0, 10)
}