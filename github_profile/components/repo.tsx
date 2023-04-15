import {RepoProp}  from "@/interfaces/repo";

interface Props{
    repositories: RepoProp[];
}

export const RepositoryList = ({repositories} : Props) => {
    return(
        <div>
            <ul>
                {
                    repositories.map((repository) => (
                        <li key = {repository.name} 
                        className="border-b border-w text-center border-r">
                            <a href={repository.repo_url}>
                                <h3 className="font-bold text-blue-600 hover: decoration: underline">{repository.name}</h3>
                            </a>
                            <p>{repository.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};