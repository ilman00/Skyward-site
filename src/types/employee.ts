// src/types/employee.ts

/** Shape returned by GET /api/employees (public list — active only) */
export interface EmployeeSummary {
  employee_id: string;
  slug: string;
  full_name: string;
  designation: string | null;
  photo_url: string | null;
  display_order: number;
}

/** Shape returned by GET /api/employees/slug/:slug (full public profile) */
export interface Employee extends EmployeeSummary {
  /** Tiptap HTML, already sanitized server-side with sanitize-html */
  content: string | null;
  created_at: string;
  updated_at: string;
}