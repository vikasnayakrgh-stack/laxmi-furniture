import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-5 space-y-4">
      <h1 className="font-head font-black text-6xl text-accent">404</h1>
      <h2 className="font-head font-bold text-2xl text-ink">Page Not Found</h2>
      <p className="text-sm text-muted max-w-md">
        The page you are looking for might have been moved or does not exist. Let&apos;s get you back home.
      </p>
      <Link href="/">
        <Button variant="primary" className="px-8 py-3 text-sm">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
