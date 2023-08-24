import { ArrowRight } from "react-feather";

const experiences = [
    { job_title: "Senior Software Engineer", company: "Apisero", time: "Feb, 2022 - Present" },
    { job_title: "Programmer Analyst", company: "Cognizant", time: "Aug, 2021 - Aug, 2022" },
    { job_title: "Programmer Analyst Trainee", company: "Cognizant", time: "Aug, 2020 - Aug, 2021" },
];

const Experiences = () => {
    return (
        <div className="py-4 flex flex-wrap gap-8">
            {experiences.map((exp) => (
                <div className="w-full">
                    <p>{exp.job_title}</p>
                    <div className="flex justify-between w-full">
                        <p className="font-semibold">{exp.company}</p>
                        <p className="flex gap-4">
                            <ArrowRight />
                            <span>{exp.time}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experiences;
