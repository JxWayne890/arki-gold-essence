import { Home, Compass, ClipboardList } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Home Design",
      description: "Bespoke architectural solutions tailored to your lifestyle"
    },
    {
      icon: Compass,
      title: "Architectural Planning",
      description: "Strategic space planning for optimal functionality"
    },
    {
      icon: ClipboardList,
      title: "Permit & Construction Support",
      description: "Comprehensive guidance from permits to completion"
    }
  ];

  return (
    <section className="bg-background py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Text */}
        <div className="mx-auto max-w-4xl text-center mb-20 animate-fade-in-up">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground">
            Where architectural artistry meets precision.
          </p>
          <p className="mt-6 text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
            At ARKI Design Studio, we craft luxurious, functional spaces 
            that redefine modern living — from concept to completion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
