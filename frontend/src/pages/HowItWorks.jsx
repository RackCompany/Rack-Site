import { Link } from "react-router-dom";
import { Search, Sparkles, MessageSquare, ExternalLink, Database, ImageIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <div data-testid="how-it-works-page">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="hiw-headline"
            >
              How RACK Works
            </h1>
            <p className="mt-6 text-xl text-[#71717A]">
              A modern approach to fashion discovery — powered by authorized data and designed for transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Product Discovery */}
            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="feature-discovery">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Product Discovery
              </h3>
              <p className="text-[#71717A]">
                Browse thousands of products from top retailers, all in one place. 
                Our platform aggregates fashion items from authorized partner feeds, 
                making it easy to explore styles across multiple brands without visiting dozens of websites.
              </p>
            </div>

            {/* Personalized Recommendations */}
            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="feature-recommendations">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Personalized Recommendations
              </h3>
              <p className="text-[#71717A]">
                Get curated suggestions based on your preferences and search history. 
                Our platform learns what you like and surfaces relevant products from across our partner network.
              </p>
            </div>

            {/* Natural Language Search */}
            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="feature-search">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Search by Natural Language
              </h3>
              <p className="text-[#71717A]">
                Describe what you're looking for in plain English — "navy blue linen blazer under $200" 
                or "sustainable cotton basics." Our search understands context and intent, 
                not just keywords.
              </p>
            </div>

            {/* Direct Linking */}
            <div className="bg-white p-8 rounded-md border border-[#E4E4E7]" data-testid="feature-direct-link">
              <div className="w-12 h-12 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <ExternalLink className="h-6 w-6 text-[#8DA399]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Direct Linking to Retailers
              </h3>
              <p className="text-[#71717A]">
                When you find something you love, we send you directly to the retailer's product page. 
                No checkout on our site, no middleman — you complete your purchase on the brand's official store, 
                with their full customer service and return policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Where Our Data Comes From
              </h2>
              <p className="mt-4 text-lg text-[#71717A]">
                Transparency is at the core of how we operate.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4" data-testid="data-source-1">
                  <div className="w-10 h-10 bg-[#F2F4F3] rounded-md flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 text-[#8DA399]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A0A0A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Authorized Affiliate Feeds
                    </h4>
                    <p className="text-[#71717A] text-sm mt-1">
                      Product information is sourced from official affiliate network feeds (such as Impact, ShareASale, and others). 
                      These feeds are provided directly by brands and retailers for publisher use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="data-source-2">
                  <div className="w-10 h-10 bg-[#F2F4F3] rounded-md flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 text-[#8DA399]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A0A0A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Partner APIs
                    </h4>
                    <p className="text-[#71717A] text-sm mt-1">
                      Some product data is accessed through official partner APIs, 
                      with proper authorization and in compliance with each partner's terms of service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="data-source-3">
                  <div className="w-10 h-10 bg-[#F2F4F3] rounded-md flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="h-5 w-5 text-[#8DA399]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A0A0A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Authorized Images Only
                    </h4>
                    <p className="text-[#71717A] text-sm mt-1">
                      Product images are only displayed when permitted by partner terms. 
                      We respect intellectual property rights and follow each brand's media usage guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1687226426209-0e5d2143c0d1?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Clean clothing rack"
                className="rounded-md shadow-sm"
              />
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1687226426209-0e5d2143c0d1?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Clean clothing rack"
                className="rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to discover fashion differently?
          </h2>
          <p className="mt-4 text-lg text-[#71717A]">
            Join our waitlist for early access.
          </p>
          <Link to="/#waitlist" className="inline-block mt-8">
            <Button 
              className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12"
              data-testid="hiw-join-waitlist-btn"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
