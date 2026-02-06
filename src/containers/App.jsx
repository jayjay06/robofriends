import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
//import {robots} from "./robots";

const App = () => {
    const [ searchInput, setSearchInput ] = useState('');
    const [ robotsList, setRobotsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            setRobotsList(users);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching robots:', error);
            setIsLoading(false);
        });
    }, []);

    const filteredRobots = robotsList.filter((robot) => {
        return robot.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div className="tc w-100">
            <h1>Robofriends</h1>
            {isLoading ? <h2>Loading...</h2> : null}
            <SearchBar setSearchInput={setSearchInput} />
            <Scroll>
                <CardList robotsList={filteredRobots} />
            </Scroll>
        </div>
    )
}

export default App;