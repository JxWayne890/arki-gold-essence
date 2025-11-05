import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-luxury-home.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{
      background: "var(--gradient-hero)"
    }} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="animate-fade-in-up space-y-8">
          {/* Logo */}
          <img src="https://arkidesignstudio.com/wp-content/uploads/2025/03/Diseno-sin-titulo-2.png" alt="ARKI Design Studio" className="mx-auto h-24 w-auto object-contain md:h-32" />

          {/* Headline */}
          <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Designing Spaces.<br />Empowering Ideas.
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl">Turning your dreams into beautifully crafted realities.</p>

          {/* CTA Button */}
          <Button onClick={scrollToContact} size="lg" className="group bg-primary text-primary-foreground hover:bg-background hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300 text-lg px-8 py-6 shadow-gold">
            Get a Free Consultation
          </Button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;