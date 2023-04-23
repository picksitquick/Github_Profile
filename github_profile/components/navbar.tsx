import { Navbar } from "@/interfaces/navbar";
import Link from "next/link";

export const InnerNav: React.FC<Navbar> = (props:Navbar) => {
    return(
        <div className="text-center mt-8 ml-24 mr-4 mb-4">
            <nav className="text-gray-300 flex">
                <div className="justify-between">
                    <a href={props.overview} className="ml-30 mr-8 hover:text-blue-600">
                        Overview
                    </a>
                    <a href= {props.repo} className=" hover:text-blue-600">
                        Repositories <span className="mr-8 rounded bg-gray-700">{props.repoCount}</span>
                    </a>
                    <a href={props.projects} className="mr-8 hover:text-blue-600">
                        Projects
                    </a>
                    <a href={props.packages} className="mr-8 hover:text-blue-600">
                        Packages
                    </a>
                    <a href={props.stars} className="hover:text-blue-600">
                        Stars
                    </a>
                </div>
            </nav>
        </div>
    );
};