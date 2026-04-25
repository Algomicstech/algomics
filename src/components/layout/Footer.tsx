import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import algomicsLogo from "@/assets/algomics-logo.png";

const footerLinks = {
  services: [
    { name: "NGS Analysis", href: "/services/rna-seq-analysis" },
    { name: "Machine Learning", href: "/services/ml-biological-data" },
    { name: "Molecular Docking", href: "/services/molecular-docking" },
    { name: "Multi-omics", href: "/services/multi-omics-integration" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/">
              <img src={algomicsLogo} alt="Algomics" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Turning data into 1% better healthcare through advanced bioinformatics,
              data science, and AI-driven precision health solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/algomics/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:algomics@gmail.com"
                className="p-2 rounded text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone size={14} className="mt-0.5 text-primary" />
                <span>+92 3176364092</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail size={14} className="mt-0.5 text-primary" />
                <span>algomics@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={14} className="mt-0.5 text-primary" />
                <span>Barakahu, Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Algomics. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Turning Data into 1% Better Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
