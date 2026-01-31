import { useState } from "react";
import { Mail, Building2, AlertTriangle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    message_type: "general"
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API}/contact`, formData);
      toast.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        message_type: "general"
      });
    } catch (error) {
      toast.error(error.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
            <div className="bg-white p-6 rounded-md border border-[#E4E4E7]" data-testid="contact-general">
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
              <a 
                href="mailto:contact@rack-app.info" 
                className="text-[#8DA399] hover:text-[#7A8F85] font-medium text-sm"
              >
                contact@rack-app.info
              </a>
            </div>

            {/* Partnership */}
            <div className="bg-white p-6 rounded-md border border-[#E4E4E7]" data-testid="contact-partnership">
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
              <a 
                href="mailto:contact@rack-app.info?subject=Partnership%20Inquiry" 
                className="text-[#8DA399] hover:text-[#7A8F85] font-medium text-sm"
              >
                contact@rack-app.info
              </a>
            </div>

            {/* Takedown */}
            <div className="bg-white p-6 rounded-md border border-[#E4E4E7]" data-testid="contact-takedown">
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
              <a 
                href="mailto:contact@rack-app.info?subject=Takedown%20Request" 
                className="text-[#8DA399] hover:text-[#7A8F85] font-medium text-sm"
              >
                contact@rack-app.info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-2xl font-bold text-[#0A0A0A] mb-8"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#0A0A0A]">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-[#F9FAFB] border-[#E4E4E7] focus:border-[#8DA399] focus:ring-[#8DA399] rounded-md"
                  data-testid="contact-name-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0A0A0A]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-[#F9FAFB] border-[#E4E4E7] focus:border-[#8DA399] focus:ring-[#8DA399] rounded-md"
                  data-testid="contact-email-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-[#0A0A0A]">Inquiry Type</Label>
              <Select 
                value={formData.message_type} 
                onValueChange={(value) => setFormData({ ...formData, message_type: value })}
              >
                <SelectTrigger 
                  className="h-12 bg-[#F9FAFB] border-[#E4E4E7] focus:border-[#8DA399] focus:ring-[#8DA399] rounded-md"
                  data-testid="contact-type-select"
                >
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="takedown">Takedown Request</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-[#0A0A0A]">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="h-12 bg-[#F9FAFB] border-[#E4E4E7] focus:border-[#8DA399] focus:ring-[#8DA399] rounded-md"
                data-testid="contact-subject-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#0A0A0A]">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#F9FAFB] border-[#E4E4E7] focus:border-[#8DA399] focus:ring-[#8DA399] rounded-md resize-none"
                data-testid="contact-message-input"
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#8DA399] hover:bg-[#7A8F85] text-white rounded-md h-12"
              data-testid="contact-submit-btn"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <p className="mt-6 text-sm text-[#71717A] text-center">
            We typically respond within 1-2 business days.
          </p>
        </div>
      </section>
    </div>
  );
}
