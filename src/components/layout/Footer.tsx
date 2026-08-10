import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FAF6F1] text-[#1C1917] border-t border-[#E9E3DC] mt-8">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-[#E9E3DC]">
          {/* Brand Info */}
          <div className="lg:col-span-1.5 space-y-3">
            <div className="font-head font-extrabold text-2xl text-[#F16521] tracking-wide">
              NESTORA
            </div>
            <p className="text-xs text-[#6B6560] leading-relaxed">
              Premium furniture, mattresses and home decor — crafted for Indian homes, delivered with care.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["UPI", "VISA", "Mastercard", "RuPay", "AMEX", "EMI", "COD"].map(
                (pay) => (
                  <span
                    key={pay}
                    className="border border-[#E9E3DC] rounded-md text-[0.68rem] font-bold px-2 py-1 text-[#6B6560] bg-white"
                  >
                    {pay}
                  </span>
                )
              )}
            </div>
            <div className="flex gap-2.5 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#E9E3DC] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F16521] hover:text-white hover:border-[#F16521] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#E9E3DC] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F16521] hover:text-white hover:border-[#F16521] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-[#E9E3DC] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F16521] hover:text-white hover:border-[#F16521] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#E9E3DC] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F16521] hover:text-white hover:border-[#F16521] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] text-sm mb-3.5">Shop</h5>
            <ul className="space-y-1.5 text-xs text-[#6B6560]">
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Sofas</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Beds</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Dining</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Mattresses</Link></li>
              <li><Link href="/shop" className="hover:text-[#F16521] transition-colors">Decor</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] text-sm mb-3.5">Company</h5>
            <ul className="space-y-1.5 text-xs text-[#6B6560]">
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Franchisee</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Sell With Us</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] text-sm mb-3.5">Help</h5>
            <ul className="space-y-1.5 text-xs text-[#6B6560]">
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Track Order</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Returns</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Warranty</Link></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-head font-bold text-[#8B5E3C] text-sm mb-3.5">Contact</h5>
            <ul className="space-y-1.5 text-xs text-[#6B6560]">
              <li><a href="tel:18002674445" className="hover:text-[#F16521] transition-colors">1800-267-4445 (Toll Free)</a></li>
              <li><a href="mailto:care@nestora.in" className="hover:text-[#F16521] transition-colors">care@nestora.in</a></li>
              <li><Link href="/about" className="hover:text-[#F16521] transition-colors">Find a Store</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="py-6 text-center text-xs space-y-1">
          <span className="font-head font-bold text-base text-[#1C1917]">
            NESTORA
          </span>
          <small className="block text-[#6B6560]">
            Premium Furniture & Home Decor for Every Indian Home
          </small>
        </div>
      </div>
    </footer>
  );
}

