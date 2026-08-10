import type { Metadata } from "next";
import { fontHead, fontBody } from "@/lib/fonts";
import "@/styles/globals.css";
import { Header, Footer, BottomNav, FloatingDock, Toast } from "@/components/layout";
import { InquiryModal } from "@/components/inquiry/InquiryModal";
import { InquiryDrawer } from "@/components/inquiry/InquiryDrawer";

export const metadata: Metadata = {
  title: "Laxmi Furniture — Premium Furniture & Home Decor Catalog",
  description:
    "Laxmi Furniture — premium furniture, custom solid wood sofas, beds, and home decor. Request factory direct quotes & custom sizing.",
  keywords: ["furniture", "sofas", "beds", "custom furniture", "home decor", "laxmi furniture inquiry"],
  openGraph: {
    title: "Laxmi Furniture — Premium Furniture & Home Decor",
    description: "Premium furniture, mattresses and home decor for Indian homes.",
    type: "website",
    locale: "en_IN",
    siteName: "Laxmi Furniture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxmi Furniture — Premium Furniture & Home Decor",
    description: "Premium furniture, mattresses and home decor for Indian homes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHead.variable} ${fontBody.variable} scroll-smooth`}
    >
      <body className="bg-bg text-ink font-body antialiased min-h-screen flex flex-col pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
        <FloatingDock />
        <Toast />
        <InquiryModal />
        <InquiryDrawer />
      </body>
    </html>
  );
}
