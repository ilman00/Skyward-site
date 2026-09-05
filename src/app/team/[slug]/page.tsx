import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiChevronRight } from "react-icons/hi";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { getEmployeeBySlug } from "@/lib/employees";

export const dynamic = "force-dynamic";

interface TeamProfilePageProps {
  params: Promise<{ slug: string }>;
}

function toPlainText(html: string | null, limit = 160): string {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
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
    toPlainText(employee.content) || `${employee.full_name} at SkywardVision.`;

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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 pb-32 pt-6">
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
            className="flex items-center gap-2 text-sm text-sky-100"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <HiChevronRight className="h-4 w-4 text-sky-200/70" aria-hidden="true" />
            <Link href="/team" className="transition-colors hover:text-white">
              Our Team
            </Link>
            <HiChevronRight className="h-4 w-4 text-sky-200/70" aria-hidden="true" />
            <span className="font-medium text-white">{employee.full_name}</span>
          </nav>
        </div>
      </section>

      {/* Card lifted over the hero */}
      <section className="container mx-auto -mt-24 px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          <article className="animate-fadeSlide rounded-2xl border border-gray-100 bg-white px-6 pb-10 pt-0 shadow-xl md:px-12">
            {/* Portrait breaking the top edge */}
            <div className="-mt-20 flex justify-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-white shadow-lg md:h-44 md:w-44">
                {photo ? (
                  <Image
                    src={photo}
                    alt={employee.full_name}
                    fill
                    unoptimized
                    priority
                    sizes="176px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600">
                    <span className="font-montserrat text-4xl font-bold text-white">
                      {initials(employee.full_name)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Identity */}
            <header className="mt-6 text-center">
              <h1 className="font-montserrat text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
                {employee.full_name}
              </h1>

              {employee.designation && (
                <p className="mt-3 inline-block rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                  {employee.designation}
                </p>
              )}

              <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
            </header>

            {/* Bio */}
            {employee.content ? (
              <div
                className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.8] text-gray-700 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-700 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:font-montserrat [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_li]:mb-1.5 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-5 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-sky-400"
                dangerouslySetInnerHTML={{ __html: employee.content }}
              />
            ) : (
              <p className="mt-8 text-center text-gray-500">
                Profile details coming soon.
              </p>
            )}
          </article>

          <div className="mt-8 text-center">
            <Link
              href="/team"
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