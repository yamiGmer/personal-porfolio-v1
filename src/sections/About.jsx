import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlights = [
    {   
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building practical web applications across both frontend and backend."
    },
    {
        icon: Rocket,
        title: "Problem Solving",
        description: "Turning ideas and real-world problems into simple, effective solutions."
    },
    {
        icon: User,
        title: "Collaboration",
        description: "Working with others, sharing ideas, and contributing to a positive team environment."
    },
        {
        icon: Lightbulb,
        title: "Continuous Learning",
        description: "Exploring new technologies and continuously improving my skills as a developer."
    },
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me
                            </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future, {" "}
                        <span className="font-serif italic font-normal text-white">
                            one component at a time.
                        </span>
                        
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm an Information Technology graduate with a strong interest in software development and building practical applications. My experience includes working with technologies such as Laravel, React, JavaScript, and the MERN stack, allowing me to work across both frontend and backend development.
                        </p>
                        <p>
                            Throughout my studies and projects, I've built full-stack applications including payroll and attendance systems, tourism platforms, and other data-driven web applications. I've also worked with databases, APIs, cloud services, and deployment tools, giving me experience with different stages of the development process.
                        </p>
                        <p>
                            Outside of web development, I'm interested in Python, automation, AI, and IoT. I enjoy experimenting with new technologies and building projects that challenge me to learn something new. I'm currently looking to grow as a developer and contribute to projects where I can continue developing my technical skills.
                        </p>

                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            " My mission is to build practical, reliable, and user-focused software that solves real-world problems. I strive to continuously improve my skills, explore new technologies, and turn ideas into meaningful applications while growing as a developer and contributing to projects that make a difference. "
                        </p>
                    </div>
                </div>

                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item,idx) => (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx +1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            {<item.icon className="w-6 h-6 text-primary"/>}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
   )
}   