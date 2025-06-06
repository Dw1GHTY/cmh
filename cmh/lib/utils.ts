import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toLowerCaseUnderscores(input: string): string {
  return input.toLowerCase().replace(/ /g, "_");
}