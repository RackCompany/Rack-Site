import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F2F4F3] border-t border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center" data-testid="footer-logo">
              <img
                src="https://customer-assets.emergentagent.com/job_fashion-partner-3/artifacts/ctnvvcyp_Rack-Logo.png"
                alt="RACK"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold tracking-tight text-[#0A0A0A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                RACK
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#71717A] max-w-xs">
              A fashion discovery platform connecting you to the world's best retailers. 
              We aggregate products via authorized partner feeds and link users directly to retailer product pages.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#71717A]">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@rack-app.info" className="hover:text-[#0A0A0A] transition-colors" data-testid="footer-email">
                contact@rack-app.info
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#0A0A0A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-how-it-works"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  to="/for-brands"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-for-brands"
                >
                  For Brands
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#0A0A0A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                  data-testid="footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#E4E4E7]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#71717A]">
              © {new Date().getFullYear()} RACK. All rights reserved.
            </p>
            <p className="text-xs text-[#71717A] max-w-lg text-center md:text-right">
              <strong>Affiliate Disclosure:</strong> RACK participates in affiliate marketing programs. 
              We may earn a commission when you click on links to partner retailers and make a purchase. 
              This does not affect our editorial integrity or product recommendations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
