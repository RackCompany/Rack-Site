import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Link2, ShoppingBag, Shield, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Handle hash navigation for waitlist section
    if (window.location.hash === "#waitlist") {
      setTimeout(() => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setLoading(true);
    try {
      const response = await axios.post(`${API}/waitlist`, { email });
      toast.success(response.data.message);
      setEmail("");
    } catch (error) {
      toast.error(error.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1746864946956-0c047289abaf?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
            alt="Fashion"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] leading-tight animate-fade-in-up"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="hero-headline"
            >
              Search clothing across brands using detailed descriptions.
            </h1>
            <p className="mt-6 text-lg text-[#404040] max-w-xl animate-fade-in-up animation-delay-100" data-testid="hero-subheading">
              We aggregate products via authorized partner feeds and APIs, linking you directly to retailer product pages. 
              No checkout here — just discovery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <a href="#waitlist">
                <Button 
                  className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12 text-base"
                  data-testid="hero-join-waitlist-btn"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/how-it-works">
                <Button 
                  variant="outline" 
                  className="border-[#E4E4E7] hover:bg-[#F2F4F3] text-[#0A0A0A] rounded-md px-8 h-12 text-base"
                  data-testid="hero-learn-more-btn"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              How it Works
            </h2>
            <p className="mt-4 text-lg text-[#71717A] max-w-2xl mx-auto">
              Discover fashion in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-1">
              <div className="w-16 h-16 mx-auto bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <Search className="h-7 w-7 text-[#8DA399]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                1. Search
              </h3>
              <p className="text-[#71717A]">
                Describe what you're looking for in natural language. Our platform searches across multiple brand catalogs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-testid="step-2">
              <div className="w-16 h-16 mx-auto bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <Link2 className="h-7 w-7 text-[#8DA399]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                2. Discover
              </h3>
              <p className="text-[#71717A]">
                Browse personalized recommendations from authorized partner feeds. Compare styles and prices in one place.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-testid="step-3">
              <div className="w-16 h-16 mx-auto bg-[#F2F4F3] rounded-md flex items-center justify-center mb-6">
                <ShoppingBag className="h-7 w-7 text-[#8DA399]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                3. Shop Direct
              </h3>
              <p className="text-[#71717A]">
                Click through to shop directly on the retailer's site. No middleman checkout — you buy from the source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section className="py-24 bg-[#F2F4F3]" data-testid="for-brands-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Built for Brand Trust
              </h2>
              <p className="mt-4 text-lg text-[#71717A]">
                RACK is designed with brand safety as a core principle.
              </p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3" data-testid="brand-point-1">
                  <CheckCircle2 className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>Non-incentivized traffic:</strong> We don't use coupons, cashback, or rewards to drive clicks.
                  </span>
                </li>
                <li className="flex items-start gap-3" data-testid="brand-point-2">
                  <CheckCircle2 className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>No checkout hosted:</strong> Users are always directed to your site to complete purchases.
                  </span>
                </li>
                <li className="flex items-start gap-3" data-testid="brand-point-3">
                  <CheckCircle2 className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>Authorized data only:</strong> Product data comes exclusively from affiliate feeds and partner APIs.
                  </span>
                </li>
                <li className="flex items-start gap-3" data-testid="brand-point-4">
                  <CheckCircle2 className="h-5 w-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                  <span className="text-[#404040]">
                    <strong>Brand-safe presentation:</strong> Products displayed with proper attribution and accurate pricing.
                  </span>
                </li>
              </ul>

              <Link to="/for-brands" className="inline-block mt-8">
                <Button 
                  variant="outline" 
                  className="border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] rounded-md"
                  data-testid="learn-about-partnership-btn"
                >
                  Learn About Partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1769107805412-90d9191d53e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Modern boutique interior"
                className="rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Safe Disclosure */}
      <section className="py-16 bg-white border-y border-[#E4E4E7]" data-testid="disclosure-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-8 w-8 text-[#8DA399]" />
          </div>
          <h3 
            className="text-xl font-semibold text-[#0A0A0A] mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Our Commitment to Transparency
          </h3>
          <p className="text-[#71717A] max-w-2xl mx-auto">
            RACK is a discovery platform only. We do not sell products, handle payments, or store customer payment information. 
            When you click on a product, you are redirected to the retailer's official website. 
            We may earn a commission on qualifying purchases through our affiliate partnerships — at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-[#0A0A0A]" data-testid="waitlist-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Users className="h-10 w-10 text-[#8DA399]" />
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Join the Waitlist
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Be the first to experience a smarter way to discover fashion. Early access coming soon.
          </p>
          
          <form onSubmit={handleWaitlistSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-md flex-1"
              data-testid="waitlist-email-input"
            />
            <Button 
              type="submit"
              disabled={loading}
              className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12"
              data-testid="waitlist-submit-btn"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-gray-500">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>
    </div>
  );
}
