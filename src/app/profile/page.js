

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useForm } from "../components/FormContext";

const ProfilePage = () => {
    const { formData } = useForm();
    useEffect(() => {
        console.log("Form Data in Profile Page:", formData);
        if (!formData || !formData.user) {
            
            // Redirect to login or show a message
            console.log("No user data found. Please log in.");
        }
        }
    , [formData]);

	const user = formData?.user || {};

	return (
		<div className="flex justify-center items-center min-h-[60vh] w-full">
			<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center border border-blue-200">
				<div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
					{/* Avatar: fallback to initials if no image */}
					{user.avatarUrl ? (
						<Image src={user.avatarUrl} alt="Avatar" width={96} height={96} className="w-24 h-24 rounded-full object-cover" />
					) : (
						<span className="text-4xl font-bold text-blue-700">
							{user.fullname ? user.fullname[0].toUpperCase() : "U"}
						</span>
					)}
				</div>
				<h2 className="text-2xl font-bold text-blue-800 mb-2">{user.fullname || "User"}</h2>
				<p className="text-gray-600 mb-4">{user.email || "No email provided"}</p>
				<div className="w-full mt-2">
					<ul className="space-y-2">
						{user.phone && (
							<li className="flex items-center text-gray-700">
								<svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0 1 22 16.92z"/></svg>
								+91-xxxx1049
							</li>
						)}
						{user.address && (
							<li className="flex items-center text-gray-700">
								<svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
								{user.address}
							</li>
						)}
						{/* Add more fields as needed */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
