import imgBackground from '@/assets/3cf61b4b1ace96df6fd9be4e08cd0cb18f627897.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import imgHouse from '@/assets/0e236bba65a1d61d53801f8794b174b8b411d7a2.svg';
import imgInvestment from '@/assets/0d89fad924b80d6925da49237454821c60775df8.svg';
import imgLearning from '@/assets/24e92aa21cc62a8c2fa1c412356504d492001af4.svg';
import { MagneticButton } from './MagneticButton';
import { SpotlightButton } from './SpotlightButton';

interface CaseStudy {
    number: string;
    title: string;
    description: string;
    image: string;
    gradientDirection: 'left' | 'right';
    imagePosition: 'right' | 'left';
}

const caseStudies: CaseStudy[] = [
    {
        number: '01',
        title: 'Real Estate AI Platform',
        description: 'AI-powered property matching and virtual tour system for premium agencies.',
        image: imgHouse,
        gradientDirection: 'right',
        imagePosition: 'right',
    },
    {
        number: '02',
        title: 'Finance Dashboard App',
        description: 'Mobile and web app with AI-driven investment recommendations.',
        image: imgInvestment,
        gradientDirection: 'left',
        imagePosition: 'left',
    },
    {
        number: '03',
        title: 'EdTech Learning Platform',
        description: 'Education platform with AI tutoring and adaptive learning.',
        image: imgLearning,
        gradientDirection: 'right',
        imagePosition: 'right',
    },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
    const gradientBg =
        study.gradientDirection === 'right'
            ? 'linear-gradient(135deg, rgb(45, 45, 45) 0%, rgb(26, 26, 26) 100%)'
            : 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(45, 45, 45) 100%)';

    const isImageLeft = study.imagePosition === 'left';

    return (
        <div
            className="rounded-2xl lg:rounded-[20px] overflow-hidden flex flex-col md:flex-row relative min-h-[300px] md:min-h-[420px]"
            style={{
                backgroundImage: gradientBg,
                flexDirection: isImageLeft ? 'row-reverse' : 'row',
            }}
        >
            {/* Text content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col gap-4 lg:gap-5 min-w-0">
                <p className="font-['Kanit'] text-2xl lg:text-[29px] font-normal text-[#FF6B35] m-0">
                    {study.number}
                </p>

                <h3 className="font-['Teko'] text-4xl md:text-5xl lg:text-6xl xl:text-[76px] font-bold leading-tight text-white m-0">
                    {study.title}
                </h3>

                <p className="font-['Kanit'] text-base lg:text-lg font-normal leading-relaxed text-[#F5F5F5] my-2">
                    {study.description}
                </p>

                <MagneticButton>
                    <SpotlightButton style={{ borderRadius: '8px' }} color="rgba(255,255,255,0.2)">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-[#FF6B35] border-2 border-[#FF6B35] rounded-lg px-6 md:px-8 lg:px-10 py-4 lg:py-5 font-['Kanit'] text-base lg:text-lg font-semibold text-white no-underline cursor-pointer whitespace-nowrap self-start"
                        >
                            View Case Study
                        </a>
                    </SpotlightButton>
                </MagneticButton>
            </div>

            {/* Image area */}
            <div className="hidden md:flex w-full md:w-[40%] lg:w-[500px] shrink-0 items-center justify-center p-4">
                <img
                    src={study.image}
                    alt={study.title}
                    className="w-full max-w-[500px] h-auto object-contain"
                />
            </div>
        </div>
    );
}

export function Portfolio2() {
    return (
        <section className="relative max-w-[1920px] mx-auto overflow-hidden">
            {/* Dark textured background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img src={imgBackground} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="relative px-5 md:px-10 lg:px-16 max-w-[1480px] mx-auto py-20 md:py-28 lg:py-40">
                {/* Header */}
                <div className="mb-16 lg:mb-24 max-w-[987px]">
                    <ScrollTextReveal
                        lines={['Explore our top-performing', 'AI Agent solutions']}
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

                {/* Case study cards */}
                <div className="flex flex-col gap-8 lg:gap-10">
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.number} study={study} />
                    ))}
                </div>
            </div>
        </section>
    );
}
