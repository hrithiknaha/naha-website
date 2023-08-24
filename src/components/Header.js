import React, { useState } from "react";
import { Link } from "react-router-dom";

import { X, Menu } from "react-feather";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex justify-center items-start p-4 bg-stone-300 text-white h-56 fixed">
            <div className="flex items-center">
                <div className="mr-4 flex flex-wrap items-center gap-1">
                    <h1 className="text-xl flex items-center gap-2 text-gray-600 font-bold">
                        <span className="inline-block h-4 w-4 bg-blue-500 "></span>Hrithik Naha
                    </h1>
                    <div className="text-gray-500 hidden">/</div>
                    <h6 className="text-sm text-gray-500">SENIOR SOFTWARE ENGINEER</h6>
                </div>
            </div>
            <div>
                <button className="bg-transparent text-gray-500 rounded px-3 py-1" onClick={openModal}>
                    <Menu />
                </button>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-stone-300 p-6 w-full h-full flex flex-col justify-start">
                        <div onClick={closeModal} className="text-gray-600 text-right h-1/5">
                            <X />
                        </div>
                        <ul className="space-y-2 flex flex-col justify-between items-center h-36">
                            <li>
                                <Link to="/about" className="text-gray-600 font-bold">
                                    ABOUNT ME
                                </Link>
                            </li>
                            <li>
                                <Link to="/resume" className="text-gray-600 font-bold">
                                    RESUME
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-600 font-bold">
                                    PROJECTS
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 font-bold">
                                    CONTACT ME
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
