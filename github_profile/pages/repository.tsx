import { Header } from "@/components/header";
import { RepositoryList } from "@/components/repo";
import { RepoProp } from "@/interfaces/repo";
import { Footer } from "@/components/footer";
import { InnerNav } from "@/components/navbar";
import { useState , useEffect, SetStateAction } from "react";
import { Snackbar } from "@mui/material";
import {Alert} from "@mui/material";

interface User{
    public_repos: string;
}

interface RepoPageProp{
    repositories: RepoProp[];
}

const RepositoryPage:React.FC<RepoPageProp> = ({repositories}) => {
    const [username , setUsername] = useState('picksitquick');
    const [user , setUser] = useState<User | null>(null);
    const [repoData , setRepodata] = useState([]);
    const [inputValue , setInputValue] = useState('');
    // const [open , setOpen] = useState(false);
    const [error , setError] = useState(false);

    const handleInputChange = (event: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        inputValue === '' ? setError(true) : setUsername(inputValue);
    }

    const handleClose = () => {
        setError(false);
    }

    useEffect(() => {  
        const fetchUser = async () => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUser(data);
            
            const repoList = await fetch(`https://api.github.com/users/${username}/repos`);
            const repoData = await repoList.json();
            setRepodata(repoData);
        };
        fetchUser();
    }, [username]);

    if(!user){
        return <div>Loading.....</div>;
    }
    repositories = repoData;
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
            
            <div className="flex border-b mt-2 ml-2 mb-2">
                <div className="justify-between mt-6">
                    <form onSubmit={handleSubmit}>
                        <input value={inputValue} onChange={handleInputChange} className="mr-2 bg-gray-800 rounded-lg px-3 py-1 text-sm w-48 focus:outline-none text-white" type="text" placeholder="Enter Username"></input>
                        <button type='submit' className="bg-green-500 hover:bg-green-600 text-gray-800 font-bold py-1 px-4 rounded-full border border-green-200">Submit</button>
                    </form>
                    {/* <Snackbar 
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Field Cannot be blank."/> */
                        error && (
                            <Alert severity="error" onClose={()=>setError(false)}>
                                Field cannot be empty!!
                            </Alert>
                        )
                        
                    }
                    

                </div>
                <InnerNav
                    overview = "/profile"
                    repo = "/repository"
                    stars = ""
                    projects = ""
                    packages = ""
                    repoCount = {user.public_repos}
                />
            </div>
            <div className="flex-grow">
                <RepositoryList repositories={repositories} />
            </div>
            

            <div className="flex-shrink-0">
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
        </div>
    );
};

// export async function getServerSideProps() {
//     const response = await fetch(`https://api.github.com/users/${username}/repos`);
//     const repositories: RepoProp[] = await response.json();

//     return {
//         props: {
//             repositories,
//         },
//     };
// }

export default RepositoryPage;