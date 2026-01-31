import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div data-testid="privacy-page">
      {/* Hero */}
      <section className="py-16 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="privacy-headline"
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-[#71717A]">
            Last updated: December 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-rack">
          <h2>Introduction</h2>
          <p>
            RACK ("we," "our," or "us") operates the RACK fashion discovery platform (the "Service"). 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website and use our Service.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for our waitlist (email address)</li>
            <li>Contact us through our website (name, email address, message content)</li>
            <li>Subscribe to our newsletter (email address)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device, 
            including information about your web browser, IP address, time zone, and some of the cookies 
            that are installed on your device.
          </p>
          <p>We may use cookies and similar tracking technologies to:</p>
          <ul>
            <li>Analyze site traffic and usage patterns</li>
            <li>Remember your preferences</li>
            <li>Improve our Service</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our Service</li>
            <li>Send you updates about early access and new features (if you've signed up for our waitlist)</li>
            <li>Respond to your inquiries and requests</li>
            <li>Analyze usage of our Service to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Affiliate Disclosure</h2>
          <p>
            RACK participates in affiliate marketing programs. This means that when you click on links 
            to external retailers and make a purchase, we may earn a commission at no additional cost to you. 
            These affiliate partnerships help us sustain and improve our Service.
          </p>
          <p>
            Our affiliate partners may use cookies to track referrals. These cookies are governed by the 
            respective retailer's privacy policies.
          </p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party services that collect, monitor, and analyze data, including:</p>
          <ul>
            <li><strong>Analytics providers:</strong> To understand how users interact with our Service</li>
            <li><strong>Affiliate networks:</strong> To track referrals to partner retailers</li>
          </ul>
          <p>
            These third parties have their own privacy policies addressing how they use such information. 
            We encourage you to review their policies.
          </p>

          <h2>Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes 
            set out in this Privacy Policy. We will retain and use your information to the extent necessary 
            to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal 
            information. However, no method of transmission over the Internet or method of electronic storage 
            is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to opt-out of marketing communications</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:contact@rack-app.info">contact@rack-app.info</a>.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Service is not directed to individuals under the age of 13. We do not knowingly collect 
            personal information from children under 13. If you become aware that a child has provided us 
            with personal information, please contact us.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your privacy rights, 
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:contact@rack-app.info">contact@rack-app.info</a>
          </p>
          <p>
            <strong>Subject Line:</strong> Privacy Policy Inquiry
          </p>

          <div className="mt-12 pt-8 border-t border-[#E4E4E7]">
            <p className="text-sm text-[#71717A]">
              See also: <Link to="/terms" className="text-[#8DA399] hover:text-[#7A8F85]">Terms of Service</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
