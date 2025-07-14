import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">Meridian</span>
                <span className="ml-2 text-sm font-medium opacity-80">
                  Consulting
                </span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Professional SEO services and AI integration consulting to help 
                businesses grow smarter and rank higher in today's digital landscape.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:hello@meridianconsulting.com"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+1555123456"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Local SEO
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Organic SEO
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-foreground transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="opacity-20" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-primary-foreground/60">
          <p>© {currentYear} Meridian Consulting. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;