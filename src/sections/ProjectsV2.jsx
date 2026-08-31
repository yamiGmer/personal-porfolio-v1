import { ArrowUpRight } from "lucide-react";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
        title: "GeoTrace",
        description:
            "A payroll and attendance management system with geofencing, photo verification, automated payroll processing, and Firebase integration.",
        image: "/projects/project1.webp",
        tags: ["Laravel", "MySQL", "Firebase", "Tailwind CSS", "Payroll", ],
        link: "#",
        github: "#"
    },
    {
        title: "Tara4a",
        description:
            "A tourism platform for discovering DOT-accredited establishments, featuring interactive maps, geofencing, itinerary planning, and an administrative dashboard.",
        image: "/projects/project2.webp",
        tags: ["MERN", "React", "Node.js", "MongoDB", "Google Maps API"],
        link: "#",
        github: "#"
    },
    {
        title: "AI Desktop Assistant",
        description:
            "A personal offline voice assistant built with Python featuring wake-word detection, speech recognition, text-to-speech, and local AI capabilities.",
        image: "/projects/project3.webp",
        tags: ["Python", "Whisper", "ONNX", "Piper", "Ollama"],
        link: "#",
        github: "#"
    },
    {
    title: "AirSentinel",
    description:
        "An IoT-based air quality monitoring system developed for a hackathon, using environmental sensors to collect and monitor air quality data in real time.",
    image: "/projects/project4.webp",
    tags: ["ESP8266", "IoT", "MQ Sensors", "Firebase", "Arduino", "Geofence"],
    link: "#",
    github: "#"
}
];
// 4 in a row, when 1 is hovered the others shrink and the chosen gets wider
export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* BG GLOWS */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Works
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that{" "}
                        <span className="font-serif italic font-normal text-white">
                            make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications
                        to innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 md:flex gap-6 md:h-[600px]">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden relative h-[500px] md:h-full flex-1 md:hover:flex-[2] transition-all duration-700 ease-in-out animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                                    absolute inset-0
                                    w-full h-full
                                    object-cover
                                    transition-transform duration-700
                                    group-hover:scale-110
                                "
                            />

                            {/* Overlay */}
                            <div className="
                                absolute inset-0
                                bg-gradient-to-t
                                from-card via-card/50 to-transparent
                                opacity-80
                            " />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6">

                                {/* Title */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="
                                        text-xl md:text-2xl
                                        font-semibold
                                        group-hover:text-primary
                                        transition-colors
                                    ">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Description - hidden until hover */}
                                <div className="
                                    overflow-hidden
                                    max-h-0
                                    opacity-0
                                    translate-y-4
                                    group-hover:max-h-32
                                    group-hover:opacity-100
                                    group-hover:translate-y-0
                                    transition-all duration-500 ease-in-out
                                ">
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags - always visible */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="
                                                px-4 py-1.5
                                                rounded-full
                                                bg-surface
                                                text-xs font-medium
                                                border border-border/50
                                                text-muted-foreground
                                                hover:border-primary/50
                                                hover:text-primary
                                                transition-all duration-300
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};