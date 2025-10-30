import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Consultation Request Received!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      description: ""
    });
  };

  return (
    <section 
      id="contact"
      className="relative bg-secondary py-24 px-4 overflow-hidden"
    >
      {/* Gold gradient edge effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)"
        }}
      />

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Let's Design Your Dream Space
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            Share your vision with us and start your architectural journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div>
            <Input
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
              required
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
              required
            />
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
              required
            />
          </div>

          <div>
            <Textarea
              placeholder="Project Description (Optional)"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 min-h-32 text-lg focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-secondary-foreground hover:text-secondary border-2 border-transparent hover:border-primary transition-all duration-300 text-lg py-6 shadow-gold"
          >
            Book My Free Consultation
          </Button>

          <p className="text-center text-sm text-secondary-foreground/60 mt-4">
            We respect your privacy. Your information will only be used for project inquiries.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
