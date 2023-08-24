import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="px-4 pt-12">
                <p className="text-lg">
                    I'm a coding wizard with 3 years under my belt as a senior software sorcerer. Armed with a BTech
                    spellbook, I dabble in the tongues of three languages - human and code alike. When I'm not
                    enchanting pixels, I'm a console conjurer and a multitasking athlete: cricket, football, and
                    swimming. My other obsession? Reading. My mission? Organizing life and my desk, one pixel and paper
                    at a time.
                </p>
                <p className="text-2xl py-4">
                    <span className="border-b-2 text-black">Email Me!</span>
                </p>

                <div className="pt-8">
                    <h1>WORK EXPERIENCE</h1>
                    <Experiences />
                </div>

                <div className="pt-16">
                    <h1>PROJECTS</h1>
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default Home;
