/**
 * Sanity data formatting utilities.
 * Pure helpers that transform CMS values into display strings.
 */

/**
 * Format a date range from Sanity `date` fields into a human-readable period.
 *
 * @param startDate - ISO date string (e.g. "2024-01-15")
 * @param endDate   - ISO date string or undefined/null (ongoing)
 * @returns e.g. "2024 - 2025" or "2025 - Present"
 */
export function formatPeriod(startDate: string, endDate?: string | null): string {
  const startYear = new Date(startDate).getUTCFullYear();
  const endYear = endDate ? new Date(endDate).getUTCFullYear() : "Present";
  return `${startYear} - ${endYear}`;
}

/**
 * Extract the year from a Sanity `date` field.
 *
 * @param date - ISO date string (e.g. "2023-06-01")
 * @returns e.g. "2023"
 */
export function formatYear(date: string): string {
  return new Date(date).getUTCFullYear().toString();
}
