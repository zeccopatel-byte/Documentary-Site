import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Films", path: "/films" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled || mobileMenuOpen
            ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="font-sans text-2xl font-bold tracking-tight transition-colors text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1"
            aria-label="Echoes Home"
          >
            ECHOES
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 transition-colors text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-muted shadow-lg"
          >
            <nav className="flex flex-col py-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-6 py-4 text-lg font-sans border-b border-muted/50 last:border-0 hover:bg-muted/30 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-foreground text-background py-16 mt-auto">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-sans text-2xl mb-4">ECHOES</h3>
              <p className="text-background/70 text-sm leading-relaxed max-w-xs">
                A multi-film documentary project exploring the human stories behind the global migrant crisis.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-lg mb-4 text-primary">Explore</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><Link to="/films" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">The Films</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">About the Project</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">Host a Screening</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-lg mb-4 text-primary">Connect</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" aria-label="Visit our Instagram page">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" aria-label="Visit our Twitter page">Twitter</a></li>
                <li><a href="mailto:info@echoesfilm.org" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" aria-label="Email us at info@echoesfilm.org">info@echoesfilm.org</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
            <p>&copy; {new Date().getFullYear()} Echoes Documentary Project. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
