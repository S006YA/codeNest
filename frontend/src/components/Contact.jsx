import React, { useState } from 'react';
import {Wrench,Hammer, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.status === 201) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d9ff] opacity-5 rounded-full filter blur-[150px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#1a1f2e] rounded-2xl p-8 border border-[#00d9ff]/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#00d9ff]/10 rounded-lg flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-[#00d9ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Let’s Build Something 🚀</h3>
                  <p className="text-gray-400 text-sm">Have a project in mind? Let’s turn your idea into reality.</p>
                </div>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-[#00d9ff] hover:text-[#00ffc8] transition-colors duration-200 break-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>
                  {contact.email}
                </span>
              </a> 
              <br/>
              <a
                href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] hover:text-[#00ffc8] transition-colors duration-200 break-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                {contact.phone}
              </a>
            </div>

            <div className="bg-[#1a1f2e] rounded-2xl p-8 border border-[#00d9ff]/20">
              <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently available for freelance projects and collaborations. Whether you need a new website, want to improve an existing one, or just have a question, I'm here to help!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1f2e] rounded-2xl p-8 border border-[#00d9ff]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#0a0f1e] border-[#00d9ff]/30 text-white focus:border-[#00d9ff] focus:ring-[#00d9ff]/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0a0f1e] border-[#00d9ff]/30 text-white focus:border-[#00d9ff] focus:ring-[#00d9ff]/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#0a0f1e] border-[#00d9ff]/30 text-white focus:border-[#00d9ff] focus:ring-[#00d9ff]/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00d9ff] hover:bg-[#00bfe6] text-[#0a0f1e] font-semibold transition-colors duration-200 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;