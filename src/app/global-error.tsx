"use client";

import { fontHead, fontBody } from "@/lib/fonts";
import "@/styles/globals.css";
import { Button } from "@/components/ui";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${fontHead.variable} ${fontBody.variable}`}>
      <body className="bg-bg text-ink font-body min-h-screen flex items-center justify-center p-5 text-center">
        <div className="space-y-4">
          <h1 className="font-head font-bold text-3xl text-accent">
            System Error
          </h1>
          <p className="text-sm text-muted">
            A critical error occurred in the application shell.
          </p>
          <Button variant="primary" onClick={() => reset()} className="px-6 py-2.5 text-sm">
            Refresh Application
          </Button>
        </div>
      </body>
    </html>
  );
}
