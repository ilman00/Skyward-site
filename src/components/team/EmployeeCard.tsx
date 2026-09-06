// src/components/team/EmployeeCard.tsx
import Image from "next/image";
import Link from "next/link";
import { HiUser } from "react-icons/hi";
import { cloudinaryUrl } from "@/lib/cloudinary";
import type { EmployeeSummary } from "@/types/employee";

interface EmployeeCardProps {
  employee: EmployeeSummary;
  index: number;
}

const EmployeeCard = ({ employee, index }: EmployeeCardProps) => {
  const photo = cloudinaryUrl(employee.photo_url, { width: 400, height: 400 });

  return (
    <Link
      href={`/our-team/${employee.slug}`}
      className="group animate-fadeSlide block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        {photo ? (
          <Image
            src={photo}
            alt={employee.full_name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
            <HiUser className="h-16 w-16 text-blue-300" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="p-5 text-center">
        <h3 className="text-base font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
          {employee.full_name}
        </h3>
        {employee.designation && (
          <p className="mt-1 text-sm text-gray-600">{employee.designation}</p>
        )}
        <span className="mx-auto mt-3 block h-[2px] w-0 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 group-hover:w-12" />
      </div>
    </Link>
  );
};

export default EmployeeCard;