"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  ChevronDown,
  Compass,
  Building2,
  Layers,
  LayoutGrid,
  Sofa,
  Palette,
  HardHat,
  Box,
  Trees,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const serviceGroups = [
  {
    group: "Exterior & Structural Architecture",
    blurb:
      "From first sketch to stamped drawings — the built form, resolved.",
    items: [
      {
        icon: Compass,
        title: "Conceptual & Schematic Design",
        description:
          "Site analysis, massing studies, 3D conceptual modeling, and spatial planning that establish the direction before a single wall is drawn.",
      },
      {
        icon: Building2,
        title: "Architectural Drafting & Permits",
        description:
          "Construction documentation, structural coordination, floor plans, elevations, and local authority approval drawings.",
      },
      {
        icon: Layers,
        title: "Facade & Elevation Design",
        description:
          "Modern, classical, or parametric exterior treatments incorporating sustainable materials suited to local climate.",
      },
    ],
  },
  {
    group: "Interior Architecture & Design",
    blurb:
      "Interiors planned around how the space is actually used.",
    items: [
      {
        icon: LayoutGrid,
        title: "Space Planning & Layouts",
        description:
          "Ergonomic space optimization, zoning, and circulation mapping that make every square foot work harder.",
      },
      {
        icon: Sofa,
        title: "Detailed Interior Design",
        description:
          "High-end 3D renderings, custom joinery and millwork designs, lighting concepts, and false ceiling details.",
      },
      {
        icon: Palette,
        title: "Material & FF&E Selection",
        description:
          "Curation of furniture, fixtures, and equipment — including flooring, wall finishes, sanitary ware, and textiles.",
      },
    ],
  },
  {
    group: "Turnkey & Specialized Services",
    blurb:
      "Design that carries through to a finished, handed-over building.",
    items: [
      {
        icon: HardHat,
        title: "Design-Build Integration",
        description:
          "Complete execution oversight, coordinating directly with Skyward's construction and project management teams.",
      },
      {
        icon: Box,
        title: "3D Visualization & VR Walkthroughs",
        description:
          "Immersive virtual reality walkthroughs for pre-construction sales and client approvals — see it before it is built.",
      },
      {
        icon: Trees,
        title: "Landscape Architecture",
        description:
          "Outdoor living spaces, hardscaping, and green integration that complete the site rather than decorate it.",
      },
    ],
  },
];

const benefits = [
  "One accountable team from concept through handover",
  "Approval-ready drawings for local authorities",
  "Photoreal renderings before construction begins",
  "VR walkthroughs that speed up client sign-off",
  "Coordinated design-build — no gap between drawing and site",
  "Material specifications sourced and costed upfront",
];

const process = [
  {
    step: "01",
    title: "Consultation & Site Study",
    description:
      "We visit the site, understand your brief and budget, and analyze orientation, access, and constraints.",
  },
  {
    step: "02",
    title: "Concept & Design",
    description:
      "Massing studies, layouts, and 3D concepts developed until the direction is agreed and locked.",
  },
  {
    step: "03",
    title: "Documentation & Approvals",
    description:
      "Construction drawings, structural coordination, material specifications, and authority submissions.",
  },
  {
    step: "04",
    title: "Execution & Handover",
    description:
      "On-site oversight through construction and fit-out, ending in a completed, handed-over space.",
  },
];

const faqs = [
  {
    q: "Do you handle building approvals and permits?",
    a: "Yes. We prepare authority-compliant submission drawings and coordinate the approval process with the relevant local body.",
  },
  {
    q: "Can I hire you for interiors only?",
    a: "Absolutely. Interior architecture works as a standalone engagement on an existing or under-construction building.",
  },
  {
    q: "What is a VR walkthrough and why does it matter?",
    a: "It is an immersive virtual model of your space you can walk through before construction. It catches layout problems early and helps stakeholders approve with confidence.",
  },
  {
    q: "Do you manage construction as well as design?",
    a: "Yes, through our design-build service. We coordinate directly with Skyward's construction and project management teams, so design intent survives execution.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ArchitecturalDesignSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
        <div className="absolute top-12 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
          <Badge
            variant="outline"
            className="border-white/30 text-white backdrop-blur-sm"
          >
            Architecture & Design
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Designed to Build,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-400">
              Built to Last
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            From{" "}
            <span className="text-white font-semibold">concept sketches</span> to
            approved drawings, finished interiors, and handed-over buildings —
            Skyward's architectural division covers the full arc of a project
            under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact-us">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 rounded-full"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                View Our Work <ArrowRight className="w-4 h-4" />
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
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                What We Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                Architecture, Interiors &{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Everything Between
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Most projects lose something in the handoff — between the
                architect who drew it, the designer who furnished it, and the
                contractor who built it. Skyward's design division removes those
                handoffs entirely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We take a site from analysis and massing through approval
                drawings, interior detailing, material selection, and on-site
                execution. One team, one drawing set, one point of
                accountability.
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

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Architectural design services by SkywardVision"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <p className="text-xs text-gray-500 font-medium">
                  Concept to Handover
                </p>
                <p className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  One Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Groups ───────────────────────────────────────────────── */}
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
                Service Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Three Disciplines,{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  One Studio
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Structural architecture, interior design, and turnkey delivery —
                available together or individually.
              </p>
            </div>

            <div className="space-y-16">
              {serviceGroups.map((group, gi) => (
                <div key={gi}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-sm font-bold text-sky-400/60 tabular-nums">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {group.group}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {group.blurb}
                      </p>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-sky-400/40 to-transparent ml-4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((item, i) => (
                      <Card
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-2xl hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
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
                How a Project Moves
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Four clear stages — you always know where the project stands and
                what comes next.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-sky-500/30">
                    <span className="text-white font-bold text-lg">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#101727] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {p.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-600 bg-white/50"
              >
                FAQs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-[#101727]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-500 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
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
              Have a Site or a Space in Mind?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bring us the plot, the building, or just the idea. We will tell you
              what is possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-full px-8 transition-all hover:scale-105"
              >
                <Link href="/contact-us">Book a Consultation</Link>
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