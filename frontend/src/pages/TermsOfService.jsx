import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div data-testid="terms-page">
      {/* Hero */}
      <section className="py-16 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="terms-headline"
          >
            Terms of Service
          </h1>
          <p className="mt-4 text-[#71717A]">
            Last updated: December 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-rack">
          <h2>Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the RACK website and 
            fashion discovery platform (the "Service") operated by RACK ("we," "us," or "our").
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
            with any part of the Terms, you may not access the Service.
          </p>

          <h2>Description of Service</h2>
          <p>
            RACK is a fashion discovery platform that aggregates product information from authorized 
            affiliate feeds and partner APIs. Our Service allows users to search and browse fashion 
            products from multiple retailers.
          </p>
          <p>
            <strong>Important:</strong> RACK does not sell products directly. When you click on a product, 
            you are redirected to the retailer's website where you can complete your purchase. All 
            transactions occur between you and the retailer, subject to their terms and conditions.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            RACK participates in affiliate marketing programs with various retailers and affiliate networks. 
            This means:
          </p>
          <ul>
            <li>We may earn a commission when you click on affiliate links and make purchases on retailer websites</li>
            <li>These commissions are paid by the retailers and do not affect the price you pay</li>
            <li>Our product recommendations may be influenced by affiliate partnerships</li>
          </ul>
          <p>
            We strive to provide accurate and helpful product information regardless of affiliate relationships.
          </p>

          <h2>Product Information Disclaimer</h2>
          <p>
            Product information displayed on RACK, including prices, descriptions, and availability, 
            is sourced from third-party affiliate feeds and partner APIs. While we make reasonable efforts 
            to keep this information accurate and up-to-date:
          </p>
          <ul>
            <li>We do not guarantee the accuracy, completeness, or timeliness of product information</li>
            <li>Prices and availability may change between when data is updated and when you visit the retailer's site</li>
            <li>The retailer's website always has the most current and authoritative product information</li>
            <li>Images and descriptions are provided by our partners and may be subject to change</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>When using our Service, you agree to:</p>
          <ul>
            <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
            <li>Not attempt to interfere with or disrupt the Service or its servers</li>
            <li>Not use automated systems (bots, scrapers, etc.) to access the Service without our permission</li>
            <li>Not attempt to bypass any security measures on the Service</li>
            <li>Provide accurate information when registering for our waitlist or contacting us</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The RACK name, logo, and website design are our intellectual property. Product images, 
            descriptions, and brand names displayed on our Service are the property of their respective owners 
            and are displayed under license from our affiliate partners.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works from any content on our 
            Service without our express written permission.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our Service contains links to third-party websites (retailers). These links are provided for 
            your convenience. We do not control and are not responsible for the content, privacy policies, 
            or practices of any third-party websites.
          </p>
          <p>
            Your interactions with retailers, including purchases, returns, and customer service, are 
            governed by that retailer's terms and conditions.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, 
            ERROR-FREE, OR SECURE.
          </p>
          <p>
            WE MAKE NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY, OR AVAILABILITY OF PRODUCT 
            INFORMATION DISPLAYED ON OUR SERVICE.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, RACK SHALL NOT BE LIABLE FOR ANY INDIRECT, 
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE, 
            INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Purchases made on third-party retailer websites</li>
            <li>Inaccurate product information</li>
            <li>Service interruptions or errors</li>
            <li>Loss of data or unauthorized access to your information</li>
          </ul>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless RACK and its officers, directors, employees, and agents 
            from any claims, damages, losses, or expenses arising from your use of the Service or violation 
            of these Terms.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Service at any time, without 
            notice, for any reason, including breach of these Terms.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will notify users of material changes by updating 
            the "Last updated" date. Your continued use of the Service after changes constitutes acceptance 
            of the modified Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, 
            without regard to conflict of law principles.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:contact@rack-app.info">contact@rack-app.info</a>
          </p>
          <p>
            <strong>Subject Line:</strong> Terms of Service Inquiry
          </p>

          <div className="mt-12 pt-8 border-t border-[#E4E4E7]">
            <p className="text-sm text-[#71717A]">
              See also: <Link to="/privacy" className="text-[#8DA399] hover:text-[#7A8F85]">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
