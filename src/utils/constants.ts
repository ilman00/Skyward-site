// Site configuration
export const SITE_CONFIG = {
  name: "SkywardVision",
  tagline: "Elevating Brands to New Heights",
  description:
    "SkywardVision — diversified advertisement & marketing enterprise in Pakistan. Outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
  url: process.env.VITE_SITE_URL || "https://skywardvision.example.com",
  logo: "/logo.png",
  author: "SkywardVision Team",
};

// Contact information
export const CONTACT_INFO = {
  phone: "+92 337 5484042",
  whatsapp: process.env.VITE_WHATSAPP_NUMBER || "923375484042",
  // whatsapp:  "923375484042",
  email: "support@skywardvision.com.pk",
  address: {
    street: "123 Business District",
    city: "KPK",
    state: "Peshawar",
    country: "Pakistan",
    zipCode: "25000",
    full: "Office E21 3rd floor GS Tower, Hayatabad Toll Plaza Ring, XFF4+9PJ, Road, Achini Meira Peshawar",
  },
  hours: {
    weekdays: "Monday - Friday: 09:00 AM - 05:00 PM",
    saturday: "Saturday: 09:00 AM - 05:00 PM",
    sunday: "Sunday: Closed",
  },
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1EaPseDntA/",
  tiktok: "https://www.tiktok.com/@skywardvisionltd",
  instagram: "https://www.instagram.com/skywardvisionltd?igsh=bXBreTlzdDZxbm9v",
  x: "https://x.com/SkywardVision",
  youtube: "https://www.youtube.com/@SkywardVision",
};
// Navigation menu items
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/", key: "home" },
    { name: "About", href: "/about", key: "about" },
    {
      name: "Services",
      href: "/services",
      key: "services",
      dropdown: [
        {
          name: "Outdoor Advertising",
          href: "/outdoor-advertising",
          key: "outdoor-advertising",
        },
        { name: "Construction", href: "/construction", key: "construction" },
        { name: "Travel Agency", href: "/travel-agency", key: "travel-agency" },
        {
          name: "Digital Marketing",
          href: "/digital-marketing",
          key: "digital-marketing",
        },
        {
          name: "Bareera Clothing",
          href: "/bareera-clothing-brand",
          key: "bareera-clothing-brand",
        },
        {
          name: "Premium Perfume",
          href: "/premium-perfume-brand",
          key: "premium-perfume-brand",
        },
        { name: "Skyward Town", href: "/skyward-town", key: "skyward-town" },
      ],
    },
    { name: "Portfolio", href: "/portfolio", key: "portfolio" },
    { name: "Contact", href: "/contact-us", key: "contact" },
  ],
  footer: {
    services: [
      { name: "SMD Outdoor Advertising", href: "/services#smd-outdoor" },
      { name: "Digital Marketing", href: "/services#smd-digital" },
      { name: "Brand Development", href: "/services#brand-development" },
      { name: "Construction", href: "/services#construction-services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "News", href: "/news" },
    ],
    support: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "FAQ", href: "/faq" },
      { name: "Support Center", href: "/support" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
};

// Services data
export const SERVICES = [
  {
    id: "smd-outdoor",
    name: "SMD Outdoor Advertising",
    icon: "MdOutdoorGrill",
    description:
      "High-visibility outdoor digital displays placed at strategic locations to help brands reach a broad audience throughout the day.",
    features: [
      "High-clarity LED Displays",
      "Prime City Locations",
      "Flexible Content Scheduling",
      "24/7 Brand Exposure",
    ],
    image:
      "https://images.unsplash.com/photo-1628468033761-125b565aaac7?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: "smd-digital",
    name: "Digital Marketing",
    icon: "MdDevices",
    description:
      "Engage customers through dynamic digital content in malls, events, and indoor environments to maximize brand interaction.",
    features: [
      "Indoor Digital Displays",
      "Event & Mall Advertising",
      "Motion-Based Visual Ads",
      "High Audience Engagement",
    ],
    image: "/assets/services/digitalmarketing.png",
  },

  {
    id: "brand-development",
    name: "Brand Development",
    icon: "GiFarmTractor",
    description:
      "We build strong, memorable brands by shaping their identity, improving customer experience, and enhancing their presence across both physical retail and e-commerce platforms.",
    features: [
      "Brand Identity Creation",
      "Retail Brand Positioning",
      "E-Commerce Store Development",
      "Product Packaging & Presentation",
      "Customer Experience Enhancement",
      "Content & Visual Branding Strategies",
    ],
    image: "/assets/services/branddevelopement.webp",
  },
  {
    id: "construction-services",
    name: "Construction ",
    icon: "MdLocalShipping",
    description:
      "We handle complete construction and contracting services, managing projects from tender acquisition to on-site execution with quality, safety, and timely delivery.",
    features: [
      "Government & Private Tenders",
      "Residential & Commercial Construction",
      "Project Planning & Execution",
      "Quality Assurance & Site Management",
    ],
    image: "/assets/services/construction.jpg",
  },

  {
    id: "bareera-clothing",
    name: "Bareera Clothing Brand",
    icon: "GiClothes",
    description:
      "Skyward Vision's premium fashion house, where heritage craftsmanship meets contemporary trends — wardrobe staples and statement pieces for the modern individual.",
    features: [
      "Hand-Finished Tailoring",
      "Sustainable Fabric Sourcing",
      "Made-to-Measure Available",
      "Limited Edition Collections",
    ],
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: "premium-perfume",
    name: "Premium Perfume Brand",
    icon: "GiPerfumeBottle",
    description:
      "Our elite fragrance line crafts artisanal, long-lasting perfumes that capture sophistication in a bottle — developed by master perfumers with notes that evolve beautifully throughout the day.",
    features: [
      "Crafted by Master Perfumers",
      "12+ Hour Long-Lasting Wear",
      "Ethically Sourced Ingredients",
      "Hand-Finished, Refillable Bottles",
    ],
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: "skyward-town",
    name: "Skyward Town",
    icon: "MdHome",
    description:
      "Our flagship master-planned mega-community, redefining smart, secure urban living — a self-sustaining eco-haven integrating luxury residential plots, commercial hubs, medical centers, and recreational parks.",
    features: [
      "Smart & Secure Gated Community",
      "Self-Sustaining Eco Infrastructure",
      "Integrated Residential, Commercial & Medical Zones",
      "Expansive Parks & Recreational Spaces",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=60",
  },
];

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "Tech Solutions Ltd",
    role: "CEO",
    content:
      "SkywardVision installed a massive outdoor SMD billboard on the highway for us, and the impact was incredible. Our brand visibility skyrocketed, and we saw a huge increase in client inquiries.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Ali",
    company: "Green Valley Restaurant",
    role: "Owner",
    content:
      "Their indoor SMD menu displays completely transformed our customer experience. Guests now engage more with promotions, and our sales went up noticeably within weeks.",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Muhammad Khan",
    company: "Urban Properties",
    role: "Director",
    content:
      "SkywardVision’s high-resolution SMD screens helped us launch our luxury real estate projects with style. The campaigns drew buyers instantly and boosted our sales rate by over 40%.",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 4,
    name: "Sana Riaz",
    company: "Modern Enterprises",
    role: "Marketing Head",
    content:
      "We used SkywardVision’s corporate LED video wall solutions for our events, and the result was outstanding. The visuals were crisp, engaging, and left a lasting impression on our clients.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    company: "Swift Logistics",
    role: "Operations Manager",
    content:
      "Their transit advertising screens gave our campaigns a new edge. Placing digital ads on buses and terminals expanded our outreach and cut costs compared to traditional media.",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 6,
    name: "Zara Malik",
    company: "Innovative Startups",
    role: "Founder",
    content:
      "SkywardVision customized SMD screens for our retail store, and the difference was immediate. Foot traffic increased, and customers now spend more time engaging with our brand displays.",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
];

// Contact form subjects
export const CONTACT_SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "services", label: "Services Information" },
  { value: "quote", label: "Request Quote" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
];

