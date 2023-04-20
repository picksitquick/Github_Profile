import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InnerNav } from "@/components/navbar";
import { Profile } from "@/components/profile";
import { useEffect, useState } from "react";
import Link from "next/link";

interface User{
    avatar_url: string;
    followers: string;
    following: string;
    name: string;
    public_repos: string;
    starred_url: string;
}


const ProfilePage = () => {
    const [user , setUser] = useState<User | null>(null);
    useEffect(() => {
        async function fetchUser() {
            const response = await fetch("https://api.github.com/users/picksitquick");
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
        },
    []);

    if(!user){
        return <div>Loading.....</div>;
    }

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

            <InnerNav 
                overview = ""
                repo = "/repository"
                stars = {user.starred_url}
                projects = ""
                packages = ""
                repoCount = {user.public_repos}
            />

            <Profile 
                avatarUrl = {user.avatar_url}
                userName = {user.name}
                userbio = "picksitquick"
                edit = ""
                followers = {user.followers}
                following = {user.following}
            />

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