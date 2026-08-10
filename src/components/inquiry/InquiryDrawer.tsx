"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Send, PhoneCall, Sparkles, ClipboardList } from "lucide-react";
import { useInquiryStore, useUIStore } from "@/store";
import { PRODUCTS } from "@/data/mock";
import { formatPrice } from "@/lib/utils";

export function InquiryDrawer() {
  const { isInquiryDrawerOpen, closeInquiryDrawer, shortlist, removeFromShortlist, clearShortlist } =
    useInquiryStore();
  const { showToast } = useUIStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isInquiryDrawerOpen) return null;

  const shortlistedProducts = PRODUCTS.filter((p) => shortlist.includes(p.id));

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || phone.length < 10) {
      showToast("Please enter a valid Name and 10-digit Phone Number");
      return;
    }

    setIsSubmitted(true);
    showToast("Bulk inquiry submitted successfully!");
  };

  const handleBulkWhatsApp = () => {
    if (shortlistedProducts.length === 0) return;
    const itemsList = shortlistedProducts.map((p, i) => `${i + 1}. ${p.name} (${formatPrice(p.price)})`).join("\n");
    const message = encodeURIComponent(
      `Hello Laxmi Furniture! 👋\nI want a bulk quotation for my shortlisted items:\n\n${itemsList}\n\n*Name:* ${name || "Customer"}\n*Phone:* ${phone || "N/A"}\nPlease share best combined discount & delivery SLA.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#18181B] shadow-2xl flex flex-col border-l border-[#E9E3DC] dark:border-zinc-800">
          {/* Header */}
          <div className="px-6 py-4 bg-[#FAF6F1] dark:bg-[#202023] border-b border-[#E9E3DC] dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ClipboardList className="w-5 h-5 text-[#F16521]" />
              <h3 className="font-head font-bold text-lg text-ink dark:text-white">
                Saved Inquiry Shortlist ({shortlist.length})
              </h3>
            </div>
            <button
              onClick={closeInquiryDrawer}
              className="p-2 text-[#6B6560] hover:text-ink dark:hover:text-white rounded-full hover:bg-cream transition-colors"
              aria-label="Close shortlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-head font-bold text-xl text-ink dark:text-white">
                  Bulk Request Submitted!
                </h4>
                <p className="text-sm text-[#6B6560] dark:text-zinc-300">
                  Our wholesale & retail specialist will call you at <strong className="text-[#F16521]">{phone}</strong> with bundled pricing options.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    clearShortlist();
                    closeInquiryDrawer();
                  }}
                  className="mt-4 bg-[#F16521] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#D95316] transition-all"
                >
                  Done
                </button>
              </div>
            ) : shortlistedProducts.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ClipboardList className="w-12 h-12 text-[#9b948d] mx-auto stroke-1" />
                <h4 className="font-bold text-base text-ink dark:text-white">
                  Your Inquiry Shortlist is Empty
                </h4>
                <p className="text-xs text-[#6B6560] dark:text-zinc-400 max-w-xs mx-auto">
                  Click &quot;Inquire Now&quot; on any sofa, bed, or wardrobe to save it here for a combined quote.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-2 border-b border-[#E9E3DC] dark:border-zinc-800">
                  <span className="text-xs text-[#6B6560] dark:text-zinc-400 font-medium">
                    Items selected for consultation
                  </span>
                  <button
                    onClick={clearShortlist}
                    className="text-xs text-rose-600 hover:underline font-semibold"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {shortlistedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3 p-2.5 rounded-xl border border-[#E9E3DC] dark:border-zinc-800 bg-[#FAF6F1]/50 dark:bg-zinc-900/50"
                    >
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white shrink-0">
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs text-ink dark:text-white truncate">
                          {product.name}
                        </h5>
                        <p className="text-xs font-black text-[#F16521]">
                          Est. {formatPrice(product.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromShortlist(product.id)}
                        className="p-1.5 text-zinc-400 hover:text-rose-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Combined Inquiry Form */}
                <form onSubmit={handleBulkSubmit} className="pt-4 border-t border-[#E9E3DC] dark:border-zinc-800 space-y-3">
                  <h4 className="font-bold text-xs uppercase text-[#F16521] tracking-wider">
                    Submit Combined Inquiry
                  </h4>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Your Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-ink dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F16521] hover:bg-[#D95316] text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Request Combined Quote Callback
                  </button>

                  <button
                    type="button"
                    onClick={handleBulkWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send List via WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
