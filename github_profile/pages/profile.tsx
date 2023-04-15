import { Footer } from "@/components/footer";
import {Header} from "@/components/header";
import { Profile } from "@/components/profile";

const ProfilePage = () => {
    return (
        <div>
            <Header 
                logoUrl = "https://github.com/fluidicon.png"
                searchPlaceholder= "Search or jump to..."
                pullRequestsUrl= "https://github.com/pulls"
                issuesUrl= "https://github.com/issues   "
                codespacesUrl= "https://github.com/codespaces"
                marketplaceUrl= "https://github.com/marketplace"
                exploreUrl= "https://github.com/explore"
            />

            <Profile 
                avatarUrl = ""
                userName = "Picksitquick"
                userbio = "picksitquick"
                edit = ""
                followers = ""
                following = ""
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