import GitHeader from "@/components/header";

const ProfilePage = () => {
    return (
        <div>
            <GitHeader 
                homePage = "https://github.com/fluidicon.png"
                searchBar= "Search or jump to..."
                pullRequest= "https://github.com/pulls"
                issues= "https://github.com/issues   "
                codespace= "https://github.com/codespaces"
                market= "https://github.com/marketplace"
                explore= "https://github.com/explore"
            />
        </div>
    );
};