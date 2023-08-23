import React, { useEffect, useState } from "react";
import youtubeLogo from "../assets/YouTube_Logo_2017.svg";
import { Menu, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./../utils/constants";
import SearchSuggestions from "./SearchSuggestions";

const Head = () => {
    const dispatch = useDispatch();
    const toggleSideBarHandler = () => {
        dispatch(toggleSideBar());
    };

    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json);
        // console.log(json);
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    return (
        <div className="fixed top-0 left-0">
            <div className="grid grid-flow-col p-2 w-screen bg-white">
                <div className="flex col-span-1  my-2">
                    {/* <img className="h-6 mr-2" alt="menu" src={hamBurgerIcon} /> */}
                    <div
                        className="mr-2 cursor-pointer pb-2"
                        onClick={toggleSideBarHandler}
                    >
                        <Menu className="" />
                    </div>
                    <img className="h-6" alt="logo" src={youtubeLogo} />
                </div>
                <div className="col-span-10 flex justify-center">
                    <input
                        className="rounded-l-full px-4 py-2 h-10 w-1/2 border border-slate-400"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="h-10 shadow-sm rounded-r-full px-4 py-1 border border-slate-400 bg-slate-100">
                        <Search />
                    </button>
                </div>
                {/* <SearchSuggestions /> */}
                <div className="col-span-1 flex justify-center items-center">
                    {/* <img className="h-8" alt="user" src={userIcon} /> */}
                    <Avatar sx={{ height: "32px", width: "32px" }} />
                </div>
            </div>
            {showSuggestions && (
                <div className="grid grid-flow-col w-screen">
                    <div className="flex col-span-1"></div>
                    <div className="col-span-10 flex justify-center pl-[100px]">
                        {searchQuery.length && (
                            <SearchSuggestions suggestions={suggestions} />
                        )}
                    </div>
                    <div className="col-span-1 flex justify-center items-center"></div>
                </div>
            )}
        </div>
    );
};

export default Head;
