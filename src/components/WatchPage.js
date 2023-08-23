import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/appSlice";

const WatchPage = () => {
    const dispatch = useDispatch();
    useState(() => {
        dispatch(closeSideBar());
    }, []);
    const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
    return (
        <div>
            <div className="pl">
                <iframe
                    width="967"
                    height="544"
                    src="https://www.youtube.com/embed/EU0f7fJMFp0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
            </div>
        </div>
    );
};

export default WatchPage;
