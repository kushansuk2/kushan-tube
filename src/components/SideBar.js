import {
    EmojiEvents,
    ExpandMore,
    Feed,
    History,
    Home,
    Lightbulb,
    Movie,
    MusicNote,
    Sensors,
    ShoppingBag,
    SmartDisplay,
    SportsEsports,
    Subscriptions,
    Tag,
    TheaterComedy,
    WatchLater,
    Whatshot,
} from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
    const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
    if (!isSideBarOpen) return null;
    return (
        <div className="w-52 fixed h-screen overflow-auto ml-2 left-0 bg-white">
            <ul className="flex flex-col gap-4 px-2 pb-2">
                <li className="flex flex-row gap-4 pt-2">
                    <Home /> <div>Home</div>
                </li>
                <li className="flex flex-row gap-4">
                    <Tag /> <div>Shorts</div>
                </li>
                <li className="flex flex-row gap-4 pb-2">
                    <Subscriptions /> <div>Subscription</div>
                </li>
            </ul>
            <hr></hr>
            <ul className="flex flex-col gap-4 p-2">
                <li className="flex flex-row gap-4 pt-2">
                    <Home /> <div>Library</div>
                </li>
                <li className="flex flex-row gap-4">
                    <History /> <div>History</div>
                </li>
                <li className="flex flex-row gap-4">
                    <SmartDisplay /> <div>Your Videos</div>
                </li>
                <li className="flex flex-row gap-4">
                    <Movie /> <div>Your Movies</div>
                </li>
                <li className="flex flex-row gap-4">
                    <WatchLater /> <div>Watch Later</div>
                </li>
                <li className="flex flex-row gap-4 pb-2">
                    <ExpandMore /> <div>Show More</div>
                </li>
            </ul>
            <hr className="border "></hr>
            <div className="mt-2 ml-1 text-lg">Explore</div>
            <ul className="flex flex-col gap-4 px-2 pb-2 mb-20">
                <li className="flex flex-row gap-4 pt-2">
                    <Whatshot /> <div>Trending</div>
                </li>
                <li className="flex flex-row gap-4">
                    <ShoppingBag /> <div>Shopping</div>
                </li>
                <li className="flex flex-row gap-4">
                    <MusicNote /> <div>Music</div>
                </li>
                <li className="flex flex-row gap-4">
                    <Sensors /> <div>Live</div>
                </li>
                <li className="flex flex-row gap-4">
                    <SportsEsports /> <div>Gaming</div>
                </li>
                <li className="flex flex-row gap-4">
                    <Feed /> <div>News</div>
                </li>
                <li className="flex flex-row gap-4">
                    <EmojiEvents /> <div>Sports</div>
                </li>
                <li className="flex flex-row gap-4">
                    <Lightbulb /> <div>Learning</div>
                </li>
                <li className="flex flex-row gap-4 pb-2">
                    <TheaterComedy /> <div>Comedy</div>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
