import React from "react";
import { Globe } from "react-feather";

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4 text-center">
            <p className="text-gray-600">© Hrithik Naha {new Date().getFullYear()}</p>
            <div className="flex items-center justify-center gap-2">
                <Globe size={16} color="gray" />
                <p className="text-gray-600">Earth</p>
            </div>
        </footer>
    );
};

export default Footer;
