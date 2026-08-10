import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Send, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FAF6F1] dark:bg-[#121214] text-[#1C1917] dark:text-zinc-100 border-t border-[#E9E3DC] dark:border-zinc-800 mt-8 mb-16 md:mb-0 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10 border-b border-[#E9E3DC] dark:border-zinc-800">
          
          {/* Brand Info & Showroom Contact */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-head font-extrabold text-2xl text-[#F16521] tracking-wide">
              Laxmi Furniture
            </div>
            <p className="text-xs text-[#6B6560] dark:text-zinc-400 leading-relaxed max-w-md">
              Premium solid teak wood sofas, custom beds, dining sets & home decor — crafted for Indian homes, sold factory-direct from our Raipur showroom.
            </p>

            {/* Direct WhatsApp Callout in Footer */}
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20Laxmi%20Furniture%2C%20I%20want%20to%20inquire%20about%20custom%20furniture."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold shadow-xs hover:bg-[#20bd5a] transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-[#1C1917] dark:text-zinc-200 hover:bg-[#F16521] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-[#1C1917] dark:text-zinc-200 hover:bg-[#F16521] hover:text-white transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-[#1C1917] dark:text-zinc-200 hover:bg-[#F16521] hover:text-white transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#E9E3DC] dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-[#1C1917] dark:text-zinc-200 hover:bg-[#F16521] hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] dark:text-[#F16521] text-sm mb-3">Shop Categories</h5>
            <ul className="space-y-1.5 text-xs text-[#6B6560] dark:text-zinc-400">
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Wooden Sofas</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Storage Beds</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Dining Sets</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Orthopedic Mattresses</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Home Accents</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] dark:text-[#F16521] text-sm mb-3">Customer Info</h5>
            <ul className="space-y-1.5 text-xs text-[#6B6560] dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">About Our Showroom</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Custom Order Process</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">10-Year Warranty</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Showroom Location</Link></li>
            </ul>
          </div>

          {/* Showroom Contact Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] dark:text-[#F16521] text-sm mb-3">Showroom Address</h5>
            <ul className="space-y-2 text-xs text-[#6B6560] dark:text-zinc-400">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F16521] shrink-0 mt-0.5" />
                <span>GE Road, Near City Center, Raipur, CG — 492001</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#F16521] shrink-0" />
                <a href="tel:18002674445" className="hover:text-[#F16521] font-bold">1800-267-4445 (Toll Free)</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="py-5 text-center text-xs space-y-1">
          <span className="font-head font-bold text-sm text-[#1C1917] dark:text-zinc-200">
            Laxmi Furniture Showroom
          </span>
          <small className="block text-[#6B6560] dark:text-zinc-500">
            © {new Date().getFullYear()} Laxmi Furniture. Premium Custom Solid Wood Furniture & Home Decor.
          </small>
        </div>
      </div>
    </footer>
  );
}
