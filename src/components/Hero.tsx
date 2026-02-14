import bgRadial from '@/assets/3acbccb114277a7b6493955adfa72065eb7b6e0d.png';
import playVideoSvg from '@/assets/play-video.svg';
import arrowIcon from '@/assets/arrow-white.svg';
import { MagneticButton } from './MagneticButton';
import { TextRotateIn } from './TextRotateIn';
import { SpotlightButton } from './SpotlightButton';
import { HoverParallax } from './HoverParallax';

export function Hero() {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#FBF9ED] min-h-[70vh] md:min-h-[80vh] lg:min-h-[900px] xl:min-h-[1012px]"
            data-name="Background"
        >
            {/* Radial ray background */}
            <img
                src={bgRadial}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                aria-hidden="true"
            />
            {/* White overlay */}
            <div
                className="absolute inset-0 pointer-events-none bg-white/90"
                aria-hidden="true"
            />

            {/* Content container */}
            <HoverParallax intensity={0.03}>
                <div className="relative h-full px-5 md:px-10 lg:px-16 max-w-[1920px] mx-auto min-h-[inherit]">
                    {/* Mobile: stacked layout, Desktop: side by side */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0 pt-36 md:pt-44 lg:pt-[250px] pb-16 lg:pb-0">
                        {/* Left text block */}
                        <div className="w-full lg:max-w-[679px] z-10">
                            {/* Subtitle */}
                            <TextRotateIn axis="y" delay={200}>
                                <p className="uppercase font-['Kanit'] text-sm md:text-base lg:text-xl font-normal tracking-[3px] text-[#363636] mb-6 md:mb-8 lg:mb-9 pl-1">
                                    Hi, WE ARE GEEKPIE
                                </p>
                            </TextRotateIn>

                            {/* Main heading */}
                            <TextRotateIn axis="x" delay={500} duration={1000}>
                                <h1 className="font-['Teko'] font-bold uppercase text-[#1A1A1A] text-[clamp(48px,10vw,150px)] leading-[1.02] m-0 p-0">
                                    WEB &amp; APP
                                    <br />
                                    DEVELOPMENT
                                    <br />
                                    <span className="text-[#FF6B35]">AGENCY</span>
                                </h1>
                            </TextRotateIn>

                            {/* CTA Arrow Button */}
                            <div className="mt-5">
                                <MagneticButton>
                                    <SpotlightButton
                                        style={{ borderRadius: '100px' }}
                                        color="rgba(255,255,255,0.25)"
                                    >
                                        <a
                                            href="#about"
                                            className="flex items-center justify-center rounded-full bg-[#FF6B35] cursor-pointer overflow-hidden w-16 h-16 md:w-20 md:h-20 lg:w-[86px] lg:h-[86px]"
                                            aria-label="Learn more"
                                        >
                                            <img
                                                src={arrowIcon}
                                                alt=""
                                                className="w-5 h-5 md:w-[23px] md:h-[22px]"
                                            />
                                        </a>
                                    </SpotlightButton>
                                </MagneticButton>
                            </div>
                        </div>

                        {/* Right - Play Video SVG illustration */}
                        <div className="hidden lg:block lg:flex-1 lg:max-w-[916px] lg:ml-auto">
                            <img
                                src={playVideoSvg}
                                alt="Web and app development illustration"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </HoverParallax>
        </section>
    );
}
