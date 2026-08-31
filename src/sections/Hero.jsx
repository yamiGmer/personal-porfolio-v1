import { Button } from '@/components/Button'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Laravel",
  "PHP",
  "Python",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "RESTful APIs",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git-GitHub",
  "FastAPI",
  "Azure",
];

export const Hero = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/SANTIAGO-CV.pdf";
        link.download = "SANTIAGO-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img 
            src="/hero-bg2.webp" 
            alt="Hero Image" 
            className="w-full h-full object-cover opacity-40" />
            {/* Adds blur effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to background"/>
        </div>
        
        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_,i) => (
                <div 
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() *20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                }}/>
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
 
            {/* Left Column - Text Content*/}
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Engineer + Full Stack Developer

                    </span>
                </div>
            
                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Turning <span className="text-primary glow-text">ideas</span>
                        <br />
                        into things that
                        <br />
                        <span className="font-serif italic font-normal text-white">
                            work
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Hi, I'm Frederick Santiago — a full-stack developer who enjoys turning
                        ideas into practical applications with Laravel, React, JavaScript, and Python.
                    </p>
                </div>              
                {/* CTA Button */}
                <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                    <Button size="lg" onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}>Contact Me <ArrowRight className='w-5 h-5'/>
                    </Button>
                    <AnimatedBorderButton onClick={() => handleDownloadCV()}>
                        <Download className="h-5 w-5"/>  
                        Download CV
                    </AnimatedBorderButton>
                </div>

                {/* Socials Lniks*/}
                <div className='flex items-center gap-4 animation-fade-in animation-delay-400'>
                    <span className='text-sm text-muted-foreground'>Follow me: </span>
                    {[
                        {icon: BsGithub, href: "https://github.com/yamiGmer"},
                        // {icon: BsYoutube, href: ""},
                        {icon: BsLinkedin, href: "https://www.linkedin.com/in/john-frederick-santiago-5b0a09323"}
                    ].map((social,idx) => (
                        <a 
                        key={idx} 
                        href={social.href}
                        className='rounded-4xl glass hover:bg-primary/50transition-all duration-300'
                        >{<social.icon className='h-5 w-5'/>}</a>
                    ))}
                </div>
            </div>
            {/* Right Column - ProfilePicture */}
            <div className='relative animate-fade-in animation-delay-300'>
                {/* Profile Image */}
                <div className='relative max-w-md mx-auto'>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                    <div className='relative glass rounded-3xl p-2 glow-border'>
                        <img src="/profile-photo.webp" alt="John Frederick Santiago" className="w-full object-cover rounded-2xl" />
                    </div>

                    {/* Floating Badge */}
                    <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse glow-text'/>
                            <span className='text-sm font-medium'>Available for Work</span>
                        </div>
                    </div>
                    {/* Stats Badge */}
                    <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                        <div className='text-2xl font-bold text-primary'>Fresh</div>
                        <div className='text-xs text-muted-foreground'>Graduate</div>
                    </div>

                </div>
            </div>

            </div>

            {/* Skills Section */}
            <div className='mt-29 animate-fade-in animation-delay-600'>
                <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>

                <div className='relative overflow-hidden'>
                    <div className='flex animate-marquee w-max motion-reduce:animation-none'>
                    {[...skills,...skills].map((skill,idx) => (
                        <div key={idx} className='flex-shrink-0 px-8 py-4'>
                            <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                                {skill}
                            </span>
                        </div>
                    ))}

                    </div>

                </div>
            </div>
        </div>

        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10"
        >
            <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>

     

    </section>
    )
}