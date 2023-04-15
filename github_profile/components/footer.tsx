import { FooterProp } from "@/interfaces/footer";

export const Footer: React.FC<FooterProp> = (props:FooterProp) => {
    return (
        <nav className="bg-gray-900 p-9 border-t border-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <img src={props.logo} alt="© 2023 GitHub, Inc." className="h-6" />
                    </a>
                    <p className="p-2 text-xs">© 2023 GitHub, Inc.</p>
                </div>
                <div className="flex text-center">
                    <a href = {props.terms} className="text-blue-500 text-decoration: underline ml-10">
                        Terms
                    </a>
                    <a href = {props.privacy} className="text-blue-500 text-decoration: underline ml-10">
                        Privacy
                    </a>
                    <a href = {props.security} className="text-blue-500 text-decoration: underline ml-10">
                        Security
                    </a>
                    <a href = {props.status} className="text-blue-500 text-decoration: underline ml-10">
                        Status
                    </a>
                    <a href = {props.docs} className="text-blue-500 text-decoration: underline ml-10">
                        Docs
                    </a>
                    <a href = {props.contact} className="text-blue-500 text-decoration: underline ml-10">
                        Contact GitHub
                    </a>
                    <a href = {props.pricing} className="text-blue-500 text-decoration: underline ml-10">
                        Pricing
                    </a>
                    <a href = {props.api} className="text-blue-500 text-decoration: underline ml-10">
                        API
                    </a>
                    <a href = {props.training} className="text-blue-500 text-decoration: underline ml-10">
                        Training
                    </a>
                    <a href = {props.blog} className="text-blue-500 text-decoration: underline ml-10">
                        Blog
                    </a>
                    <a href = {props.about} className="text-blue-500 text-decoration: underline ml-10">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
};