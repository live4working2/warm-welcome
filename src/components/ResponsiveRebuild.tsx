import { Hero as Background } from "./Hero";
import { About as AboutSection } from "./About";
import { Portfolio as PortfolioSection } from "./Portfolio";
import { Team as TeamSection } from "./Team";
import { Footer as FooterSection } from "./Footer";
import { Testimonial as TestimonialSection } from "./Testimonial";
import { Portfolio2 as Portfolio2Section } from "./Portfolio2";
import { Header } from "./Header";
import { AboutCompany as AboutCompanySection } from "./AboutCompany";
import { ServiceMarquee } from "./ServiceMarquee";

export default function ResponsiveRebuild() {
  return (
    <div className="bg-white min-h-screen w-full relative overflow-x-hidden" data-name="Responsive Rebuild">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <Background />
      </section>

      {/* About Company Section */}
      <section className="relative w-full">
        <AboutCompanySection />
      </section>

      {/* Service Marquee */}
      <section className="relative w-full">
        <ServiceMarquee />
      </section>

      {/* Stats / Why Choose Us */}
      <section className="relative w-full">
        <AboutSection />
      </section>

      {/* Portfolio */}
      <section className="relative w-full">
        <PortfolioSection />
      </section>

      {/* AI Agent Case Studies */}
      <section className="relative w-full">
        <Portfolio2Section />
      </section>

      {/* Team */}
      <section className="relative w-full">
        <TeamSection />
      </section>

      {/* Testimonial */}
      <section className="relative w-full">
        <TestimonialSection />
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
