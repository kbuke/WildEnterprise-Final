import type { PostInstanceType } from "../Types/FormTypes";

export function FormSubmitAndCancel({
    onClose,
    name,
    action
}: PostInstanceType){
    return(
        <div
            className="flex flex-row gap-6 mt-6"
        >
            <button
                type="submit"
                className="w-50 bg-green-600 text-white h-14 rounded text-xl uppercase font-bold hover:-translate-y-2 duration-200 cursor-pointer"
            >
                {action} {name}
            </button>

            <button
                onClick={onClose}
                className="w-50 bg-red-600 text-white h-14 rounded text-xl uppercase font-bold hover:-translate-y-2 duration-200 cursor-pointer"
            >
                Cancel
            </button>
        </div>
    )
}