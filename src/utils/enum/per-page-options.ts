export const PER_PAGE_OPTIONS = [8, 16, 24] as const;
export type PerPageOption = (typeof PER_PAGE_OPTIONS)[number];
