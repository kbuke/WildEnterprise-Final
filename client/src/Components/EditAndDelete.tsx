import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { EditAndDeleteType } from "../Types/FormTypes";

export function EditAndDelete({
    patchAction,
    deleteAction
}: EditAndDeleteType){
    return(
        <div
            className="py-6 flex flex-row justify-between gap-6 w-full rounded-b px-10"
        >
            <PencilIcon 
                onClick={patchAction}
                className="h-10 w-10 text-white cursor-pointer hover:-translate-y-2 duration-200"
            />

            <TrashIcon 
                onClick={deleteAction}
                className="h-10 w-10 text-white cursor-pointer hover:-translate-y-2 duration-200"
            />
        </div>
    )
}