import imgImage from '@/assets/874cc617ec91a2ef302c9fd9b0d332441cd98007.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import imgImage1 from '@/assets/2b6aaab643fbe3ff960e05786c24160fbf48d699.png';
import imgWhatsApp from '@/assets/0c5395206800f3e2b5e690641a292b063a89391e2.png';
import arrowOrange from '@/assets/arrow-orange-large.svg';
import arrowDiagonal from '@/assets/arrow-diagonal.svg';
import arrowSmall from '@/assets/arrow-small.svg';
import { MagneticButton } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { TextRotateIn } from './TextRotateIn';
import { TextFadeIn } from './TextFadeIn';
import { SpotlightButton } from './SpotlightButton';

export function AboutCompany() {
    return (
        <section className="relative w-full overflow-hidden bg-white max-w-[1920px] mx-auto">
            <div className="relative px-5 md:px-10 lg:px-16 xl:px-[200px] max-w-[1920px] mx-auto">
                {/* Main content area */}
                <div className="flex flex-col lg:flex-row pt-20 md:pt-28 lg:pt-40 pb-10">
                    {/* Left column - image + years counter */}
                    <div className="relative shrink-0 w-full lg:w-[300px] xl:w-[376px] lg:border-r border-[#D5D5D5] mb-12 lg:mb-0 lg:pr-8">
                        {/* Office photo */}
                        <div className="w-full max-w-[309px] aspect-[309/353] rounded-3xl overflow-hidden">
                            <img
                                src={imgImage}
                                alt="Office"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Years Experience counter */}
                        <div className="border-t border-[#D5D5D5] mt-12 lg:mt-16 pt-6 lg:pt-8 pl-2 lg:pl-5">
                            <div className="flex items-end gap-3">
                                <span className="font-['Teko'] text-[clamp(80px,12vw,180px)] font-normal leading-[0.5] tracking-tighter text-[#FF6B35]">
                                    <AnimatedCounter value={15} />
                                </span>
                                <span className="font-['Teko'] text-4xl lg:text-[58px] font-normal leading-none tracking-tighter text-[#1A1A1A] mb-8 lg:mb-24">
                                    +
                                </span>
                                <p className="font-['Kanit'] text-xl lg:text-[28px] font-medium leading-tight tracking-tight text-[#121212]">
                                    Years{' '}
                                    <span className="text-[#FF6B35]">Experience</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="relative flex-1 lg:ml-8 xl:ml-16 max-w-[1083px]">
                        {/* Top row: heading + arrow decoration */}
                        <div className="relative mb-0">
                            <TextRotateIn axis="y" delay={100}>
                                <p className="font-['Kanit'] text-sm md:text-base font-normal tracking-[1.6px] text-[#4B4B4B] uppercase mb-6">
                                    ABOUT COMPANY
                                </p>
                            </TextRotateIn>

                            <div>
                                <ScrollTextReveal
                                    lines={['Building relationship', 'with our clients through', 'INNOVATIVE SOLUTIONS']}
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: 'clamp(36px, 5vw, 84px)',
                                        fontWeight: 600,
                                        lineHeight: '0.91',
                                        color: '#121212',
                                        textTransform: 'uppercase',
                                    }}
                                />
                            </div>

                            {/* Large orange arrow decoration */}
                            <div className="absolute top-0 right-0 w-20 h-20 lg:w-[115px] lg:h-[115px] hidden md:block">
                                <img src={arrowOrange} alt="" aria-hidden="true" className="w-full h-full absolute top-0 left-0" />
                                <img src={arrowDiagonal} alt="" aria-hidden="true" className="w-full h-full absolute top-2 left-2" />
                            </div>
                        </div>

                        {/* Bottom row: text + second image */}
                        <div className="relative flex flex-col md:flex-row mt-8 lg:mt-10 gap-8 lg:gap-16">
                            {/* Body text + CTA button */}
                            <div className="flex-1 md:pt-8 lg:pt-12 md:pl-4 lg:pl-[72px]">
                                <TextFadeIn direction="up" delay={200}>
                                    <div className="font-['Kanit'] text-base lg:text-lg font-normal leading-relaxed text-[#5F5F5F] text-justify">
                                        <p className="mb-6">
                                            At GeekPie we have a team of experts with a wide range of specialized skills in web development, mobile apps, and custom AI agents.
                                        </p>
                                        <p className="m-0">
                                            We create intelligent solutions for real estate, finance, education, and more.
                                        </p>
                                    </div>
                                </TextFadeIn>

                                {/* Let's Collaborate button */}
                                <div className="mt-8 lg:mt-12">
                                    <MagneticButton>
                                        <SpotlightButton style={{ borderRadius: '100px' }} color="rgba(255,255,255,0.25)">
                                            <a href="#contact" className="relative inline-flex items-center cursor-pointer no-underline">
                                                <div className="flex items-center justify-center h-12 lg:h-[60px] bg-[#FF6B35] rounded-full px-8 lg:px-12">
                                                    <span className="font-['Inter'] text-sm font-medium text-[#121212] whitespace-nowrap">
                                                        Let's Collaborate
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-center w-12 h-12 lg:w-[60px] lg:h-[60px] bg-[#FF6B35] rounded-full -ml-px">
                                                    <img src={arrowSmall} alt="" className="w-4 h-4" />
                                                </div>
                                            </a>
                                        </SpotlightButton>
                                    </MagneticButton>
                                </div>
                            </div>

                            {/* Second photo */}
                            <div className="w-full max-w-[309px] aspect-[309/353] rounded-3xl overflow-hidden shrink-0">
                                <img src={imgImage1} alt="Team collaboration" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* WhatsApp circular badge */}
                        <div className="absolute -right-4 -top-16 lg:-top-24 w-32 h-32 lg:w-[200px] lg:h-[200px] hidden lg:block">
                            <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-white">
                                <img
                                    src={imgWhatsApp}
                                    alt="GeekPie Web and App Development Agency"
                                    className="w-3/4 h-3/4 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
