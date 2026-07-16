import { EditAndDelete } from "./EditAndDelete"

type AdminCardType = {
    name?: string,
    img: string,
    onPatch: () => void,
    onDelete: () => void,
    onSelect: () => void
}

export function AdminCards({
    name, img, onPatch, onDelete, onSelect
}: AdminCardType){
    return(
        <div
            className="rounded bg-black/80 text-white"
        >
            <img 
                src={img}
                alt={`${name}-img`}
                className="rounded-t"
            />

            <div
                className="py-4 flex flex-col items-center"
            >
                <h1
                    className="uppercase text-center text-4xl font-bold tracking-[2px]"
                >
                    {name}
                </h1>

                <EditAndDelete 
                    patchAction={onPatch}
                    deleteAction={onDelete}
                />

                <button
                    className="bg-green-600 h-14 w-60 uppercase text-2xl rounded hover:-translate-y-2 duration-200 cursor-pointer"
                    onClick={onSelect}
                >
                    More Info
                </button>
            </div>
        </div>
    )
}