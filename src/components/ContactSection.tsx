import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [sendingStatus, setSendingStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Required field validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.state
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSendingStatus("Sending...");

      // Build Web3Forms submission data
      const payload = new FormData();
      payload.append("access_key", "2eaa3d59-31d9-40d0-99a6-eea602e6e175");
      payload.append("subject", "New ARKI Consultation Request");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("city", formData.city);
      payload.append("state", formData.state);
      payload.append(
        "message",
        formData.description || "No additional project description provided."
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Consultation Request Received!",
          description: "We’ll contact you within 24 hours to discuss your project.",
        });

        setSendingStatus("Form submitted successfully!");

        // Reset the form UX
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          description: "",
        });

        e.currentTarget.reset();
      } else {
        toast({
          title: "Submission Error",
          description: data.message || "Unable to submit form.",
          variant: "destructive",
        });
        setSendingStatus("Error");
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
      setSendingStatus("Error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-secondary py-24 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Let's Design Your Dream Space
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            Share your vision with us and start your design journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
            required
          />

          <Input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
            required
          />

          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="City *"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
              required
            />

            <Input
              type="text"
              placeholder="State *"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-14 text-lg focus:border-primary"
              required
            />
          </div>

          <Textarea
            placeholder="Project Description (Optional)"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 min-h-32 text-lg focus:border-primary resize-none"
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-secondary-foreground hover:text-secondary border-2 border-transparent hover:border-primary transition-all duration-300 text-lg py-6 shadow-gold"
          >
            Book My Free Consultation
          </Button>

          {sendingStatus && (
            <p className="text-center text-sm text-secondary-foreground/70 mt-2">
              {sendingStatus}
            </p>
          )}

          <p className="text-center text-sm text-secondary-foreground/60 mt-4">
            We respect your privacy. Your information will only be used for
            project inquiries.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
