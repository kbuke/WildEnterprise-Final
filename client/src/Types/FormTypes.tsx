import type { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form"

export type PostInstanceType = {
    onClose: () => void,
    action: "Delete" | "Add" | "Edit"
    name?: string
}

export type EditAndDeleteType = {
    patchAction?: () => void,
    deleteAction?: () => void
}

export type FormInputTypes<T extends FieldValues> = {
    register: UseFormRegister<T>
    errors: FieldErrors<T>
}

export type FormError = {
    error: string
}

export type FormMessage = {
    message: string
}

export type FormPostMessage = {
    message: string
}

export type FormPostError = {
    error: string
}

export type CloseFormType = {
    onClose: () => void
}

export type DeleteInstanceType = {
    name: string, 
    id: number,
    onClose: () => void
}

export type PatchInstanceType<T> = {
    selectedInstance: T,
    onCancel: () => void
}