import React from "react";
import {Header} from "@/interfaces/header";

const GitHeader: React.FC<Header> = (props: Header) => {
    return (
        <div id = "gitHeader">
            <a href = "">
                <img src = {props.homePage} alt = "Enterprise" />
            </a>
            <input type= "text" placeholder= {props.searchBar}/>
            
        </div>
    );
};

export default GitHeader;