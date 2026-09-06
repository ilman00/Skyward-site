// src/app/team/page.tsx
import type { Metadata } from "next";
import EmployeeCard from "@/components/team/EmployeeCard";
import { getEmployees } from "@/lib/employees";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Team | SkywardVision",
  description:
    "Meet the team behind SkywardVision — the people driving our advertising and marketing solutions across Pakistan.",
};

export default async function TeamPage() {
  const employees = await getEmployees();

  return (
    <main>
      <section className="bg-gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-3xl font-bold md:text-4xl">
            Our Team
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-sky-50 md:text-base">
            The people behind SkywardVision.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {employees.length === 0 ? (
          <p className="py-16 text-center text-gray-600">
            Team profiles are being updated. Please check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {employees.map((employee, index) => (
              <EmployeeCard
                key={employee.employee_id}
                employee={employee}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}