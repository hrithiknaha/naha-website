import React from "react";
import Card from "../components/Card";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="pt-4">
                <Card />
                <div className="m-4">
                    <p className="text-4xl font-bold pt-8 text-gray-600">Hello</p>
                    <p className="text-lg font-semibold pt-4 text-gray-600">Here's who I am & what I do</p>
                    <p className="pt-4">
                        I'm a coding wizard with 3 years under my belt as a senior software sorcerer. Armed with a BTech
                        spellbook, I dabble in the tongues of three languages - human and code alike. When I'm not
                        enchanting pixels, I'm a console conjurer and a multitasking athlete: cricket, football, and
                        swimming. My other obsession? Reading. My mission? Organizing life and my desk, one pixel and
                        paper at a time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
