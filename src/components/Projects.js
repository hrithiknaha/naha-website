import { ArrowRight } from "react-feather";

const projects = [
    {
        title: "Current Archive",
        stack: "MERN",
        description:
            "Dive into my digital den of entertainment wizardry! 🎬📺 I've conjured up a movie and TV series tracker where you can corral your favorites, rate episodes like a true critic, and pop some popcorn for those movie marathons. Then, behold the magic on the expansive stats page where your binge-worthy obsessions are showcased in all their glory! 🍿🧙‍♂️",
    },
    {
        title: "Future Archive",
        stack: "MERN",
        description:
            "Unleash your inner bookworm with my digital realm for literary explorers! 📚🌟 Behold a magical book website where you can tame your to-be-read list, bestow stars on chapters, and unravel the mysteries of plots. And when your eyes tire from devouring pages, venture into the grand repository of stats where your reading adventures are celebrated in all their glory! 📖🔮",
    },
];

const Projects = () => {
    return (
        <div className="py-4 flex flex-wrap gap-8">
            {projects.map((proj) => (
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <p>{proj.title}</p>
                        <p>{proj.stack}</p>
                    </div>
                    <p className="pt-1 flex gap-4">{proj.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
