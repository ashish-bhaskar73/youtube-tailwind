
export function VideoCard(props: any) {
    return <div>
        <img src={props.img} className="rounded-xl" alt="" />
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className={"rounded-full w-20 h-20"} src={props.thumbimg}></img>
            </div>
            <div className="col-span-11 pl-2">
                <div>{props.title}</div>
                <div className="col-span-11  text-gray-300 text-base">
                    {props.author}
                </div>
                <div className="col-span-11  text-gray-300 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div >
}

