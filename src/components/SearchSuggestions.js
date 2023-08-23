import React from "react";
import { Search } from "@mui/icons-material";

const SearchSuggestions = ({ suggestions }) => {
    return (
        <div className="bg-white w-1/2 rounded-xl p-2 pb-4">
            <ul>
                {suggestions[1]?.map((suggest) => {
                    return (
                        <li className="p-2 hover:bg-slate-100 cursor-pointer">
                            {<Search />} {suggest}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchSuggestions;
