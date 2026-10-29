// Selected from lib/domain.ts; application-specific constants omitted.
export class DomainError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.name = "DomainError";
    this.status = status;
  }
}
export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}
export function isExistingEmail(existingEmails: string[], candidate: string) {
  const normalized = normalizeEmail(candidate);
  return existingEmails.some((email) => normalizeEmail(email) === normalized);
}
export function readBoundedInteger(value: unknown, label: string, min: number, max: number, fallback?: number) {
  if ((value === "" || value === undefined || value === null) && fallback !== undefined) return fallback;
  const number = typeof value === "number" ? value : Number(value);
  if (!Number.isInteger(number) || number < min || number > max) throw new DomainError(`${label} باید عددی بین ${min} و ${max} باشد.`);
  return number;
}
