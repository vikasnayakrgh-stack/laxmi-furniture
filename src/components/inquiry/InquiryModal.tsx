"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Send, CheckCircle2, MessageSquare, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { useInquiryStore, useUIStore } from "@/store";
import { formatPrice } from "@/lib/utils";

export function InquiryModal() {
  const { isInquiryModalOpen, activeInquiryProduct, closeInquiryModal } = useInquiryStore();
  const { showToast } = useUIStore();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    customSize: "",
    notes: "",
    preferWhatsApp: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isInquiryModalOpen || !activeInquiryProduct) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, preferWhatsApp: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      showToast("Please enter your Name and Mobile Number");
      return;
    }
    if (formData.phone.length < 10) {
      showToast("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitted(true);
    showToast("Inquiry submitted! Our representative will contact you shortly.");
  };

  const handleDirectWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Laxmi Furniture! 👋\nI am interested in getting a quote for:\n\n*Product:* ${activeInquiryProduct.name}\n*Est. Price:* ${formatPrice(
        activeInquiryProduct.price
      )}\n*Product ID:* #${activeInquiryProduct.id}\n${
        formData.customSize ? `*Custom Size/Notes:* ${formData.customSize}\n` : ""
      }${formData.name ? `*Name:* ${formData.name}\n` : ""}${
        formData.city ? `*City:* ${formData.city}\n` : ""
      }\nPlease share best available pricing & delivery details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      city: "",
      customSize: "",
      notes: "",
      preferWhatsApp: true,
    });
    closeInquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white dark:bg-[#18181B] rounded-2xl shadow-2xl overflow-hidden border border-[#E9E3DC] dark:border-zinc-800 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9E3DC] dark:border-zinc-800 bg-[#FAF6F1] dark:bg-[#202023]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F16521]/10 text-[#F16521] flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-head font-bold text-lg text-ink dark:text-white leading-tight">
                Product Inquiry & Customization
              </h3>
              <p className="text-xs text-[#6B6560] dark:text-zinc-400">
                Direct Factory Price & Custom Size Consultation
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-[#6B6560] hover:text-ink dark:hover:text-white hover:bg-cream rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            /* Success View */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-head font-bold text-2xl text-ink dark:text-white">
                Inquiry Received Successfully!
              </h4>
              <p className="text-sm text-[#6B6560] dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-ink dark:text-white">{formData.name}</strong>! Our Laxmi Furniture design specialist will reach out to you at{" "}
                <strong className="text-[#F16521]">{formData.phone}</strong> within 30 minutes with catalog details & lowest price quote.
              </p>

              <div className="bg-[#FAF6F1] dark:bg-zinc-800/60 p-4 rounded-xl text-left border border-[#E9E3DC] dark:border-zinc-700/60 text-xs space-y-2">
                <div className="flex justify-between text-muted dark:text-zinc-400">
                  <span>Product Requested:</span>
                  <strong className="text-ink dark:text-white">{activeInquiryProduct.name}</strong>
                </div>
                <div className="flex justify-between text-muted dark:text-zinc-400">
                  <span>Target City:</span>
                  <strong className="text-ink dark:text-white">{formData.city || "Not specified"}</strong>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleDirectWhatsApp}
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Connect Instantly on WhatsApp
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="bg-cream dark:bg-zinc-800 text-ink dark:text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#E9E3DC] transition-all cursor-pointer"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form View */
            <>
              {/* Product Preview Card */}
              <div className="flex items-center gap-4 p-3 bg-[#FAF6F1] dark:bg-zinc-800/60 rounded-xl border border-[#E9E3DC] dark:border-zinc-700/60">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white shrink-0">
                  <Image
                    src={activeInquiryProduct.img}
                    alt={activeInquiryProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-extrabold text-[#F16521] tracking-wider">
                    {activeInquiryProduct.badge || "Premium Collection"}
                  </span>
                  <h4 className="font-bold text-sm text-ink dark:text-white truncate">
                    {activeInquiryProduct.name}
                  </h4>
                  <div className="flex items-baseline gap-2 text-xs">
                    <span className="font-black text-ink dark:text-white">
                      Est. {formatPrice(activeInquiryProduct.price)}
                    </span>
                    <span className="text-[#9b948d] line-through text-[11px]">
                      {formatPrice(activeInquiryProduct.mrp)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Banner */}
              <div className="p-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  <Sparkles className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Need an instant answer or live photos?</span>
                </div>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  WhatsApp
                </button>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-zinc-300 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F16521]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-zinc-300 mb-1">
                      Mobile Number (10 digits) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F16521]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-zinc-300 mb-1">
                      Delivery City / Pincode
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Jaipur / 302001"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F16521]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink dark:text-zinc-300 mb-1">
                      Custom Size / Wood Finish
                    </label>
                    <input
                      type="text"
                      name="customSize"
                      placeholder="e.g. 6x6 ft, Teak Wood, Brown Fabric"
                      value={formData.customSize}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F16521]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink dark:text-zinc-300 mb-1">
                    Special Requirements / Bulk Quantity Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    placeholder="Mention any specific customization, discount request, or delivery date..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F16521] resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="preferWhatsApp"
                    checked={formData.preferWhatsApp}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 rounded text-[#F16521] focus:ring-[#F16521] border-gray-300"
                  />
                  <label
                    htmlFor="preferWhatsApp"
                    className="text-xs text-ink dark:text-zinc-300 cursor-pointer select-none"
                  >
                    Send quote & catalog details directly to my WhatsApp
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#F16521] hover:bg-[#D95316] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Request Factory Quote Callback
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B6560] dark:text-zinc-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Privacy Assured. No Spam. Factory Direct Support.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
