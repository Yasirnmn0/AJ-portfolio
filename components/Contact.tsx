"use client";

import React, { useState } from "react";
import { Phone, Mail, Globe, Linkedin, FacebookIcon } from "lucide-react";
import toast from "react-hot-toast";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const accentColorHex = "#20C997";

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully!", { id: toastId });
      form.reset();
    } catch {
      toast.error("Failed to send message. Try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

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
              <p className="text-gray-400 mb-1">Officers Colony</p>
              <p className="text-gray-400 mb-1">Lahore, Punjab</p>
              <p className="text-gray-400 mb-4">Pakistan</p>

              <div className="space-y-3">
                <p className="flex items-center justify-center md:justify-start text-gray-400">
                  <Phone size={20} className="text-[#20C997] mr-2" />
                  +92 346 7999797
                </p>

                <p className="flex items-center justify-center md:justify-start text-gray-400">
                  <Mail size={20} className="text-[#20C997] mr-2" />
                  abdul@techrefi.com
                </p>

                <p className="flex items-center justify-center md:justify-start text-gray-400">
                  <Globe size={20} className="text-[#20C997] mr-2" />
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
                  href="https://www.facebook.com/abdul.jabbar.3958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20C997]"
                >
                  <FaFacebook size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/abduljabbar1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20C997]"
                >
                  <FaLinkedin size={24} />
                </a>

                <a
                  href="https://techrefi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20C997]"
                >
                  <Globe size={24} />
                </a>
                <a
                  href="https://wa.me/923467999797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20C997]"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8 xl:col-span-9">
            <h3 className="text-2xl text-white font-semibold uppercase mb-6 text-center md:text-left">
              Send me a message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white
                  focus:outline-none focus:ring-1 focus:ring-[#20C997] focus:border-[#20C997]"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white
                  focus:outline-none focus:ring-1 focus:ring-[#20C997] focus:border-[#20C997]"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell me more about your project..."
                rows={6}
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white
                focus:outline-none focus:ring-1 focus:ring-[#20C997] focus:border-[#20C997]"
                required
              />

              <div className="text-center md:text-left">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-full text-white font-medium uppercase
                  bg-[#20C997] hover:bg-gray-900 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
