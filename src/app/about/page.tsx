import React from "react";
import { MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export default function AboutPage() {
  const stores = [
    {
      city: "Raipur — Magneto Mall Road",
      addr: "GE Road, Raipur, Chhattisgarh 492001 • 10 AM – 9 PM",
    },
    {
      city: "Bengaluru — Indiranagar",
      addr: "100 Feet Road, Bengaluru 560038 • 10 AM – 9 PM",
    },
    {
      city: "Gurugram — Golf Course Road",
      addr: "Sector 43, Gurugram 122002 • 10 AM – 9 PM",
    },
    {
      city: "Mumbai — Lower Parel",
      addr: "Senapati Bapat Marg, Mumbai 400013 • 10 AM – 9 PM",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-5 py-8 space-y-12">
      {/* Brand Hero */}
      <div className="bg-gradient-to-r from-[#FFF4EE] to-[#FAF6F1] dark:from-[#261E18] dark:to-[#1C1815] rounded-xl p-8 md:p-14 text-center space-y-3">
        <h2 className="font-head font-semibold text-2xl md:text-3.5xl text-brown dark:text-accent">
          Furniture That Feels Like Home
        </h2>
        <p className="max-w-2xl mx-auto text-xs md:text-sm text-ink/80 leading-relaxed">
          LAXMI FURNITURE began with a simple belief — every Indian home deserves furniture that is beautiful, honest in price, and built to last a generation. Today we serve over 11 million customers through 150+ studios across 100+ cities, blending craftsmanship with technology.
        </p>
      </div>

      {/* Grid: Studios & Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Studio Locations */}
        <div className="space-y-4">
          <h2 className="font-head font-semibold text-xl text-brown dark:text-accent">
            Our Studios
          </h2>
          <div className="space-y-3">
            {stores.map((store) => (
              <div
                key={store.city}
                className="flex items-start gap-3 border border-line rounded-xl p-4 bg-white dark:bg-cream/5"
              >
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <b className="block text-sm font-bold text-ink">
                    {store.city}
                  </b>
                  <p className="text-xs text-muted mt-0.5">{store.addr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <h2 className="font-head font-semibold text-xl text-brown dark:text-accent">
            Get In Touch
          </h2>
          <div className="border border-line rounded-xl p-6 bg-white dark:bg-[#1C1815] shadow-xs space-y-4">
            <ContactForm />

            {/* Map Placeholder */}
            <div className="rounded-xl bg-gradient-to-r from-[#F3EDE6] to-[#EDE4D9] dark:from-[#25201B] dark:to-[#1C1815] min-h-[180px] flex items-center justify-center font-bold text-xs text-brown dark:text-accent gap-2 border border-line">
              <MapPin className="w-5 h-5" /> Map Placeholder — Studios Near You
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
