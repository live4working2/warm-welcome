import imgTestimonial from '@/assets/22a741faaed90f334375c040f3a64c6fe4fff2bf.png';

function StarIcon() {
    return (
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
            <path d="M13 0L16.09 8.26L25 9.27L18.5 15.14L20.18 24.02L13 19.77L5.82 24.02L7.5 15.14L1 9.27L9.91 8.26L13 0Z" fill="#FF6B35" />
        </svg>
    );
}

function QuoteIcon() {
    return (
        <div className="absolute -top-8 md:-top-12 lg:-top-[53px] left-1/2 md:left-auto md:right-0 lg:left-[438px] -translate-x-1/2 md:translate-x-0 w-20 h-20 md:w-24 md:h-24 lg:w-[126px] lg:h-[126px] rounded-full bg-[#121212] flex items-center justify-center z-10">
            <svg className="w-8 h-7 md:w-10 md:h-9 lg:w-[47px] lg:h-[42px]" viewBox="0 0 47 42" fill="none">
                <path d="M0 42V28.17C0 23.52 0.87 19.2 2.6 15.21C4.33 11.22 7.21 7.14 11.24 2.97L19.72 8.82C17.06 11.82 15.11 14.73 13.87 17.55C12.63 20.37 11.95 23.43 11.83 26.73H19.72V42H0ZM26.52 42V28.17C26.52 23.52 27.39 19.2 29.12 15.21C30.85 11.22 33.73 7.14 37.76 2.97L46.24 8.82C43.58 11.82 41.63 14.73 40.39 17.55C39.15 20.37 38.47 23.43 38.35 26.73H46.24V42H26.52Z" fill="white" />
            </svg>
        </div>
    );
}

export function Testimonial() {
    return (
        <section className="bg-[#FF6B35]/75 max-w-[1920px] mx-auto overflow-hidden relative">
            <div className="px-5 md:px-10 lg:px-16 xl:px-[238px] max-w-[1920px] mx-auto py-20 md:py-28 lg:py-36 relative">
                <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20 xl:gap-[102px]">
                    {/* Left - Photo */}
                    <div className="relative shrink-0">
                        <div className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[532px] aspect-[532/649] rounded-2xl lg:rounded-[25px] overflow-hidden mx-auto md:mx-0">
                            <img src={imgTestimonial} alt="Testimonial" className="w-full h-full object-cover" />
                        </div>
                        <QuoteIcon />
                    </div>

                    {/* Right - Content */}
                    <div className="pt-4 md:pt-8 lg:pt-10 max-w-[666px]">
                        <p className="font-['Teko'] text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#121212] uppercase m-0">
                            Johannes Times
                        </p>

                        <p className="font-['Kanit'] text-lg lg:text-[22px] font-normal text-[#010101] mt-1">
                            Chicago
                        </p>

                        <div className="h-[2px] bg-black/15 mt-6 lg:mt-10 w-full" />

                        <p className="font-['Kanit'] text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal italic leading-relaxed text-[#121212] mt-6 lg:mt-10">
                            I saved over 60% using GeekPie for my real estate
                            platform. The AI agent they built transformed client
                            engagement. Highly recommended! Thank you !!!
                        </p>

                        {/* Rating */}
                        <div className="flex items-center mt-8 lg:mt-12 gap-3">
                            <span className="font-['Teko'] text-2xl lg:text-[30px] font-semibold text-[#121212] uppercase">
                                Rating:
                            </span>
                            <div className="flex items-center bg-[#121212] rounded-md px-3 py-1.5 gap-1.5 h-10">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </div>

                        {/* Pagination dots */}
                        <div className="flex gap-3 mt-10 lg:mt-20">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className={`w-[15px] h-[15px] rounded-full flex items-center justify-center ${i === 0 ? 'border border-[#010101]' : ''}`}>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#010101]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
