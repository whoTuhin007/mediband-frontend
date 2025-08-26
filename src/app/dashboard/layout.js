import React from "react";
import Menu from "../components/Menu";

export default function DashboardLayout({ children }) {
    return (
              <div className="flex justify-center items-center h-screen w-full p-10 md:p-20 py-20   rounded-3xl ">
            {/* Sidebar */}
            <div className="w-full h-full overflow-hidden shadow-lg rounded-3xl flex md:flex-row flex-col">
                <Menu />
                {/* Main content */}
                <div className="md:w-3/4 w-full md:h-full h-[80%] rounded-md overflow-hidden" >
                    <main className=" h-full bg-gray-50 rounded-2xl">{children}</main>

                </div>
            </div>
        </div>
      
    );
}
