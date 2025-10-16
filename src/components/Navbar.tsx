import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/placements", label: "Placements" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3 cursor-pointer">
              <div className="w-10 h-10 flex-shrink-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <circle cx="20" cy="20" r="20" fill="currentColor" />
                  <path
                    d="M20 7.5C14.5 7.5 10.25 9.75 6.25 13.75C6.25 19.5 9.25 24.75 14.75 27C17.5 28.5 21.5 28.5 24.25 27C29.75 24.75 32.75 19.5 32.75 13.75C28.75 9.75 24.5 7.5 20 7.5Z"
                    fill="white"
                  />
                  <path
                    d="M20 11.5C23 11.5 25.5 12.5 28 15C28 18.5 26.25 21.75 23 23.5C20.75 24.5 18.5 24.5 16.25 23.5C13 21.75 11.25 18.5 11.25 15C13.75 12.5 16.25 11.5 20 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl text-foreground">Dazzling Academy</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className={`relative ${
                    location === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {location === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <Button
                    variant={location === link.path ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
