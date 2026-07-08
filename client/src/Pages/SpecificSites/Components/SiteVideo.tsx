import { useState, useRef } from "react"

type SiteVideoType = {
    name: string,
    siteVideo?: string
}

export function SiteVideo({
    name
}: SiteVideoType){

    const [noVideo, setNoVideo] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const specificSiteVideo = `/${name}Vid.mp4`
    const videoRef = useRef<HTMLVideoElement>(null)

     const togglePlay = () => {
        if (!videoRef.current) return
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
    }

    return(
        !noVideo &&
            <div
                className="relative mt-14 px-10 py-6 bg-black/80"
            >
                <video
                    className="w-full rounded"
                    ref={videoRef}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={togglePlay}
                    onError={() => setNoVideo(true)}
                >
                    <source 
                        src={specificSiteVideo}
                        type="video/mp4"
                    />
                </video>

                {!isPlaying && (
                    <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/20"
                        aria-label="Play video"
                    >
                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80">
                            {/* play triangle icon */}
                            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1" fill="black">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </button>
                )}
            </div>
    )
}