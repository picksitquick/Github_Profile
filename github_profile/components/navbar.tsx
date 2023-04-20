import { Navbar } from "@/interfaces/navbar";
import Link from "next/link";

export const InnerNav: React.FC<Navbar> = (props:Navbar) => {
    return(
        <div className="text-center mt-8 ml-4 mr-4 justify-between">
            <nav className="text-gray-300 justify-between">
                <div className="text-left justify-between">
                    <input className="mr-2 bg-gray-800 rounded-lg px-3 py-1 text-sm w-48 focus:outline-none text-white" type="text" placeholder="Enter Username"></input>
                    <button className="bg-green-500 hover:bg-green-600 text-gray-800 font-bold py-1 px-4 rounded-full border border-green-200">Submit</button>
                </div>
                <a href={props.overview} className="mr-6 hover:text-blue-600">
                    Overview
                </a>
                <a href= {props.repo} className="mr-6 hover:text-blue-600">
                    Repositories <span className="ml-1 rounded bg-gray-700">{props.repoCount}</span>
                </a>
                <a href={props.projects} className="mr-6 hover:text-blue-600">
                    Projects
                </a>
                <a href={props.packages} className="mr-6 hover:text-blue-600">
                    Packages
                </a>
                <a href={props.stars} className="mr-6 hover:text-blue-600">
                    Stars
                </a>
            </nav>
            <div className="border-b border-white mt-4"></div>
        </div>
    );
};