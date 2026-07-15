export type EventTypes = {
    id: number
    name: string,
    img: string,
    start_date: string,
    end_date: string | null,
    start_time: string,
    end_time: string,
    info: string,
    site_id: number
}

export type PatchEventPayload = Omit<PostEventType, "endDate"> & {
    endDate: string | null
}

export type PostEventType = {
    name: string,
    img: string,
    startDate: string,
    endDate?: string,
    startTime: string,
    endTime: string,
    info: string,
    siteId: number
}

export type SelectedEventType = {
    onCancel: () => void,
    event: EventTypes
}