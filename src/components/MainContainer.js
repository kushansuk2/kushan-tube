import React from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./VideoContainer";
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
    return (
        <div className={isSideBarOpen ? "ml-[240px] mr-12" : "mx-12"}>
            <CategoryList />
            <VideoContainer />
        </div>
    );
};

export default MainContainer;
