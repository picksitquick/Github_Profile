import React from "react";
import {HeaderProp} from "../interfaces/header";

export const Header: React.FC<HeaderProp> = (props : HeaderProp) => {
    return (
        <nav className="bg-gray-600 p-3">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <img src={props.logoUrl} alt="Logo" className="h-6"/>
                    </a>
                    <form className="ml-4">
                        <input
                        type="text"
                        placeholder={props.searchPlaceholder}
                        className="bg-gray-800 rounded-lg px-3 py-1 text-sm w-48 focus:outline-none text-white"
                        />
                    </form>
                </div>
                <div className="flex items-center">
                    <a href={props.pullRequestsUrl} className="text-gray-300 ml-8 hover:text-white">
                        Pull requests
                    </a>
                    <a href={props.issuesUrl} className="text-gray-300 ml-8 hover:text-white">
                        Issues
                    </a>
                    <a href={props.codespacesUrl} className="text-gray-300 ml-8 hover:text-white" >
                        Codespaces
                    </a>
                    <a href={props.marketplaceUrl} className="text-gray-300 ml-8 hover:text-white">
                        Marketplace
                    </a>
                    <a href={props.exploreUrl} className="text-gray-300 ml-8 hover:text-white">
                        Explore
                    </a>
                </div>
            </div>
        </nav>
  );
};
	
