import React from "react";

const SearchBar = ({setSearchInput}) => {
    const onChange = (e) => {
        console.log(e.target.value);
        setSearchInput(e.target.value)
    };
    return (
        <>
            <form className='pa2'>
                <input onChange={onChange} type="search" placeholder="search for robofriend" className="pa3 ba b--green bg-lightest-blue" />
            </form>
        </>
    )
}

export default SearchBar;