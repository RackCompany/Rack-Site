import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you sell the products?",
    answer: "No, RACK does not sell any products directly. We are a discovery platform that helps you find fashion items across multiple retailers. When you click on a product, you're redirected to the retailer's official website where you can make your purchase directly from them."
  },
  {
    question: "How do purchases work?",
    answer: "When you find a product you like on RACK, clicking the link takes you directly to the retailer's product page. You complete your purchase on their website, using their checkout process, payment systems, and customer service. We never handle payments or store your payment information."
  },
  {
    question: "Are you affiliated with the brands you display?",
    answer: "We partner with brands and retailers through authorized affiliate programs and networks (such as Impact, ShareASale, and direct partnerships). This means we have permission to display their products and may earn a commission when you make a purchase — at no extra cost to you. This is how we sustain the platform while keeping it free to use."
  },
  {
    question: "Where does your product data come from?",
    answer: "All product information on RACK comes from authorized sources: official affiliate network feeds provided by brands and retailers, and partner APIs that we have explicit permission to use. We do not scrape websites or use unauthorized data sources."
  },
  {
    question: "Can brands request removal of their products?",
    answer: "Absolutely. If you're a brand representative and would like products removed or have concerns about how your brand is displayed, please contact us at contact@rack-app.info. We honor all legitimate takedown requests promptly and work with brands to address any concerns."
  },
  {
    question: "Do you use web scraping to get product information?",
    answer: "No, we do not use web scraping. All product data on RACK is sourced exclusively from authorized affiliate feeds and partner APIs. We respect intellectual property rights and follow each partner's terms of service for data usage."
  },
  {
    question: "How do you make money?",
    answer: "RACK participates in affiliate marketing programs. When you click on a product link and make a purchase on the retailer's website, we may receive a small commission from that sale. This commission comes from the retailer and doesn't affect the price you pay. This model allows us to keep the platform free for users while supporting our operations."
  },
  {
    question: "Is my personal information safe?",
    answer: "We take privacy seriously. RACK collects minimal data — primarily email addresses for our waitlist. We don't store payment information (since we don't process payments), and we don't sell your personal data to third parties. Please see our Privacy Policy for complete details."
  },
  {
    question: "Why do some products have different prices than what's on the retailer's site?",
    answer: "Product prices are sourced from affiliate feeds which are updated periodically. While we strive to keep pricing accurate, there may occasionally be a delay between when a retailer updates their prices and when that change appears in our feed. The retailer's website always has the most current pricing."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us at contact@rack-app.info for general inquiries, partnership discussions, or takedown requests. We aim to respond to all inquiries within 1-2 business days."
  }
];

export default function FAQ() {
  return (
    <div data-testid="faq-page">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="faq-headline"
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-[#71717A]">
              Everything you need to know about RACK and how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#F2F4F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-[#E4E4E7] rounded-md px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger 
                  className="text-left text-[#0A0A0A] font-medium hover:no-underline py-5"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#71717A] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-[#71717A]">
            We're here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <Link to="/contact" className="inline-block mt-8">
            <Button 
              className="bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md px-8 h-12"
              data-testid="faq-contact-btn"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
