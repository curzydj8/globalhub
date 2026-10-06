export const asset = (p: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${p}`;
};
