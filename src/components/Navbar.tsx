import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-4">
            <div className="font-bold text-xl">FreeCircle</div>
            <button className="text-black">
                <div className="w-6 h-6 flex flex-col justify-between">
                    <span className="block h-[2px] bg-black"></span>
                    <span className="block h-[2px] bg-black"></span>
                    <span className="block h-[2px] bg-black"></span>
                </div>
            </button>
        </nav>
    );
};

export default Navbar;