// Portfolio categories
export const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All Campaigns" },
  { id: "outdoor", name: "Outdoor Advertising" },
  { id: "indoor", name: "Indoor & Mall Advertising" },
  { id: "digital", name: "Digital Marketing" },
];

// SEO meta tags templates
export const SEO_META = {
  home: {
    title:
      "SkywardVision — Advertisement & Digital Marketing Agency in Pakistan",
    description:
      "SkywardVision — diversified advertisement & marketing enterprise in Pakistan. Outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
    keywords:
      "advertisement, marketing, outdoor advertising, digital marketing, real estate, dairy farming, transportation, Pakistan, Karachi",
  },
  about: {
    title: "About Us — SkywardVision Advertisement Agency",
    description:
      "Learn about SkywardVision, a leading advertisement and marketing agency in Pakistan offering comprehensive business solutions.",
    keywords:
      "about skywardvision, advertisement agency, marketing company, Pakistan business",
  },
  services: {
    title: "Our Services — SkywardVision Advertisement & Marketing",
    description:
      "Comprehensive advertisement and marketing services including outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
    keywords:
      "advertising services, marketing services, outdoor advertising, digital marketing, real estate marketing",
  },
  portfolio: {
    title: "Portfolio — SkywardVision Projects & Case Studies",
    description:
      "View our successful projects and case studies across outdoor advertising, digital marketing, real estate, and other business sectors.",
    keywords:
      "portfolio, case studies, advertising projects, marketing campaigns, success stories",
  },
  contact: {
    title: "Contact Us — SkywardVision Advertisement Agency",
    description:
      "Get in touch with SkywardVision for professional advertisement and marketing services in Pakistan. Call us today for a free consultation.",
    keywords:
      "contact skywardvision, advertisement agency contact, marketing services Pakistan, free consultation",
  },
  smdScreen: {
    title: "SMD Screen Solutions — SkywardVision Digital Displays",
    description:
      "Professional SMD screen and digital display solutions for outdoor advertising and marketing campaigns.",
    keywords:
      "SMD screen, digital displays, outdoor displays, LED screens, advertising screens",
  },
  construction: {
    title: "Construction Display Solutions — SkywardVision Digital Signage",
    description:
      "High-quality digital signage and LED display solutions for construction sites, project updates, and safety communication.",
    keywords:
      "construction digital signage, construction LED displays, site information screens, project display boards, safety message screens",
  },
};

export default {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  NAVIGATION,
  SERVICES,
  TESTIMONIALS,
  CONTACT_SUBJECTS,
  PORTFOLIO_CATEGORIES,
  SEO_META,
};
