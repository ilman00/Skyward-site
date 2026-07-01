import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  Scissors,
  Leaf,
  Gem,
  Crown,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: Scissors,
    title: "Heritage Craft",
    description: "Every seam finished by artisans who have spent decades perfecting their craft.",
  },
  {
    icon: Leaf,
    title: "Sustainable Fabrics",
    description: "Ethically sourced materials and low-impact dyeing, refined and responsible.",
  },
  {
    icon: Gem,
    title: "Modern Silhouette",
    description: "Classic tailoring reimagined with contemporary fits for the modern individual.",
  },
];

const benefits = [
  "Hand-finished, premium tailoring",
  "Sustainably sourced fabrics",
  "Made-to-measure available",
  "Limited, exclusive collections",
  "Comfort without compromise",
  "Timeless, statement-ready pieces",
];

const collections = [
  {
    name: "The Wardrobe Edit",
    tag: "Everyday Staples",
    description: "Essential pieces built for daily wear — refined basics in breathable, durable fabrics.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
  },
  {
    name: "Signature Statement",
    tag: "Occasion Wear",
    description: "Bold tailoring and statement details for moments that call for presence.",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80",
  },
  {
    name: "Heritage Line",
    tag: "Limited Run",
    description: "Hand-finished pieces inspired by traditional craftsmanship, reworked for today.",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800&q=80",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function BareeraPage() {
  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      {/* Luxury twist: gold accent woven into the sky/blue gradient family,
          plus a "Crown" badge icon and serif-style emphasis on the brand name */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />
        <div className="absolute top-12 left-10 w-24 h-24 bg-amber-300/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
          <Badge
            variant="outline"
            className="border-amber-300/50 text-amber-200 backdrop-blur-sm flex items-center gap-1.5 w-fit mx-auto"
          >
            <Crown className="w-3.5 h-3.5" />
            Bareera Clothing
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Elegance Stitched
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
              Into Every Thread
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Skyward Vision's <span className="text-white font-semibold">premium fashion house</span>,
            where heritage craftsmanship meets contemporary trends — wardrobe
            staples and{" "}
            <span className="text-amber-300">statement pieces</span> for the
            individual who refuses to compromise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact-us">Explore the Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-200/50 text-white hover:bg-white/10 rounded-full"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Book a Fitting <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                Our Philosophy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                Every Collection Is a{" "}
                <span className="bg-gradient-to-r from-amber-400 to-blue-600 bg-clip-text text-transparent">
                  Promise
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Bareera is Skyward Vision's premium fashion house — a
                testament to sustainable fabrics and exquisite tailoring,
                crafted for the modern individual who values quality over
                everything.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From heritage craftsmanship to contemporary cuts, every piece
                carries a story of intention, skill, and honest effort.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80"
                alt="Bareera Clothing Brand by SkywardVision"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Crafted</p>
                  <p className="text-lg font-extrabold bg-gradient-to-r from-amber-400 to-blue-600 bg-clip-text text-transparent">
                    By Hand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-blue-600/30 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-amber-300/50 text-amber-300 bg-white/5"
              >
                Our Craft
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Quality Is{" "}
                <span className="bg-gradient-to-r from-amber-300 to-blue-500 bg-clip-text text-transparent">
                  Never an Accident
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                It is the result of intention, skill, and honest effort —
                woven into every Bareera piece.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl hover:border-amber-300/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                      <p.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Collections ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                Collections
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                Three Lines, One Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((c, i) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-amber-400/90 text-[#101727] border-0 font-medium">
                      {c.tag}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#101727] mb-2">
                      {c.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {c.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-amber-300/15 rounded-full blur-3xl animate-pulse" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Step Into the Collection
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Book a private fitting or browse our latest pieces — crafted
              for those who notice the details.
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