import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="hidden lg:block bg-[#F5F5F5] border-b border-[#E9E3DC] text-[0.7rem]">
      <div className="max-w-[1280px] mx-auto px-5 py-1.5 flex justify-center gap-6 flex-wrap font-medium tracking-wider text-[#666666] uppercase">
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Laxmi Furniture For Business
        </Link>
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Sell With Us
        </Link>
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Become a Franchisee
        </Link>
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Gift Cards
        </Link>
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Track Your Order
        </Link>
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Contact Us
        </Link>
        <Link
          href="/about"
          className="text-[#F16521] font-bold hover:underline transition-colors"
        >
          Honouring Uniformed Forces
        </Link>
        <Link
          href="/about"
          className="hover:text-accent transition-colors"
        >
          Download App
        </Link>
      </div>
    </div>
  );
}

