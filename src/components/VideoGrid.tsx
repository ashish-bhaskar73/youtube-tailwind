import { VideoCard } from "./VideoCard"
const VIDEOS = [{
    title: "surya the superstar",
    author: "ashish bhaskar",
    views: "45M",
    img: "thumbnail.png",
    thumbimg: "thumbnail.png",
    timestamp: "5 days ago"
}, {
    title: "King khan",
    author: "Sharukh khan",
    views: "43M",
    img: "thumbnail.png",
    thumbimg: "thumbnail.png",
    timestamp: "3 days ago"
}, {
    title: "Why this is happening",
    author: "Robert",
    views: "35M",
    img: "thumbnail.png",
    thumbimg: "thumbnail.png",
    timestamp: "2 days ago"
},{
    title: "Why this ning",
    author: "Sanju Dhoni",
    views: "35M",
    img: "thumbnail.png",
    thumbimg: "thumbnail.png",
    timestamp: "0 days ago"
}]
export const VideoGrid=()=> {
    return (
        <div className="grid grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard 
                title={video.title}
                author={video.author}
                views={video.views}
                img={video.img}
                thumbimg={video.thumbimg}
                timestamp={video.timestamp}
                ></VideoCard>
            </div>)
}
        </div >
    )
}