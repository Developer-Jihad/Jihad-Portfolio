"use client";
import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import gmail from "@/public/icons/contact-icons/Gmail.png";
import discord from "@/public/icons/contact-icons/Discord.png";
import linkedIn from "@/public/icons/contact-icons/Linked-In.png";
import telegram from "@/public/icons/contact-icons/Telegram.png";
import twitter from "@/public/icons/contact-icons/Twitter.png";
import whatsapp from "@/public/icons/contact-icons/Whatsapp.png";
import messenger from "@/public/icons/contact-icons/Messenger.png";

const lora = Lora({ subsets: ["latin"], weight: "400" });

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: whatsapp,
    url: 'https://wa.me/8801303417316',
    color: '#25D366',
    category: 'messaging'
  },
  {
    name: 'LinkedIn',
    icon: linkedIn,
    url: 'https://www.linkedin.com/in/developer-jihad/',
    color: '#0A66C2',
    category: 'professional'
  },
  {
    name: 'Twitter',
    icon: twitter,
    url: 'https://twitter.com/Jihad_lxp',
    color: '#1DA1F2',
    category: 'social'
  },
  {
    name: 'Gmail',
    icon: gmail,
    url: 'mailto:jihadhossen1999@gmail.com',
    color: '#EA4335',
    category: 'email'
  },
  {
    name: 'Telegram',
    icon: telegram,
    url: 'https://t.me/Jihad_lxp',
    color: '#26A5E4',
    category: 'messaging'
  },
  {
    name: 'Discord',
    icon: discord,
    url: 'https://discordapp.com/users/jihad4364',
    color: '#5865F2',
    category: 'messaging'
  },
  {
    name: 'Messenger',
    icon: messenger,
    url: 'https://www.facebook.com/Jihad.lxp',
    color: '#B53BE9',
    category: 'messaging'
  }
];

const contactInfo = [
  { 
    label: 'Phone',
    value: '+880 1303-417316',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    label: 'Email',
    value: 'jihadhossen1999@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: 'Location',
    value: 'Lakshmipur, Bangladesh',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const ContactPage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-white/70 text-sm">Available for new opportunities</span>
          </div>
          <h1 className="text-gray-400 text-4xl md:text-7xl font-bold mb-6">
          Let&apos;s
            <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text"> conversation</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want to say hi - I&apos;d love to hear from you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Contact Details</h2>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((info) => (
                    <div 
                      key={info.label}
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/30 transition-colors duration-300"
                    >
                      <div className="p-2 rounded-lg md:rounded-xl bg-white/5 shrink-0">
                        <div className="text-violet-500">{info.icon}</div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white/40 text-xs md:text-sm">{info.label}</p>
                        <p className="text-white text-sm md:text-base mt-0.5 md:mt-1 truncate">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Email Form & Social Links */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Email Form */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Send Me a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 
                        focus:border-indigo-500/50 text-white text-sm md:text-base outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 
                        focus:border-indigo-500/50 text-white text-sm md:text-base outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 
                      focus:border-indigo-500/50 text-white text-sm md:text-base outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 
                      focus:border-indigo-500/50 text-white text-sm md:text-base outline-none transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-red-400 
                    text-white text-sm md:text-base font-medium relative overflow-hidden group disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                </button>

                {/* Success/Error Messages */}
                {success && (
                  <div className="p-3 md:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm md:text-base">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="p-3 md:p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm md:text-base">
                    Failed to send message. Please try again later.
                  </div>
                )}
              </form>
            </div>

            {/* Social Links Grid */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="group relative flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl 
                      bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <div className="relative">
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                        style={{ boxShadow: `0 0 30px ${social.color}30` }} 
                      />
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={28}
                        height={28}
                        className="relative z-10 transform group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white group-hover:text-white/90 font-medium text-sm md:text-base">
                        {social.name}
                      </p>
                      <p className="text-white/40 text-xs md:text-sm mt-0.5 md:mt-1">
                        {social.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
