// src/lib/employees.ts
import "server-only";
import type { Employee, EmployeeSummary } from "@/types/employee";

const API_BASE = process.env.API_BASE_URL;

if (!API_BASE) {
    throw new Error("API_BASE_URL is not set. Add it in Hostinger → Environment Variables.");
}

/**
 * Your Express controllers may wrap payloads as { success, data } or return
 * them bare. This tolerates both — delete the branch you don't use.
 */
function unwrap<T>(json: unknown): T | null {
    if (json && typeof json === "object" && "data" in json) {
        return (json as { data: T }).data ?? null;
    }
    return (json as T) ?? null;
}

export async function getEmployees(): Promise<EmployeeSummary[]> {
    const res = await fetch(`${API_BASE}/api/employees`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to load employees (${res.status})`);
    }

    const list = unwrap<EmployeeSummary[]>(await res.json());
    if (!Array.isArray(list)) return [];


    // console.log("[employees] raw:", list);
    // console.log("[employees] unwrapped count:", Array.isArray(list) ? list.length : "NOT AN ARRAY");

    return [...list].sort((a, b) => {
        if (a.display_order !== b.display_order) {
            return a.display_order - b.display_order;
        }
        return a.full_name.localeCompare(b.full_name);
    });
}

export async function getEmployeeBySlug(slug: string): Promise<Employee | null> {
    const res = await fetch(
        `${API_BASE}/api/employees/slug/${encodeURIComponent(slug)}`,
        { cache: "no-store" }
    );

    if (res.status === 404) return null;
    if (!res.ok) {
        throw new Error(`Failed to load employee "${slug}" (${res.status})`);
    }

    return unwrap<Employee>(await res.json());
}