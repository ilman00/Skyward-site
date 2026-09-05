import React from "react";
import ArchitecturalDesignSection from "./ArchitecturalDesignSection";
import { SEO_META } from "@/utils/constants";
import { generateSEO } from "@/components/SEOHead";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.architecturalDesign.title,
    description: SEO_META.architecturalDesign.description,
    url: "/services/architectural-design",
    keywords: SEO_META.architecturalDesign.keywords,
  });
}

function ArchitecturalDesignPage() {
  return <ArchitecturalDesignSection />;
}

export default ArchitecturalDesignPage;