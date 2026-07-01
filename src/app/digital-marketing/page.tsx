"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  Star,
  TrendingUp,
  Target,
  BarChart2,
  Globe,
  Mail,
  Search,
  Share2,
  Megaphone,
  ChevronDown,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description:
      "Rank higher on search engines with keyword-driven content that attracts and retains your ideal audience.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build engaged communities across platforms with scroll-stopping creatives and strategic scheduling.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising (PPC)",
    description:
      "Run laser-targeted Google and Meta ad campaigns that generate leads without wasting your budget.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture prospects and retain customers through personalized email sequences that convert.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards and monthly reports keep you informed of every rupee spent and every result earned.",
  },
  {
    icon: Globe,
    title: "Web Presence Optimization",
    description:
      "From landing pages to full websites, we optimize your digital storefront for speed, UX, and conversions.",
  },
];

const benefits = [
  "Increased online visibility & brand awareness",
  "Higher conversion rates through targeted funnels",
  "Measurable ROI on every campaign",
  "Data-driven decisions backed by real analytics",
  "Multi-platform reach from a single partner",
  "Dedicated account manager for your brand",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We audit your current digital presence, analyze competitors, and define your target audience.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We build a custom digital roadmap aligned with your business goals and budget.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our team launches campaigns across the right channels with precision creative and copy.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We continuously monitor, test, and refine to improve results month over month.",
  },
];

const faqs = [
  {
    q: "How soon will I see results?",
    a: "Paid campaigns can generate leads within days. SEO and organic growth typically show meaningful results within 3–6 months.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We tailor our packages for startups, SMEs, and large enterprises alike.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Google, Meta (Facebook & Instagram), TikTok, LinkedIn, YouTube, and more — based on where your audience lives.",
  },
  {
    q: "Will I own the ad accounts and content?",
    a: "Yes. Everything we create and manage belongs to you. Full transparency, always.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function DigitalMarketingPage() {
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
            Digital Marketing
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Elevating Brands in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-400">
              the Digital Era
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We combine <span className="text-white font-semibold">data-driven strategies</span> with
            cutting-edge creativity to scale your business online — building
            conversion funnels that turn clicks into loyal customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact-us">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 rounded-full"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                View Case Studies <ArrowRight className="w-4 h-4" />
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
                What We Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727]">
                More Than Marketing —{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  A Growth Engine
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In an interconnected world, visibility is everything. Skyward
                Vision Group's digital marketing division doesn't just generate
                traffic — we architect full-funnel experiences that attract,
                engage, and convert your ideal customers at scale.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From organic search to paid media, social storytelling to email
                automation, every tactic we deploy is tied to a clear business
                outcome — and tracked with complete transparency.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital Marketing by SkywardVision"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <p className="text-xs text-gray-500 font-medium">Avg. ROI Increase</p>
                <p className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  3.5×
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features / Services ──────────────────────────────────────────── */}
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
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Everything Digital,{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Under One Roof
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A complete suite of digital marketing services tailored to your
                brand's unique goals and market position.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {f.description}
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
                How We Grow Your Brand
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A simple, transparent four-step process — from understanding
                your brand to delivering measurable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-sky-500/30">
                    <span className="text-white font-bold text-lg">{p.step}</span>
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

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge
              variant="outline"
              className="border-sky-400/50 text-sky-300 bg-white/5"
            >
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Flexible Plans for Every Business
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Whether you're a startup or an established brand, we have a
              package built for your goals and budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
              {[
                {
                  label: "Starter",
                  price: "PKR 25,000",
                  period: "/month",
                  desc: "Perfect for small businesses starting their digital journey.",
                  features: ["Social Media Management", "Basic SEO Setup", "Monthly Report", "Email Support"],
                },
                {
                  label: "Growth",
                  price: "PKR 60,000",
                  period: "/month",
                  desc: "For brands ready to scale with multi-channel campaigns.",
                  features: ["Everything in Starter", "PPC Campaigns", "Content Creation", "Bi-weekly Reports", "Dedicated Manager"],
                  highlight: true,
                },
                {
                  label: "Enterprise",
                  price: "Custom",
                  period: "",
                  desc: "Tailored solutions for large-scale digital operations.",
                  features: ["Full-funnel Strategy", "All Channels", "Weekly Reports", "Priority Support", "CRO & Analytics"],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlight
                      ? "bg-gradient-to-b from-sky-500 to-blue-600 border-sky-400 shadow-xl shadow-sky-500/30"
                      : "bg-white/5 border-white/10 hover:border-sky-400/30"
                  }`}
                >
                  {plan.highlight && (
                    <Badge className="mb-3 bg-white/20 text-white border-white/30">
                      Most Popular
                    </Badge>
                  )}
                  <p className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-blue-100" : "text-sky-400"}`}>
                    {plan.label}
                  </p>
                  <p className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-white"}`}>
                    {plan.price}
                    <span className="text-base font-normal opacity-70">{plan.period}</span>
                  </p>
                  <p className={`text-sm mt-2 mb-4 ${plan.highlight ? "text-blue-100" : "text-gray-400"}`}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-white" : "text-sky-400"}`} />
                        <span className={`text-sm ${plan.highlight ? "text-white" : "text-gray-300"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full mt-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.highlight
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-gradient-to-r from-sky-400 to-blue-600 text-white"
                    }`}
                  >
                    <Link href="/contact-us">Get Started</Link>
                  </Button>
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
                  >
                    <span className="font-semibold text-[#101727]">{faq.q}</span>
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
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Let's build a digital strategy that drives real results. Book your
              free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-full px-8 transition-all hover:scale-105"
              >
                <Link href="/contact-us">Get Free Consultation</Link>
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