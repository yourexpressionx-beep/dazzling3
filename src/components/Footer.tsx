import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/placements", label: "Placements" },
  { path: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-foreground">Dazzling Academy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's trusted education and career consultancy, helping students unlock their true potential through transparent guidance, ethical practices, and proven results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`footer-link-${link.label.toLowerCase()}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>61, Girish Ghosh Sarani, Hakimpada, Alipurduar, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 98324 40577, +91 92393 49636</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>academydazzling948@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dazzling Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
