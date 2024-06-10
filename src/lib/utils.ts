import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) {
    totalMonths -= 1;
  }

  return Number((totalMonths / 12).toFixed(1));
}
