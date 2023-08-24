import React from "react";
import { Twitter, GitHub, Linkedin } from "react-feather";

const img =
    "https://static.wixstatic.com/media/2e2a49_bd3a1599bc1b4265a01b2754b99b8536~mv2_d_5760_3840_s_4_2.jpeg/v1/crop/x_2703,y_43,w_2199,h_2205/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_230407429.jpeg";

const Card = () => {
    return (
        <div className="shadow-lg bg-stone-300 h-96 mx-4 flex gap-4 flex-col items-center pt-8">
            <img className="w-32 h-32 rounded-full" src={img} alt="Your Photo" />
            <div className="text-2xl text-center text-gray-600">
                <h1>HRITHIK</h1>
                <h1 className="pb-4 border-solid border-0 border-b-2 border-blue-500">NAHA</h1>
            </div>
            <div className="flex gap-4">
                <button className="bg-blue-500 px-6 py-1 rounded-full text-white">Resume</button>
                <button className="outline px-6 py-1 rounded-full text-gray-600">Projects</button>
            </div>
            <div className="bg-white w-full p-3 flex gap-4 justify-center">
                <Twitter stroke-width="1.5" />
                <GitHub stroke-width="1.5" />
                <Linkedin stroke-width="1.5" />
            </div>
        </div>
    );
};

export default Card;
