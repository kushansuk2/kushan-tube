import React from "react";
import moment from "moment/moment";

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
            return num >= item.value;
        });
    return item
        ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
        : "0";
}

const VideoCard = ({ info }) => {
    console.log(info);
    const thumbnailImage = info?.snippet?.thumbnails?.high?.url;
    const title = info?.snippet?.title;
    const channelTitle = info?.snippet?.channelTitle;
    const views = info?.statistics?.viewCount;
    const date = info?.snippet?.publishedAt;
    const fromNow = moment(date).fromNow();
    return (
        <div className="flex flex-col w-[360px]">
            <img
                className="rounded-xl h-52 w-full object-cover"
                src={thumbnailImage}
                alt="thumbnail"
            />
            <div className="h-24 mt-2 mb-8">
                <ul>
                    <li className="overflow-hidden font-semibold line-clamp-2">
                        {title}
                    </li>
                    <li>{channelTitle}</li>
                    <li>
                        <ul className="flex flex-row gap-7 list-disc">
                            <li className="list-none">{nFormatter(views,0)} Views</li>
                            <li>{fromNow}</li>
                        </ul>
                         </li>
                </ul>
            </div>
        </div>
    );
};

export default VideoCard;
