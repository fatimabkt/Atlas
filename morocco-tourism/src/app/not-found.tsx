import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="flex items-center justify-center w-16 h-16 rounded-full border border-terracotta text-terracotta mb-6">
        <Compass size={28} strokeWidth={1.5} />
      </span>
      <h1 className="font-display text-4xl text-ink">Off the Map</h1>
      <p className="text-ink/60 mt-3 max-w-sm">
        This page wandered off somewhere between the dunes. Let&apos;s get you
        back on the trail.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full bg-terracotta text-cream font-semibold hover:bg-indigo transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
