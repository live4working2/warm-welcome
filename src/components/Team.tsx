import imgAshley from '@/assets/5e869dff2c3f715d14141583ea4f3154100d1add.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import { TextRotateIn } from './TextRotateIn';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';
import { ImageParallaxHover } from './ImageParallaxHover';
import imgGarrison from '@/assets/e5d26388c2ffd1d3a2cf7f6e3bcdaace2739d625.png';
import imgJordan from '@/assets/51ccd9a0fde48c99f36ff5ff99f3116a35096e90.png';
import imgLeonerdo from '@/assets/081e9026626eab0e83b3e2587040daa3c0fe3839.png';
import imgErik from '@/assets/9e9d0de76358c0cee905246d1375cbd21b288b87.png';
import imgScarlet from '@/assets/73b7684f06055921d5861490b200889d25ea357d.png';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: 'Ashley Raily Jonson', role: 'Business Consultant', image: imgAshley },
    { name: 'Garrison Gardner', role: 'Business Consultant', image: imgGarrison },
    { name: 'Jordan Alexander', role: 'Business Consultant', image: imgJordan },
    { name: 'Leonerdo Brandon', role: 'Business Consultant', image: imgLeonerdo },
    { name: 'Erik R Stocklin', role: 'Business Consultant', image: imgErik },
    { name: 'Scarlet Elizabeth', role: 'Business Consultant', image: imgScarlet },
];

function TeamCard({ member }: { member: TeamMember }) {
    return (
        <Tilt3D max={8} perspective={1200}>
            <div className="bg-white overflow-hidden w-full">
                {/* Portrait photo */}
                <ImageParallaxHover className="w-full aspect-[3/4]">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                </ImageParallaxHover>

                {/* Name and role */}
                <div className="pt-6 lg:pt-10 text-center pb-4">
                    <p className="font-['Teko'] text-xl md:text-2xl lg:text-[32px] font-medium leading-tight text-[#121212] uppercase m-0">
                        {member.name}
                    </p>
                    <p className="font-['Kanit'] text-sm md:text-base lg:text-lg font-light text-[#555555] mt-3 lg:mt-4 m-0">
                        {member.role}
                    </p>
                </div>
            </div>
        </Tilt3D>
    );
}

export function Team() {
    return (
        <section className="bg-[#F2EDEA] max-w-[1920px] mx-auto overflow-hidden relative">
            <div className="px-5 md:px-10 lg:px-16 max-w-[1594px] mx-auto py-20 md:py-28 lg:py-36">
                {/* Header */}
                <div className="mb-12 md:mb-16 lg:mb-24 max-w-[832px] mx-auto lg:mx-0 lg:ml-[20%] xl:ml-[381px]">
                    <TextRotateIn axis="y" delay={100}>
                        <p className="font-['Kanit'] text-sm md:text-base font-normal tracking-[1.6px] text-[#121212] uppercase mb-8 lg:mb-11">
                            OUR TEAM
                        </p>
                    </TextRotateIn>

                    <ScrollTextReveal
                        lines={['MEET OUR incredible Team', 'of great minds']}
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

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
                    {teamMembers.map((member, i) => (
                        <div
                            key={member.name}
                            className={i % 2 === 1 ? 'lg:mt-20 xl:mt-[150px]' : ''}
                        >
                            <ScrollReveal delay={i * 100}>
                                <TeamCard member={member} />
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
