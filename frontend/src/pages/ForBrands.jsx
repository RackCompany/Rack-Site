import { Link } from "react-router-dom";
import { 
  Users, 
  TrendingUp, 
  Shield, 
  ExternalLink, 
  Ban, 
  CheckCircle2, 
  FileCheck, 
  Lock,
  ArrowRight,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForBrands() {
  return (
    <div data-testid="for-brands-page">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-[#8DA399] uppercase tracking-wider">
              For Brands & Partners
            </span>
            <h1 
              className="mt-4 text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="brands-headline"
            >
              Drive Qualified Discovery Traffic
            </h1>
            <p className="mt-6 text-xl text-[#71717A]">
              Partner with RACK to reach engaged shoppers actively searching for products like yours — 
              with complete brand safety and transparency.
            </p>
            <Link to="/contact">
              <Button 
                className="mt-8 bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12"
                data-testid="brands-contact-btn"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-[#0A0A0A] text-center mb-16"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Why Partner with RACK?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="value-prop-1">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Qualified Traffic
              </h3>
              <p className="text-[#71717A]">
                Our users are actively searching for specific products. They arrive at your site with intent to purchase, 
                not just browse.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="value-prop-2">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Higher Conversion Rates
              </h3>
              <p className="text-[#71717A]">
                Discovery-driven traffic converts better. Users who find your products through detailed search 
                are more likely to complete a purchase.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="value-prop-3">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Brand Safe Environment
              </h3>
              <p className="text-[#71717A]">
                Your products are presented accurately, with proper attribution, in a clean and professional context. 
                No misleading claims or pricing manipulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Quality Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-3xl font-bold text-[#0A0A0A]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Non-Incentivized, Quality Traffic
              </h2>
              <p className="mt-4 text-lg text-[#71717A]">
                We believe in sustainable partnerships built on genuine value.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3" data-testid="quality-point-1">
                  <Ban className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>No coupons or discount codes:</strong> We don't undercut your pricing strategy.
                  </span>
                </div>
                <div className="flex items-start gap-3" data-testid="quality-point-2">
                  <Ban className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>No cashback or rewards:</strong> Users click because they want your products, not for incentives.
                  </span>
                </div>
                <div className="flex items-start gap-3" data-testid="quality-point-3">
                  <ExternalLink className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>No hosted checkout:</strong> All purchases happen on your site, under your control.
                  </span>
                </div>
                <div className="flex items-start gap-3" data-testid="quality-point-4">
                  <CheckCircle2 className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>Accurate pricing:</strong> We display prices as provided in your feeds, updated regularly.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F2F4F3] p-8 rounded-md">
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                What Makes Our Traffic Different
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#404040]">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full"></div>
                  Users with specific purchase intent
                </li>
                <li className="flex items-center gap-3 text-[#404040]">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full"></div>
                  Natural language search queries
                </li>
                <li className="flex items-center gap-3 text-[#404040]">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full"></div>
                  Product comparison behavior
                </li>
                <li className="flex items-center gap-3 text-[#404040]">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full"></div>
                  Direct-to-retailer click paths
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-[#0A0A0A]" data-testid="compliance-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Compliance & Data Use
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              We take data handling and brand representation seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-md border border-white/10" data-testid="compliance-1">
              <FileCheck className="h-8 w-8 text-[#8DA399] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Authorized Sources Only
              </h3>
              <p className="text-gray-400 text-sm">
                Product data is sourced exclusively from affiliate feeds and partner APIs. We never scrape websites.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-md border border-white/10" data-testid="compliance-2">
              <Lock className="h-8 w-8 text-[#8DA399] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Respect IP Rights
              </h3>
              <p className="text-gray-400 text-sm">
                Images and content are displayed only when permitted by partner terms. We honor takedown requests promptly.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-md border border-white/10" data-testid="compliance-3">
              <Shield className="h-8 w-8 text-[#8DA399] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Proper Attribution
              </h3>
              <p className="text-gray-400 text-sm">
                All products are clearly attributed to their source retailers. No misleading brand associations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Interested in partnering?
          </h2>
          <p className="mt-4 text-lg text-[#71717A]">
            Reach out to discuss how RACK can drive quality discovery traffic to your brand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12"
                data-testid="brands-cta-contact-btn"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="mailto:contact@rack-app.info">
              <Button 
                variant="outline"
                className="border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] rounded-md px-8 h-12"
                data-testid="brands-email-btn"
              >
                <Mail className="mr-2 h-4 w-4" />
                contact@rack-app.info
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
