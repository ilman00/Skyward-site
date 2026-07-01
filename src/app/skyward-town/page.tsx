import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  Home,
  Building2,
  Stethoscope,
  Trees,
  ShieldCheck,
  Leaf,
  MapPin,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const zones = [
  {
    icon: Home,
    title: "Residential Plots",
    description:
      "Luxury residential plots across thoughtfully zoned neighborhoods, each with green frontage and wide boulevards.",
  },
  {
    icon: Building2,
    title: "Commercial Hubs",
    description:
      "Retail, office, and lifestyle hubs placed within walking distance — everything you need, never far from home.",
  },
  {
    icon: Stethoscope,
    title: "Medical Centers",
    description:
      "State-of-the-art healthcare facilities embedded within the community, for round-the-clock peace of mind.",
  },
  {
    icon: Trees,
    title: "Recreational Parks",
    description:
      "Expansive green parks, jogging tracks, and community spaces designed for an active, connected lifestyle.",
  },
];

const benefits = [
  "Smart & secure gated community",
  "Self-sustaining eco-friendly infrastructure",
  "Integrated residential, commercial & medical zones",
  "24/7 surveillance and smart-community systems",
  "Expansive parks and recreational spaces",
  "Premium investment & resale value",
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We understand your residential or investment goals and walk you through available plots and plans.",
  },
  {
    step: "02",
    title: "Site Tour",
    description:
      "Experience Skyward Town firsthand with a guided tour of the masterplan and active zones.",
  },
  {
    step: "03",
    title: "Booking",
    description:
      "Our team supports you through documentation, booking, and flexible payment plans.",
  },
  {
    step: "04",
    title: "Handover",
    description:
      "From possession to move-in, we ensure a smooth, transparent handover experience.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SkywardTownPage() {
  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
        <div className="absolute top-12 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
          <Badge
            variant="outline"
            className="border-white/30 text-white backdrop-blur-sm"
          >
            Skyward Town
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            The Landmark of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-400">
              Modern Living
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our flagship <span className="text-white font-semibold">master-planned mega-community</span>,
            redefining smart, secure urban living. A self-sustaining{" "}
            <span className="text-yellow-300">eco-haven</span> that
            seamlessly integrates luxury residential plots, commercial hubs,
            medical centers, and recreational parks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact-us">Schedule a Site Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 rounded-full"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Download Brochure <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                Not Just an Address
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                A Lifestyle{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Upgrade
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Skyward Town is designed as a self-sustaining eco-haven —
                where residential comfort, commercial convenience, healthcare,
                and recreation exist in one connected, secure community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every zone is engineered to work together, so residents are
                never far from where they live, work, heal, or unwind.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="Skyward Town master-planned community"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-500" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Integrated Zones</p>
                  <p className="text-lg font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    4 in 1 Community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zones / Features ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-blue-600/30 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400/50 text-sky-300 bg-white/5"
              >
                The Masterplan
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Four Zones,{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  One Connected Community
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Residential, commercial, medical, and recreational zones
                designed to work in harmony.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {zones.map((z, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                      <z.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{z.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {z.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                From Site Visit to Move-In
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our proven 4-step process ensures a smooth journey to owning
                your home in Skyward Town.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <Card
                  key={i}
                  className="relative border-0 shadow-lg bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-sky-500/30">
                      <span className="text-white font-bold text-xl">
                        {p.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#101727] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400/50 text-sky-300 bg-white/5"
              >
                A Glimpse Inside
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Life at Skyward Town
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
                "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
                "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden h-72 group shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Skyward Town lifestyle ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Future Address Starts Here
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Book a guided tour of Skyward Town and see the masterplan come
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-full px-8 transition-all hover:scale-105"
              >
                <Link href="/contact-us">Schedule a Site Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 rounded-full"
              >
                <Link href="/services">Back to All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}