import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InnerNav } from "@/components/navbar";
import { Profile } from "@/components/profile";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";

interface User{
    avatar_url: string;
    followers: string;
    following: string;
    name: string;
    public_repos: string;
    starred_url: string;
    bio: string;
}

function ProfilePage(){
    const [username , setUsername] = useState('picksitquick');
    const [user , setUser] = useState<User | null>(null);
    const [inputValue , setInputValue] = useState('');

    const handleInputChange = (event: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        setUsername(inputValue);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
    }, [username]);

    return (
       
        <div>
            {/* <Header 
                logoUrl = "https://github.com/fluidicon.png"
                searchPlaceholder= "Search or jump to..."
                pullRequestsUrl= "https://github.com/pulls"
                issuesUrl= "https://github.com/issues   "
                codespacesUrl= "https://github.com/codespaces"
                marketplaceUrl= "https://github.com/marketplace"
                exploreUrl= "https://github.com/explore"
            /> */}
            
            <div className="flex border-b mb-4 ml-2">
                <div className="justify-between mt-6">
                    <form onSubmit={handleSubmit}>
                        <input value={inputValue} onChange={handleInputChange} className="mr-2 bg-gray-800 rounded-lg px-3 py-1 text-sm w-48 focus:outline-none text-white" type="text" placeholder="Enter Username"></input>
                        <button type='submit' className="bg-green-500 hover:bg-green-600 text-gray-800 font-bold py-1 px-4 rounded-full border border-green-200">Submit</button>
                    </form>
                </div>
                {user && (
                <InnerNav 
                    overview = ""
                    repo = "/repository"
                    stars = {user.starred_url ? user.starred_url : "Not Available"}
                    projects = ""
                    packages = ""
                    repoCount = {user.public_repos ? user.public_repos : "Not Available"}
                />
                )}
            </div>
            {user && (
            <Profile 
                avatarUrl = {user.avatar_url}
                userName = {user.name}
                userbio = {user.bio}
                edit = ""
                followers = {user.followers}
                following = {user.following}
            />
                )}
            <Footer 
                logo= "https://github.com/fluidicon.png"
                terms= "https://docs.github.com/site-policy/github-terms/github-terms-of-service"
                privacy= "https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                security= "https://github.com/security"
                status= "https://www.githubstatus.com/"
                docs= "https://docs.github.com"
                contact= "https://support.github.com?tags=dotcom-footer"
                pricing= "https://github.com/pricing"
                api= "https://docs.github.com"
                training= "https://services.github.com"
                blog= "https://github.blog"
                about= "https://github.com/about"
            />
        </div>
    );
};

export default ProfilePage;