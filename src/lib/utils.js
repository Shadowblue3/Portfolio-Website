import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * This is used by Aceternity UI components
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
