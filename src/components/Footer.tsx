import imgLogo from '@/assets/7f84654afce9a0d76d2f3d7f900f8636f7fed4ec.svg';
import { TextSlideIn } from './TextSlideIn';

function TickerBand() {
    return (
        <div className="w-full overflow-hidden relative py-8 md:py-12 lg:py-16" style={{ height: 'clamp(120px, 14vw, 297px)' }}>
            <div
                className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap"
                style={{ animation: 'footerTicker 20s linear infinite' }}
            >
                {[0, 1, 2, 3].map((i) => (
                    <span
                        key={i}
                        className="font-['Teko'] font-semibold uppercase tracking-wide inline-block mr-8 lg:mr-12"
                        style={{ fontSize: 'clamp(60px, 10vw, 150px)', lineHeight: 1 }}
                    >
                        <span style={{ color: '#0C0C0C', WebkitTextStroke: '1px #FF6B35' }}>
                            Call for project{' '}
                        </span>
                        <span className="text-white tracking-wider">+44.093.99</span>
                    </span>
                ))}
            </div>
            <style>{`
                @keyframes footerTicker {
                    0% { transform: translateY(-50%) translateX(0); }
                    100% { transform: translateY(-50%) translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

function SocialLink({ name }: { name: string }) {
    return (
        <a href="#" className="flex items-center gap-3 no-underline">
            <div className="w-4 h-4 lg:w-[22px] lg:h-[22px] rounded-full bg-white" />
            <span className="font-['Kanit'] text-sm lg:text-base font-light text-white">
                {name}
            </span>
        </a>
    );
}

export function Footer() {
    return (
        <footer className="bg-[#0C0C0C] max-w-[1920px] mx-auto overflow-hidden">
            {/* Ticker band */}
            <TickerBand />

            {/* Main footer content */}
            <div className="border-t border-b border-[#3C3C3C] px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row py-12 md:py-16 lg:py-20 gap-8 md:gap-6 lg:gap-10">
                    {/* Logo column */}
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-[189px] lg:h-[189px] shrink-0 md:border-r border-[#3C3C3C] md:pr-6 lg:pr-10 flex items-center">
                        <img src={imgLogo} alt="GeekPie" className="w-full h-full" />
                    </div>

                    {/* Opening hours */}
                    <div className="shrink-0">
                        <TextSlideIn direction="up" delay={0}>
                            <p className="font-['Kanit'] text-sm lg:text-base font-semibold tracking-[3px] text-[#5F5F5F] m-0">
                                OPENING HOURS
                            </p>
                        </TextSlideIn>
                        <p className="font-['Kanit'] text-sm lg:text-base font-normal text-white mt-2 leading-7">
                            Sunday – Closed
                        </p>
                        <p className="font-['Kanit'] text-sm lg:text-base font-normal text-white m-0 leading-7">
                            Mon – Fri 9AM – 6PM
                        </p>
                        <a href="#" className="font-['Kanit'] text-xs lg:text-sm font-normal text-white/50 no-underline block mt-1">
                            Appointments Recommended
                        </a>
                    </div>

                    {/* Studio address */}
                    <div className="shrink-0">
                        <TextSlideIn direction="up" delay={100}>
                            <p className="font-['Kanit'] text-sm lg:text-base font-semibold tracking-[3px] text-[#5F5F5F] m-0">
                                STUDIO ADDRESS
                            </p>
                        </TextSlideIn>
                        <p className="font-['Kanit'] text-sm lg:text-base font-normal text-white mt-2 leading-7">
                            213 Marina Street, Los Angeles
                            <br />
                            USA, 665432
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="flex-1">
                        <TextSlideIn direction="up" delay={200}>
                            <h6 className="font-['Teko'] text-lg lg:text-2xl font-semibold text-white text-center uppercase mt-4 lg:mt-8">
                                SIGN UP FOR ALL THE LATEST
                                <br />
                                NEWS AND OFFERS
                            </h6>
                        </TextSlideIn>

                        <div className="relative mt-4 lg:mt-6 max-w-[350px] mx-auto">
                            <div className="bg-white/5 border border-white/15 rounded-full h-12 lg:h-14 relative overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-transparent border-none outline-none font-['Kanit'] text-sm font-light text-white px-5 lg:px-6 h-full w-full box-border"
                                />
                            </div>
                            <button className="absolute right-1 top-1 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FF6B35] border-none cursor-pointer flex items-center justify-center">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M1 8H16M16 8L9 1M16 8L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 py-6 lg:py-8">
                    <p className="font-['Kanit'] text-sm lg:text-base font-normal text-white m-0 shrink-0">
                        © <span className="font-bold">GeekPie</span> Agency 2026
                    </p>

                    <div className="flex items-center flex-wrap gap-4 md:gap-6 lg:gap-10 xl:gap-14 sm:ml-8 lg:ml-12">
                        <SocialLink name="Facebook" />
                        <SocialLink name="Instagram" />
                        <SocialLink name="Linked" />
                        <SocialLink name="Pinterest" />
                        <SocialLink name="YouTube" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
