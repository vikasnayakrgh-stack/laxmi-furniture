import React from "react";

export function BankOffers() {
  const bankLogos = [
    { name: "ICICI", color: "#D4541A" },
    { name: "HDFC", color: "#1B4F9C" },
    { name: "HSBC", color: "#B02A30" },
    { name: "AMEX", color: "#2E77BC" },
    { name: "SBI", color: "#0B5B4C" },
    { name: "IndusInd Bank", color: "#8E1616" },
  ];

  return (
    <section className="py-5">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex items-center justify-center gap-5 flex-wrap p-4 px-6 border border-[#FFDEC9] rounded-xl bg-[#FFF3E8] text-center shadow-sm">
          <p className="text-sm md:text-base font-semibold text-[#1C1917]">
            Get <b className="font-extrabold text-[#F16521]">No-Cost EMI</b> With Bank Benefits <b className="font-extrabold text-[#F16521]">Upto Rs. 10,000</b>.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {bankLogos.map((bank) => (
              <span
                key={bank.name}
                className="inline-flex items-center justify-center h-9 px-4 border border-[#E9E3DC] rounded-md font-extrabold text-xs tracking-wider bg-white shadow-sm"
                style={{ color: bank.color }}
              >
                {bank.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

