import React from "react";
import {
  Phone,
  Printer,
  Mail,
  Facebook,
  Twitter,
  Globe,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const accentColorHex = "#20C997";

  return (
    <section id="contact" className="bg-gray-800 py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative w-full text-center mb-12">
          <h3 className="text-[50px] md:text-[100px] font-bold text-white opacity-[0.04] uppercase tracking-wider select-none">
            Contact
          </h3>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Get in Touch
            </h2>

            <div
              className="w-20 h-[3px] mt-2 rounded-full"
              style={{ backgroundColor: accentColorHex }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Contact Info */}
          <div className="md:col-span-4 xl:col-span-3 text-center md:text-left space-y-10">
            {/* Address */}
            <div>
              <h3 className="text-2xl text-white font-semibold uppercase mb-4">
                Address
              </h3>
              <p className="text-gray-400 mb-1">Johar Town</p>
              <p className="text-gray-400 mb-1">Lahore, Punjab</p>
              <p className="text-gray-400 mb-4">Pakistan</p>

              <div className="space-y-3">
                <p className="flex items-center justify-center md:justify-start text-gray-400 hover:text-[#1CD7A8] transition-colors">
                  <Phone size={20} className="text-[#1CD7A8] mr-2" />
                  +92 322 4722040
                </p>

                <p className="flex items-center justify-center md:justify-start text-gray-400 hover:text-[#1CD7A8] transition-colors">
                  <Mail size={20} className="text-[#1CD7A8] mr-2" />
                  abdul@techrefi.com
                </p>

                <p className="flex items-center justify-center md:justify-start text-gray-400 hover:text-[#1CD7A8] transition-colors">
                  <Globe size={20} className="text-[#1CD7A8] mr-2" />
                  techrefi.com
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-2xl text-white font-semibold uppercase mb-4">
                Follow Me
              </h3>

              <div className="flex justify-center md:justify-start space-x-4 text-gray-400 text-xl">
                <a
                  href="https://facebook.com"
                  className="hover:text-[#1CD7A8] transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-[#1CD7A8] transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://techrefi.com"
                  className="hover:text-[#1CD7A8] transition-colors"
                >
                  <Globe size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/abdul-jabbar-sadiq"
                  className="hover:text-[#1CD7A8] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8 xl:col-span-9">
            <h3 className="text-2xl text-white font-semibold uppercase mb-6 text-center md:text-left">
              Send me a message
            </h3>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:ring-1 focus:ring-[#1CD7A8] focus:border-[#1CD7A8]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:ring-1 focus:ring-[#1CD7A8] focus:border-[#1CD7A8]"
                  required
                />
              </div>

              <textarea
                placeholder="Tell me more about your project..."
                rows={6}
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:ring-1 focus:ring-[#1CD7A8] focus:border-[#1CD7A8]"
                required
              />

              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full text-white font-medium uppercase transition-colors bg-[#20C997] hover:bg-gray-900"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
