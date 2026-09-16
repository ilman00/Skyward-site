import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiArrowLeft,
  HiChevronRight,
  HiOutlineInformationCircle,
  HiOutlineBriefcase,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { getEmployeeBySlug } from "@/lib/employees";

export const dynamic = "force-dynamic";

interface TeamProfilePageProps {
  params: Promise<{ slug: string }>;
}

/** Shared prose styling for every sanitized Tiptap block on this page. */
const proseClass =
  "text-[15px] leading-[1.8] text-gray-700 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-700 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:font-montserrat [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_li]:mb-1.5 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-5 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-sky-400";

function toPlainText(html: string | null, limit = 160): string {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

/** True only when the field has real content — Tiptap saves "<p></p>" for empty. */
function hasContent(html: string | null | undefined): boolean {
  if (!html) return false;
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0;
}

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export async function generateMetadata(
  { params }: TeamProfilePageProps
): Promise<Metadata> {
  const { slug } = await params;
  const employee = await getEmployeeBySlug(slug);

  if (!employee) {
    return { title: "Profile Not Found | SkywardVision" };
  }

  const title = employee.designation
    ? `${employee.full_name} — ${employee.designation} | SkywardVision`
    : `${employee.full_name} | SkywardVision`;

  const description =
    toPlainText(employee.content) ||
    toPlainText(employee.general_information) ||
    `${employee.full_name} at SkywardVision.`;

  const ogImage = cloudinaryUrl(employee.photo_url, { width: 1200, height: 630 });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function TeamProfilePage({ params }: TeamProfilePageProps) {
  const { slug } = await params;
  const employee = await getEmployeeBySlug(slug);

  if (!employee) notFound();

  const photo = cloudinaryUrl(employee.photo_url, { width: 480, height: 480 });

  // Only sections the client actually filled in get rendered.
  const sections = [
    {
      key: "general_information",
      title: "General Information",
      icon: HiOutlineInformationCircle,
      html: employee.general_information,
    },
    {
      key: "employment_details",
      title: "Employment Details",
      icon: HiOutlineBriefcase,
      html: employee.employment_details,
    },
    {
      key: "key_responsibilities",
      title: "Key Responsibilities",
      icon: HiOutlineClipboardList,
      html: employee.key_responsibilities,
    },
  ].filter((section) => hasContent(section.html));

  const hasAbout = hasContent(employee.content);
  const hasAnything = hasAbout || sections.length > 0;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 pb-28 pt-6 sm:pb-32">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"
        />

        <div className="container relative mx-auto px-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-sky-100 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <HiChevronRight
              className="h-4 w-4 shrink-0 text-sky-200/70"
              aria-hidden="true"
            />
            <Link href="/our-team" className="transition-colors hover:text-white">
              Our Team
            </Link>
            <HiChevronRight
              className="h-4 w-4 shrink-0 text-sky-200/70"
              aria-hidden="true"
            />
            <span className="font-medium text-white">{employee.full_name}</span>
          </nav>
        </div>
      </section>

      {/* Card lifted over the hero */}
      <section className="container mx-auto -mt-20 px-4 pb-16 sm:-mt-24">
        <div className="mx-auto max-w-4xl">
          <article className="animate-fadeSlide rounded-2xl border border-gray-100 bg-white px-5 pb-8 pt-0 shadow-xl sm:px-8 md:px-12 md:pb-10">
            {/* Portrait breaking the top edge */}
            <div className="-mt-16 flex justify-center sm:-mt-20">
              <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-lg ring-4 ring-white sm:h-36 sm:w-36 md:h-44 md:w-44">
                {photo ? (
                  <Image
                    src={photo}
                    alt={employee.full_name}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600">
                    <span className="font-montserrat text-3xl font-bold text-white sm:text-4xl">
                      {initials(employee.full_name)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Identity */}
            <header className="mt-5 text-center sm:mt-6">
              <h1 className="font-montserrat text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl">
                {employee.full_name}
              </h1>

              {employee.designation && (
                <p className="mt-3 inline-block rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm">
                  {employee.designation}
                </p>
              )}

              <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 sm:mt-6 sm:w-20" />
            </header>

            {/* About */}
            {hasAbout && (
              <div
                className={`mx-auto mt-7 max-w-2xl sm:mt-8 ${proseClass}`}
                dangerouslySetInnerHTML={{ __html: employee.content as string }}
              />
            )}

            {/* Detail sections */}
            {sections.length > 0 && (
              <div className="mx-auto mt-10 max-w-2xl space-y-8 sm:mt-12 sm:space-y-10">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <section key={section.key}>
                      <div className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 shadow-sm sm:h-10 sm:w-10">
                          <Icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                        <h2 className="font-montserrat text-base font-bold text-gray-900 sm:text-lg">
                          {section.title}
                        </h2>
                      </div>
                      <div
                        className={proseClass}
                        dangerouslySetInnerHTML={{
                          __html: section.html as string,
                        }}
                      />
                    </section>
                  );
                })}
              </div>
            )}

            {!hasAnything && (
              <p className="mt-8 text-center text-gray-500">
                Profile details coming soon.
              </p>
            )}
          </article>

          <div className="mt-8 text-center">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-sky-200 hover:text-blue-600 hover:shadow-md"
            >
              <HiArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}