import {RepoProp}  from "@/interfaces/repo";

interface Props{
    repositories: RepoProp[];
}

export const RepositoryList = ({repositories} : Props) => {
    return(
        <div className="h-screen">
            <ul>
                {
                    repositories.map((repository) => (
                        <li  key="" className="col-12 flex-justify-between w-full py-4 border-b border-gray-400">
                            <div className="col-10 col-lg-9 d-inline-block">
                                <div className="d-inline-block mb-1">
                                    <h3 className="wb-break-all" > 
                                    <a href={repository.html_url} className="text-blue-400 text-xl font-bold hover:underline">
        {repository.name}</a>
        <span className="ml-2 mb-1 pr-2 pl-2 rounded-xl outline-gray-200 border-2 text-xs text-white">Public</span>
                                    </h3>
                                </div>
                                <div>
                                    <p className="pt-2 text-sm col-9 d-inline-block color-fg-muted mb-2 pr-4">
                                        {repository.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};