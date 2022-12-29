export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\|/g, "or")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
