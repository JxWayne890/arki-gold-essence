import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/arki_designstudio/?hl=en"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/p/Arki-Design-Studio-61572183101494/"
    },
    {
      name: "TikTok",
      icon: () => (
        <svg 
          viewBox="0 0 24 24" 
          className="h-5 w-5" 
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: "https://www.tiktok.com/@arkidesignstudio"
    }
  ];

  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img 
            src="https://arkidesignstudio.com/wp-content/uploads/2025/03/Diseno-sin-titulo-2.png"
            alt="ARKI Design Studio"
            className="h-16 w-auto object-contain opacity-90"
          />

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 ARKI Design Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
