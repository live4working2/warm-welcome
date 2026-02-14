import { imgGroup, imgGroup1 } from '@/imports/svg-o2a0p';
import { ScrollTextReveal } from './ScrollTextReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { TextRotateIn } from './TextRotateIn';
import { TextFadeIn } from './TextFadeIn';
import { ScrollReveal } from './ScrollReveal';
import { DirectionAwareHover } from './DirectionAwareHover';

const stats = [
    { number: '500', suffix: '+', label: 'Active users', description: 'Leading businesses trust GeekPie' },
    { number: '99', suffix: '%', label: 'Client satisfaction', description: 'Exceptional service quality' },
    { number: '50', suffix: '+', label: 'Expert Team', description: 'Skilled professionals' },
    { number: '200', suffix: '+', label: 'Project Completed', description: 'Successful deployments' },
];

function DecorativeCircle() {
    return (
        <div className="relative w-[120px] h-[120px] lg:w-[159px] lg:h-[158px] mt-0 ml-8 lg:ml-16 hidden md:block">
            <div className="absolute top-0 left-[30px] lg:left-[50px] w-[100px] lg:w-[136px] h-[100px] lg:h-[137px]">
                <img src={imgGroup1} alt="" className="w-full h-full" aria-hidden="true" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <img src={imgGroup} alt="" className="w-full h-full" aria-hidden="true" />
            </div>
        </div>
    );
}

function StatCell({ stat }: { stat: typeof stats[0] }) {
    return (
        <div className="border-r border-b border-[#D5D5D5] p-8 md:p-10 lg:p-14 box-border">
            <div className="mb-6 lg:mb-8">
                <span className="font-['Teko'] text-5xl md:text-6xl lg:text-[80px] font-semibold leading-none text-[#FF6B35]">
                    <AnimatedCounter value={parseInt(stat.number)} />
                </span>
                <span className="font-['Teko'] text-5xl md:text-6xl lg:text-[80px] font-semibold leading-none text-[#121212]">
                    {stat.suffix}
                </span>
            </div>
            <p className="font-['Kanit'] text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight text-[#121212] m-0">
                {stat.label}
            </p>
            <p className="font-['Kanit'] text-sm md:text-base lg:text-lg font-normal leading-relaxed text-[#4A4A4A] mt-3">
                {stat.description}
            </p>
        </div>
    );
}

export function About() {
    return (
        <section id="about" className="relative w-full max-w-[1920px] mx-auto bg-white overflow-hidden">
            <div className="relative flex flex-col lg:flex-row px-5 md:px-10 lg:px-16 xl:px-[238px] max-w-[1920px] mx-auto py-20 md:py-28 lg:py-40">
                {/* Left side */}
                <div className="shrink-0 w-full lg:w-[400px] xl:w-[580px] mb-12 lg:mb-0">
                    <TextRotateIn axis="y" delay={100}>
                        <p className="font-['Kanit'] text-sm md:text-base font-normal tracking-[1.6px] text-[#4B4B4B] uppercase mb-8 lg:mb-[52px]">
                            WHY CHOOSE US
                        </p>
                    </TextRotateIn>

                    <div>
                        <ScrollTextReveal
                            lines={['Why you should', 'choose GEEKPIE']}
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontSize: 'clamp(42px, 5vw, 84px)',
                                fontWeight: 600,
                                lineHeight: '0.91',
                                color: '#121212',
                                textTransform: 'uppercase',
                            }}
                        />
                    </div>

                    <TextFadeIn direction="up" delay={200}>
                        <div className="font-['Kanit'] text-base lg:text-lg font-light leading-relaxed text-[#5F5F5F] mt-8 lg:mt-[52px] max-w-[551px]">
                            <p className="m-0">
                                At GeekPie we have a team of experts with cutting-edge solutions for your business.
                            </p>
                        </div>
                    </TextFadeIn>

                    <div className="mt-12 lg:mt-24">
                        <DecorativeCircle />
                    </div>
                </div>

                {/* Right side - 2x2 stats grid */}
                <div className="lg:ml-10 xl:ml-[101px] border border-[#D5D5D5] grid grid-cols-1 sm:grid-cols-2 flex-1">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 150}>
                            <DirectionAwareHover
                                overlay={
                                    <span className="font-['Teko'] text-2xl lg:text-[28px] font-medium text-white uppercase">
                                        {stat.label}
                                    </span>
                                }
                            >
                                <StatCell stat={stat} />
                            </DirectionAwareHover>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
