import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  Sparkles,
  Droplets,
  Clock,
  Leaf,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const notes = [
  {
    icon: Sparkles,
    layer: "Top Note",
    time: "First 15 minutes",
    title: "The Introduction",
    description: "Bright citrus and crisp bergamot — the first impression, fleeting and unforgettable.",
  },
  {
    icon: Droplets,
    layer: "Heart Note",
    time: "30 min – 4 hours",
    title: "The Character",
    description: "Rose, oud, and spice unfold — the true soul of the fragrance reveals itself.",
  },
  {
    icon: Clock,
    layer: "Base Note",
    time: "4+ hours",
    title: "The Memory",
    description: "Warm amber, musk, and sandalwood linger — what people remember long after you've left.",
  },
];

const benefits = [
  "Crafted by master perfumers",
  "12+ hour long-lasting wear",
  "Rare, ethically sourced ingredients",
  "Hand-finished, refillable bottles",
  "Notes that evolve through the day",
  "Limited-batch artisanal production",
];

const collection = [
  {
    name: "Noir Élan",
    family: "Woody · Amber",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
  },
  {
    name: "Velour Rose",
    family: "Floral · Musk",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
  {
    name: "Or Mystique",
    family: "Oriental · Spice",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function PerfumePage() {
  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      {/* Fresh twist: cyan/teal-leaning gradient instead of pure sky/blue —
          evokes "air" and freshness while staying in the same family */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-teal-300 via-sky-400 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
        <div className="absolute top-12 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
          <Badge
            variant="outline"
            className="border-white/30 text-white backdrop-blur-sm"
          >
            Premium Perfume
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            An Invisible
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-400">
              Signature of Luxury
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Fragrance is the ultimate form of{" "}
            <span className="text-white font-semibold">memory</span>. Our
            elite fragrance line crafts artisanal, long-lasting perfumes
            developed by{" "}
            <span className="text-yellow-300">master perfumers</span> —
            designed to evolve beautifully throughout the day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact-us">Discover the Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 rounded-full"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Book a Scent Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                The Art of Scent
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                Sophistication,{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                  Bottled
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our elite fragrance line under Skyward Vision captures
                sophistication in a bottle. Each scent features complex notes
                designed to evolve beautifully throughout the day, leaving an
                unforgettable impression.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Developed by master perfumers and finished by hand, every
                bottle is a small act of craftsmanship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
                alt="Premium Perfume by SkywardVision"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <p className="text-xs text-gray-500 font-medium">Average Longevity</p>
                <p className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                  12+ hrs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fragrance Notes ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-blue-600/30 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400/50 text-sky-300 bg-white/5"
              >
                How It Unfolds
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                The Architecture of a{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                  Scent
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every bottle is built in three layers — each revealing itself
                at a different moment of the day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notes.map((n, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl hover:border-teal-300/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                      <n.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs tracking-widest uppercase text-teal-300 font-medium">
                      {n.layer} &middot; {n.time}
                    </p>
                    <h3 className="text-lg font-bold text-white">{n.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {n.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Collection ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                The Collection
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                Three Signatures, Endless Impressions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collection.map((c, i) => (
                <Card
                  key={i}
                  className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#101727] mb-1">
                      {c.name}
                    </h3>
                    <p className="text-sm text-teal-600 font-medium">
                      {c.family}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-300 via-sky-400 to-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let Your Presence Linger
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Book a private scent consultation or explore the full
              collection — crafted for those who leave an impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-full px-8 transition-all hover:scale-105"
              >
                <Link href="/contact-us">Get in Touch</Link>
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