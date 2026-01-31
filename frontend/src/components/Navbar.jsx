import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/how-it-works", label: "How it Works" },
  { href: "/for-brands", label: "For Brands" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 nav-glass bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <img
              src="https://customer-assets.emergentagent.com/job_fashion-partner-3/artifacts/ctnvvcyp_Rack-Logo.png"
              alt="RACK"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold tracking-tight text-[#0A0A0A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              RACK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === link.href
                    ? "text-[#0A0A0A]"
                    : "text-[#71717A] hover:text-[#0A0A0A]"
                }`}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/#waitlist">
              <Button
                className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-6"
                data-testid="nav-join-waitlist-btn"
              >
                Join Waitlist
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="mobile-menu-btn">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-lg font-medium ${
                        location.pathname === link.href
                          ? "text-[#0A0A0A]"
                          : "text-[#71717A]"
                      }`}
                      data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/#waitlist">
                    <Button
                      className="w-full bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md mt-4"
                      data-testid="mobile-join-waitlist-btn"
                    >
                      Join Waitlist
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
