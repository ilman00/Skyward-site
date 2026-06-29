"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  FileText,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Phone,
  ChevronDown,
  Star,
  Briefcase,
  GraduationCap,
  Heart,
  Hotel,
  Camera,
  Compass,
  Sunrise,
  Ship,
} from "lucide-react";
import Link from "next/link";

const TravelAgencySection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const travelServices = [
    {
      icon: Compass,
      title: "Holiday Tour Packages",
      description:
        "Fully curated holiday experiences — flights, hotels, transfers, and guided tours bundled into seamless packages tailored to your budget and preferences.",
      highlights: ["Bespoke Itineraries", "All-Inclusive", "Group & Private"],
      badge: "Most Popular",
    },
    {
      icon: Plane,
      title: "Flight Bookings",
      description:
        "Best-fare flight search across all major airlines. Economy, business, or first class — we find the routes and deals that suit your schedule and wallet.",
      highlights: ["Domestic & International", "Multi-City Routes", "Best Fares"],
      badge: "Fast Booking",
    },
    {
      icon: Hotel,
      title: "Hotel & Resort Stays",
      description:
        "From budget-friendly stays to luxury five-star resorts, we book accommodations worldwide with exclusive rates and verified reviews.",
      highlights: ["Budget to Luxury", "Verified Properties", "Best Rate Guarantee"],
      badge: "Exclusive Rates",
    },
    {
      icon: Heart,
      title: "Honeymoon Packages",
      description:
        "Make your first journey as a couple unforgettable. Romantic escapes to the Maldives, Paris, Bali, and beyond — crafted with love and precision.",
      highlights: ["Maldives", "Bali", "Europe"],
      badge: "Romantic Escapes",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description:
        "Managed travel solutions for businesses — conference bookings, executive transfers, multi-destination trips, and 24/7 on-trip support for your team.",
      highlights: ["Managed Accounts", "Priority Support", "Invoiced Billing"],
      badge: "Business Ready",
    },
    {
      icon: Ship,
      title: "Cruise & Adventure",
      description:
        "Set sail or trek into the wild — we plan cruises, safari tours, mountain expeditions, and adventure holidays for thrill-seekers of every kind.",
      highlights: ["Mediterranean", "Safari", "Mountain Trek"],
      badge: "Thrilling Journeys",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Free Travel Consultation",
      description:
        "Share your dream destination, budget, and travel dates. Our travel planners craft a personalised itinerary just for you — no obligation.",
      icon: Phone,
    },
    {
      step: "02",
      title: "Itinerary & Quotation",
      description:
        "We present a detailed day-by-day plan with transparent pricing. Flights, hotels, transfers, and activities — all in one quote.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Booking & Confirmation",
      description:
        "Once you approve, we handle all bookings and send you confirmed tickets, vouchers, and travel documents instantly.",
      icon: Globe,
    },
    {
      step: "04",
      title: "Travel & Enjoy",
      description:
        "Bon voyage! Our 24/7 support team stays with you throughout your trip for any changes, emergencies, or on-ground assistance.",
      icon: Plane,
    },
  ];

  const achievements = [
    { icon: Users, number: "5,000+", text: "Happy Travellers" },
    { icon: Award, number: "4.9★", text: "Average Rating" },
    { icon: TrendingUp, number: "80+", text: "Destinations" },
    { icon: CheckCircle, number: "8+", text: "Years Experience" },
  ];

  const destinations = [
    { country: "Maldives", flag: "🇲🇻", highlight: "Overwater Villas · Snorkelling" },
    { country: "Thailand", flag: "🇹🇭", highlight: "Beaches · Street Food · Temples" },
    { country: "United Kingdom", flag: "🇬🇧", highlight: "Heritage · City Breaks" },
    { country: "United Arab Emirates", flag: "🇦🇪", highlight: "Luxury · Desert Safari" },
    { country: "Turkey", flag: "🇹🇷", highlight: "Culture · Hot Air Balloon" },
    { country: "Switzerland", flag: "🇨🇭", highlight: "Alps · Scenic Trains" },
    { country: "Saudi Arabia", flag: "🇸🇦", highlight: "Umrah · Heritage Sites" },
    { country: "Australia", flag: "🇦🇺", highlight: "Wildlife · Great Barrier Reef" },
  ];

  const faqs = [
    {
      question: "Do you offer customised itineraries or only fixed packages?",
      answer:
        "We specialise in both. Our fixed packages are great value for popular destinations, but we also build fully bespoke itineraries tailored to your dates, budget, travel style, and personal interests — from solo adventures to large family groups.",
    },
    {
      question: "What is included in a typical holiday package?",
      answer:
        "Our packages typically include return flights, accommodation, airport transfers, and breakfast. Premium packages add guided tours, travel insurance, SIM cards, and daily activities. We always clarify exactly what's included in your quote so there are no surprises.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "For peak season travel (summer, Eid holidays, December), we recommend booking at least 6–8 weeks ahead to secure the best fares and availability. For off-peak travel, 2–4 weeks is usually sufficient. Last-minute bookings are also possible depending on availability.",
    },
    {
      question: "Do you assist with travel visas as well?",
      answer:
        "Yes — for many popular destinations we provide visa guidance and documentation support as part of our service. For countries requiring formal visa applications, we work with trusted partners to make the process seamless.",
    },
    {
      question: "What happens if my plans change or a flight is cancelled?",
      answer:
        "Our 24/7 support team handles flight changes, cancellations, and on-trip emergencies. We also recommend travel insurance on every booking, which we can arrange for you — covering cancellations, medical emergencies, and lost luggage.",
    },
  ];

  return (
    <>
      <main id="main-content">
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="relative py-24 bg-gradient-to-r from-blue-600 to-sky-400 overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-white text-center lg:text-left">
                <div className="space-y-4">
                  <h6 className="text-blue-100 text-base font-medium uppercase tracking-wide">
                    SkywardVision — Travel Agency
                  </h6>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Explore the World{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-400">
                      Your Way
                    </span>
                  </h2>
                  <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    From Islamabad to every corner of the globe — SkywardVision
                    crafts unforgettable travel experiences with expert planning,
                    unbeatable prices, and 24/7 support every step of the way.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { value: "5,000+", label: "Happy Travellers Worldwide" },
                    { value: "80+ Destinations", label: "Countries We Cover" },
                    { value: "4.9★ Rating", label: "Average Client Review" },
                    { value: "Free", label: "Travel Consultation" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500"
                    >
                      <h4 className="text-3xl font-bold">{stat.value}</h4>
                      <p className="text-blue-200 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg font-semibold"
                  >
                    <Link href="/contact-us">Plan My Trip — Free</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="#travel-services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Travel Agency SkywardVision"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-400" />
                      <span className="font-bold text-gray-900 text-sm">
                        4.9 / 5 Rating
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Trusted by 5,000+ travellers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Travel Services ───────────────────────────────────────── */}
        <section
          id="travel-services"
          className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-10 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-blue-500/30 text-blue-600 bg-blue-50/50"
              >
                Travel Services
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727] leading-tight">
                Everything You Need
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  For Your Journey
                </span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                Whether it's a family holiday, romantic getaway, business trip,
                or solo adventure — we have a travel solution crafted just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {travelServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="p-8">
                      {/* Icon + Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#101727] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((item, ci) => (
                          <span
                            key={ci}
                            className="text-xs bg-gradient-to-r from-sky-50 to-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent bar */}
                    <div className="h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────────── */}
        <section className="relative py-24 bg-[#101727] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-700" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-600 to-sky-400 opacity-10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <Badge
                variant="outline"
                className="mb-4 border-sky-400/40 text-sky-300 bg-white/5 backdrop-blur-sm"
              >
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Your Dream Trip
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  In 4 Simple Steps
                </span>
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
                We handle everything — from planning to boarding — so you can
                focus on the experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector line (desktop only) */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-sky-400/30 via-blue-500/60 to-sky-400/30 z-0" />

              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative z-10 text-center group"
                  >
                    <div className="relative inline-block mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#101727] border-2 border-sky-400 rounded-full flex items-center justify-center text-sky-400 text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Destinations ─────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-10 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-blue-500/30 text-blue-600 bg-blue-50/50"
              >
                Popular Destinations
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727] leading-tight">
                Where Will You
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Go Next?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gradient-to-br hover:from-sky-50 hover:to-blue-50 hover:border-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="text-4xl mb-4">{dest.flag}</div>
                  <h3 className="text-lg font-bold text-[#101727] mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {dest.country}
                  </h3>
                  <p className="text-sm text-gray-500">{dest.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements ─────────────────────────────────────────── */}
        <section className="relative py-24 bg-[#101727] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-sky-400/40 text-sky-300 bg-white/5 backdrop-blur-sm"
              >
                Our Track Record
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Numbers That Speak
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Our Expertise
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                      {item.number}
                    </div>
                    <div className="text-blue-200 font-medium">{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ─────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 right-10 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/30 to-blue-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <img
                    src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="SkywardVision travel agency team"
                    className="rounded-3xl shadow-2xl w-full object-cover h-96 relative z-10"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div>
                    <span className="inline-block px-4 py-1 text-sm font-medium border border-primary/30 text-primary rounded-full mb-4">
                      Why SkywardVision
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#101727] leading-tight">
                      More Than Just
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                        a Travel Agency
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        icon: Shield,
                        title: "Expert Travel Planners",
                        desc: "Our team has first-hand experience across 80+ destinations, ensuring every itinerary is practical, exciting, and perfectly paced.",
                      },
                      {
                        icon: Clock,
                        title: "Fast Quotes & Booking",
                        desc: "Receive a detailed quote within hours and get fully confirmed bookings — flights, hotels, and transfers — without the wait.",
                      },
                      {
                        icon: CheckCircle,
                        title: "Transparent Pricing",
                        desc: "No hidden charges, no last-minute surprises. Every package is priced honestly with everything laid out upfront.",
                      },
                      {
                        icon: Users,
                        title: "24/7 On-Trip Support",
                        desc: "A dedicated travel manager is always reachable during your journey — for changes, emergencies, or anything you need on the ground.",
                      },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#101727] mb-1">
                              {item.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 shadow-lg"
                  >
                    <Link href="/contact-us">Plan My Trip</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="relative py-24 bg-[#101727] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-4xl">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-sky-400/40 text-sky-300 bg-white/5 backdrop-blur-sm"
              >
                FAQs
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Common Questions
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Answered
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-white text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Plane className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Next Adventure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Book a free consultation today and let SkywardVision's travel
                experts craft the perfect journey — tailored to you, priced
                honestly, and backed by 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
                >
                  <Link href="/contact-us">Plan My Trip — Free</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="#travel-services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TravelAgencySection;