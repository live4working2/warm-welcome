import imgBackground from '@/assets/3cf61b4b1ace96df6fd9be4e08cd0cb18f627897.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import { TextRotateIn } from './TextRotateIn';
import { Tilt3D } from './Tilt3D';
import { ImageParallaxHover } from './ImageParallaxHover';
import { HoverImageReveal } from './HoverImageReveal';
import imgProject1 from '@/assets/de6aa0d987c167846fb4cd46e661519ab0ca65e4.png';
import imgProject2 from '@/assets/087956d14579594f0408ff34576b3a5db97ad868.png';
import imgProject3 from '@/assets/b6a72fe5a61efc06449afa65e4bc7753593cfb39.png';
import imgProject4 from '@/assets/c58e083d2a2a5908628618b6f0ebe645ddbbfadb.png';
import imgProject5 from '@/assets/e8621bb6edf28a24c544a77ce0735c0521019d69.png';
import arrowSmall from '@/assets/arrow-small.svg';

interface Project {
    number: string;
    title: string;
    image: string;
    expanded?: boolean;
    description?: string;
    link: string;
}

const projects: Project[] = [
    { number: '01', title: 'Mockup 3d', image: imgProject1, link: '#' },
    { number: '02', title: 'Tricity Branding', image: imgProject2, link: '#' },
    {
        number: '03',
        title: '3d Wheel Top',
        image: imgProject3,
        expanded: true,
        description: 'Ad inani nominati scriptorem tation sale instructiore, natum feugaiti anvel, mundi omnes consetetur ex, nibh has.',
        link: '#',
    },
    { number: '04', title: 'Holographic airpod', image: imgProject4, link: '#' },
    { number: '05', title: 'Nature branding', image: imgProject5, link: '#' },
];

function CollapsedCard({ project }: { project: Project }) {
    return (
        <HoverImageReveal imageUrl={project.image} imageWidth={320} imageHeight={220}>
            <Tilt3D max={6} perspective={1200}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between backdrop-blur-md bg-white/5 border border-white/15 rounded-[40px] md:rounded-[100px] lg:rounded-[200px] p-6 sm:p-8 md:pl-16 lg:pl-24 md:pr-8 w-full overflow-hidden gap-4 sm:gap-6">
                    {/* Left: Number + Title */}
                    <div className="flex items-center">
                        <span className="font-['Teko'] text-2xl md:text-4xl font-normal text-white">
                            {project.number}
                        </span>
                        <a
                            href={project.link}
                            className="font-['Teko'] text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-medium leading-tight text-white uppercase no-underline ml-4 md:ml-8 lg:ml-14 whitespace-nowrap"
                        >
                            {project.title}
                        </a>
                    </div>

                    {/* Right: Thumbnail */}
                    <div className="hidden md:block w-[200px] lg:w-[316px] h-[100px] lg:h-[157px] rounded-full overflow-hidden shrink-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[168%] object-cover -mt-[34%]"
                        />
                    </div>
                </div>
            </Tilt3D>
        </HoverImageReveal>
    );
}

function ExpandedCard({ project }: { project: Project }) {
    return (
        <Tilt3D max={4} perspective={1500}>
            <div className="bg-[#FF6B35] border border-white/15 rounded-[30px] md:rounded-[50px] lg:rounded-[80px] w-full overflow-hidden relative min-h-[300px] md:min-h-[400px] lg:min-h-[485px]">
                {/* Left content */}
                <div className="p-8 md:p-12 lg:absolute lg:left-[101px] lg:top-[96px] lg:p-0 lg:max-w-[55%]">
                    <span className="font-['Teko'] text-2xl md:text-4xl font-normal text-[#121212]">
                        {project.number}
                    </span>

                    <div className="mt-2 md:ml-8 lg:ml-16">
                        <a
                            href={project.link}
                            className="font-['Teko'] text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-medium leading-tight text-[#121212] uppercase no-underline block"
                        >
                            {project.title}
                        </a>

                        <p className="font-['Kanit'] text-base lg:text-lg font-light leading-relaxed text-[#121212] mt-4 lg:mt-6 max-w-[550px]">
                            {project.description}
                        </p>

                        {/* View Project Details button */}
                        <a href={project.link} className="inline-flex items-center mt-6 lg:mt-10 no-underline">
                            <div className="flex items-center justify-center h-10 lg:h-12 bg-[#121212] rounded-full px-6 lg:px-8">
                                <span className="font-['Kanit'] text-xs lg:text-sm font-medium text-white whitespace-nowrap">
                                    View Project Details
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#121212] rounded-full -ml-px">
                                <img src={arrowSmall} alt="" className="w-3.5 h-3.5 lg:w-4 lg:h-4 invert" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right: Large image */}
                <ImageParallaxHover className="hidden md:flex absolute right-4 lg:right-8 top-4 lg:top-8 w-[40%] lg:w-[473px] h-[calc(100%-32px)] lg:h-[415px] rounded-[25px] lg:rounded-[50px] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </ImageParallaxHover>
            </div>
        </Tilt3D>
    );
}

export function Portfolio() {
    return (
        <section className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
            {/* Dark wavy background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img src={imgBackground} alt="" className="absolute left-0 w-full h-[113%] -top-[6%]" aria-hidden="true" />
            </div>

            <div className="relative px-5 md:px-10 lg:px-16 max-w-[1480px] mx-auto py-20 md:py-28 lg:py-40">
                {/* Header */}
                <div className="mb-16 md:mb-20 lg:mb-32 max-w-[987px] mx-auto lg:mx-0 lg:ml-[10%] xl:ml-[246px]">
                    <TextRotateIn axis="y" delay={100}>
                        <p className="font-['Kanit'] text-sm md:text-base font-normal tracking-[1.6px] text-white uppercase mb-8 lg:mb-11">
                            EXCLUSIVE PROJECTS
                        </p>
                    </TextRotateIn>

                    <ScrollTextReveal
                        lines={['Checkout our best & exclusive', 'projects from portfolio']}
                        style={{
                            fontFamily: "'Teko', sans-serif",
                            fontSize: 'clamp(36px, 5vw, 84px)',
                            fontWeight: 600,
                            lineHeight: '0.91',
                            color: 'white',
                            textTransform: 'uppercase',
                        }}
                    />
                </div>

                {/* Project cards */}
                <div className="flex flex-col gap-8 md:gap-12">
                    {projects.map((project, i) => (
                        <div key={i}>
                            {project.expanded ? (
                                <ExpandedCard project={project} />
                            ) : (
                                <CollapsedCard project={project} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
