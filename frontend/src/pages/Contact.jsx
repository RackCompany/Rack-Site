import { Mail, Building2, AlertTriangle } from "lucide-react";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="contact-headline"
            >
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-[#71717A]">
              Have a question, partnership inquiry, or need to report an issue? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[#F2F4F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* General Contact */}
            <a 
              href="mailto:contact@rack-app.info"
              className="bg-white p-6 rounded-md border border-[#E4E4E7] hover:border-[#8DA399] transition-colors"
              data-testid="contact-general"
            >
              <div className="w-10 h-10 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-[#8DA399]" />
              </div>
              <h3 
                className="text-lg font-semibold text-[#0A0A0A] mb-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                General Inquiries
              </h3>
              <p className="text-sm text-[#71717A] mb-3">
                Questions about RACK or need help?
              </p>
              <span className="text-[#8DA399] hover:text-[#7A8F85] font-medium text-sm">
                contact@rack-app.info
              </span>
            </a>

            {/* Partnership */}
            <a 
              href="mailto:contact@rack-app.info?subject=Partnership%20Inquiry"
              className="bg-white p-6 rounded-md border border-[#E4E4E7] hover:border-[#8DA399] transition-colors"
              data-testid="contact-partnership"
            >
              <div className="w-10 h-10 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-4">
                <Building2 className="h-5 w-5 text-[#8DA399]" />
              </div>
              <h3 
                className="text-lg font-semibold text-[#0A0A0A] mb-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Partnership Inquiries
              </h3>
              <p className="text-sm text-[#71717A] mb-3">
                Interested in partnering with RACK?
              </p>
              <span className="text-[#8DA399] hover:text-[#7A8F85] font-medium text-sm">
                contact@rack-app.info
              </span>
            </a>

            {/* Takedown */}
            <a 
              href="mailto:contact@rack-app.info?subject=Takedown%20Request"
              className="bg-white p-6 rounded-md border border-[#E4E4E7] hover:border-[#8DA399] transition-colors"
              data-testid="contact-takedown"
            >
              <div className="w-10 h-10 bg-[#F2F4F3] rounded-md flex items-center justify-center mb-4">
                <AlertTriangle className="h-5 w-5 text-[#8DA399]" />
              </div>
              <h3 
                className="text-lg font-semibold text-[#0A0A0A] mb-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Takedown Requests
              </h3>
              <p className="text-sm text-[#71717A] mb-3">
                Need content removed from our platform?
              </p>
              <span className="text-[#8DA399] hover:text-[#7A8F85] font-medium text-sm">
                contact@rack-app.info
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-2xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Get in Touch
          </h2>
          <p className="text-[#71717A] mb-8">
            Click one of the options above or email us directly. We typically respond within 1-2 business days.
          </p>
          
          <a href="mailto:contact@rack-app.info">
            <div className="inline-flex items-center gap-2 text-lg font-medium text-[#8DA399] hover:text-[#7A8F85] transition-colors">
              <Mail className="h-5 w-5" />
              contact@rack-app.info
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
