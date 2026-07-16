type LoadingType = {
    loadingType: "Loading" | "Posting" | "Patching" | "Deleting" | "Sending"
}

export function Loading({
    loadingType
}: LoadingType){
    return(
        <div
            className="text-center"
        >
            <img 
                src={"LoadingImg.png"}
                className="h-100 w-100"
            />

            <p
                className="font-bold text-8xl"
            >
                {loadingType}
            </p>
        </div>
    )
}