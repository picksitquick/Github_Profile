import { Header } from "@/components/header";
import { RepositoryList } from "@/components/repo";
import { RepoProp } from "@/interfaces/repo";
import { Footer } from "@/components/footer";
import { InnerNav } from "@/components/navbar";

interface RepoPageProp{
    repositories: RepoProp[];
}

const RepositoryPage:React.FC<RepoPageProp> = ({repositories}) => {
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
            
            
            <InnerNav
                overview = "/profile"
                repo = "/repository"
                stars = ""
                projects = ""
                packages = ""
                repoCount = ""
            />

            <RepositoryList repositories={repositories} />

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

export async function getServerSideProps() {
    const response = await fetch("https://api.github.com/users/picksitquick/repos");
    const repositories: RepoProp[] = await response.json();

    return {
        props: {
            repositories,
        },
    };
}

export default RepositoryPage;