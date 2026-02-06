import React from "react";
import Card from "./Card";

const CardList = ({robotsList}) => {
    if (robotsList.length === 0) {
        return <h2 className="tc">No robots found</h2>;
    }   
    return (
        <ul>            
            {
                robotsList.map((robot) => {
                    return(
                        <Card 
                            key={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                            id={robot.id} 
                        />
                    );               
                })
            }
        </ul>
    );
}
export default CardList;