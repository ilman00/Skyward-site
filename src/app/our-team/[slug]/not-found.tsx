// src/app/team/[slug]/not-found.tsx
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function TeamProfileNotFound() {
  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <h1 className="font-montserrat text-2xl font-bold text-gray-900 md:text-3xl">
        Profile Not Found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-gray-600">
        This team member&apos;s profile is no longer available. They may have
        moved on, or the link may be out of date.
      </p>
      <Link
        href="/our-team"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-sky-500 hover:to-blue-700"
      >
        <HiArrowLeft className="h-4 w-4" aria-hidden="true" />
        View our team
      </Link>
    </main>
  );
}