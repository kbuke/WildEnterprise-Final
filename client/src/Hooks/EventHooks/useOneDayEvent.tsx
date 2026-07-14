import { useState } from "react";
import type { UseFormSetValue } from "react-hook-form";
import type { PostEventType } from "../../Types";

type OneDayEventType = {
    setValue: UseFormSetValue<PostEventType>,
    initialValue?: boolean
}

export function useOneDayEvent({
    setValue,
    initialValue = true
}: OneDayEventType){
    const [oneDayEvent, setOneDayEvent] = useState<boolean>(initialValue)

    const handleToggleOneDayEvent = () => {
        setOneDayEvent((prev) => {
            const next = !prev 
            if (next){
                setValue("endDate", undefined)
            }
            return next
        })
    }
    return {oneDayEvent, handleToggleOneDayEvent}
}