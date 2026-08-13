import { ArrowUpRight } from "lucide-react";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
        title: "GeoTrace",
        description:
            "A payroll and attendance management system with geofencing, photo verification, automated payroll processing, and Firebase integration.",
        image: "/projects/project1.png",
        tags: ["Laravel", "MySQL", "Firebase", "Tailwind CSS", "Payroll", ],
        link: "#",
        github: "#"
    },
    {
        title: "Tara4a",
        description:
            "A tourism platform for discovering DOT-accredited establishments, featuring interactive maps, geofencing, itinerary planning, and an administrative dashboard.",
        image: "/projects/project2.png",
        tags: ["MERN", "React", "Node.js", "MongoDB", "Google Maps API"],
        link: "#",
        github: "#"
    },
    {
        title: "AI Desktop Assistant",
        description:
            "A personal offline voice assistant built with Python featuring wake-word detection, speech recognition, text-to-speech, and local AI capabilities.",
        image: "/projects/project3.png",
        tags: ["Python", "Whisper", "ONNX", "Piper", "Ollama"],
        link: "#",
        github: "#"
    },
    {
    title: "AirSentinel",
    description:
        "An IoT-based air quality monitoring system developed for a hackathon, using environmental sensors to collect and monitor air quality data in real time.",
    image: "/projects/project4.jpg",
    tags: ["ESP8266", "IoT", "MQ Sensors", "Firebase", "Arduino", "Geofence"],
    link: "#",
    github: "#"
}
];


export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* BG GLOWS */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto maxw-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that {" "}
                        <span className="font-serif italic font-normal text-white">
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                        key={idx} 
                        className="group glass rounded-2xl overflow-hiden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${(idx +1) * 100}ms`}}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                /> 
                                <div 
                                className="absolute inset-0 bg-gradient-to-t from-card via-vard/50 to-transparent opacity-60"
                                />

                                {/* Overlay Links */}

                                {/* <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="h-5 w-5"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <BsGithub className="h-5 w-5"/>
                                    </a>
                                </div> */}
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    {/* <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/> */}
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag,tagIdx) => (
                                    <span 
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50  hover:text-primary transition-all duration-300"
                                    key={tagIdx}
                                    >
                                        {tag}
                                    </span>

                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* View All CTA */}
                {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div> */}
            </div>
        </section>
)
}