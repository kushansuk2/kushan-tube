import React from "react";

const CategoryList = () => {
    const categories = [
        "All",
        "Gaming",
        "Film Critics",
        "Music",
        "5G",
        "SmartPhones",
        "Thriller",
        "Mixes",
        "Modern Family",
        "Cricket",
        "India",
        "Dramedy",
        "Football",
        "Anime",
        "Computer Programming"
    ];
    return (
        <div className="flex flex-row gap-2 mb-6 overflow-hidden">
            {categories.map((category,index) => {
                return <button key={index} className="rounded-lg bg-gray-200 py-1 px-4 whitespace-nowrap">{category}</button>;
            })}
        </div>
    );
};

export default CategoryList;
