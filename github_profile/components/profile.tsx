import { ProfileProp } from "@/interfaces/profile";
import React from "react";
//this is a more static way to do it. does the same but not so usuable.
// const userName = "picksitquick"

// fetch("https://api.github.com/users/${userName}")
//     .then(response => response.json())
//     .then(data => {
//         const avatarUrl = data.avatar_url;
//         const profilePic = document.getElementById("profile-pic");
//     })
//     .catch(error => console.error(error));

export const Profile: React.FC<ProfileProp> = (props : ProfileProp) => {
    
    return (
        <div className="profile-pic h-screen p-10 bg-100">
            <div className="col-2 col-md-12 mr-3 mr-md-0 m-12">
                <a href= "https://github.com/picksitquick">
                    <img src = {props.avatarUrl} alt = "Profile Picture" />
                </a>
            </div>
            <div>
                <span className="text-gray-200 text-xl block font-bold mt-4">{props.userName}</span>
                <span className="text-gray-200 text-lg block">{props.userbio}</span>
            </div>
            <div className="mb-3 mt-4">
                <button type="button" className="px-8 block text-center font-bold bg-gray-500 rounded-lg shadow-lg
                border-gray-300 outline">Edit Profile</button>
            </div>
            <div className="mb-3">
                <span className="bold text-gray-200 hover:text-blue-700">{props.followers} followers</span>
                <span className="bold text-gray-200 hover:text-blue-700">{props.following} following</span>
            </div>
        </div>
    );
};