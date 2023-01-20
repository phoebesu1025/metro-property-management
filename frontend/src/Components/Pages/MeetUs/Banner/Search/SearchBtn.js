import React from 'react'

const SearchBtn = ({ onClick }) => {
    return (
        <div className="flex justify-end items-end 2xl:basis-[10%] sm:basis-[45%] basis-[100%]">
            <button
                className="property-manger-search-btn flex justify-center gap-2 bg-red1 text-white  px-8 py-2 rounded-md "
                onClick={onClick}
            >
                <img src="./images/propertyManagers/search.png" alt="search" /> <p>Search</p>
            </button>
        </div>
    )
}

export default SearchBtn