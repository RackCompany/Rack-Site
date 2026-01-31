import { Link } from "react-router-dom";
import { Target, Heart, Shield, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="about-headline"
            >
              About RACK
            </h1>
            <p className="mt-6 text-xl text-[#71717A]">
              Making product discovery easier, one search at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-[#8DA399]" />
                <span className="text-sm font-medium text-[#8DA399] uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Making Product Discovery Easier
              </h2>
              <p className="mt-6 text-lg text-[#71717A]">
                Shopping online should be simple. But with thousands of brands and millions of products, 
                finding exactly what you're looking for can feel overwhelming.
              </p>
              <p className="mt-4 text-lg text-[#71717A]">
                RACK was built to solve this problem. We aggregate fashion products from authorized partner feeds 
                and let you search using natural, descriptive language — not just keywords. 
                When you find something you love, we link you directly to the retailer.
              </p>
              <p className="mt-4 text-lg text-[#71717A]">
                No middleman. No checkout on our end. Just discovery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]">
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                What We Believe
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full mt-2"></div>
                  <span className="text-[#404040]">
                    Shopping should start with what you want, not where to look.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full mt-2"></div>
                  <span className="text-[#404040]">
                    Transparency builds trust — with users and brand partners alike.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full mt-2"></div>
                  <span className="text-[#404040]">
                    Discovery platforms should complement retailers, not compete with them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8DA399] rounded-full mt-2"></div>
                  <span className="text-[#404040]">
                    Quality over quantity in everything we do.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-[#8DA399]" />
              <span className="text-sm font-medium text-[#8DA399] uppercase tracking-wider">
                The Story
              </span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Built by a Solo Founder
            </h2>
            <div className="mt-8 text-left space-y-4 text-lg text-[#71717A]">
              <p>
                RACK started from a simple frustration: spending hours searching across different websites 
                to find the right piece of clothing. "I knew what I wanted — a specific style, fit, and price range — 
                but I had to visit a dozen stores to find it."
              </p>
              <p>
                The vision for RACK is straightforward: build a tool that lets you describe what you want 
                and instantly see options from across multiple retailers. No more endless tab-switching. 
                No more keyword guessing.
              </p>
              <p>
                As a solo founder, every decision is made with care — from the technology we use to the brands we partner with. 
                RACK is built to be sustainable, respectful of brand relationships, and genuinely useful to shoppers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Safe Commitment */}
      <section className="py-24 bg-[#0A0A0A]" data-testid="brand-safe-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-10 w-10 text-[#8DA399] mx-auto mb-4" />
            <h2 
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Our Brand-Safe Commitment
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              We take our responsibility to brand partners seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 p-6 rounded-md border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We Don't Scrape
              </h3>
              <p className="text-gray-400 text-sm">
                All product data comes from authorized affiliate feeds and partner APIs. 
                We never scrape websites or use unauthorized data sources.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-md border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We Respect Pricing
              </h3>
              <p className="text-gray-400 text-sm">
                Prices are displayed exactly as provided in partner feeds. 
                We don't manipulate prices or use unauthorized discount codes.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-md border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We Honor Takedowns
              </h3>
              <p className="text-gray-400 text-sm">
                If a brand requests content removal, we act promptly. 
                Contact us anytime with concerns about how your products are displayed.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-md border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We Attribute Properly
              </h3>
              <p className="text-gray-400 text-sm">
                Every product is clearly linked to its source retailer. 
                Users always know where they're being directed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white border-y border-[#E4E4E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-[#71717A]">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Based in the United States</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Questions or partnership inquiries?
          </h2>
          <p className="mt-4 text-lg text-[#71717A]">
            We'd love to hear from you.
          </p>
          <Link to="/contact" className="inline-block mt-8">
            <Button 
              className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12"
              data-testid="about-contact-btn"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
