"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5 space-y-4">
      <h2 className="font-head font-bold text-2xl text-ink">
        Something went wrong!
      </h2>
      <p className="text-sm text-muted max-w-md">
        We encountered an error loading this section.
      </p>
      <Button variant="primary" onClick={() => reset()} className="px-6 py-2.5 text-sm">
        Try Again
      </Button>
    </div>
  );
}
