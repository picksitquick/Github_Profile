import { Navbar } from "@/interfaces/navbar";
import Link from "next/link";

export const InnerNav: React.FC<Navbar> = (props:Navbar) => {
    return(
        <div className="text-center mt-8 ml-4 mr-4 justify-between">
            <nav className="text-gray-300 justify-between">
                <a href={props.overview} className="mr-6">
                    Overview
                </a>
                <a href= {props.repo} className="mr-6">
                    Repositories <span className="ml-1 rounded bg-gray-700">{props.repoCount}</span>
                </a>
                <a href={props.projects} className="mr-6">
                    Projects
                </a>
                <a href={props.packages} className="mr-6">
                    Packages
                </a>
                <a href={props.stars} className="mr-6">
                    Stars
                </a>
            </nav>
            <div className="border-b border-white mt-4"></div>
        </div>
    );
};