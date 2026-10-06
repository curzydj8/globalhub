export const LIKE_WEIGHT = 50;

export interface RankedSite {
  id: string;
  views: number;
  likes: number;
  updated: string;
}

export function score(s: RankedSite): number {
  return s.views + s.likes * LIKE_WEIGHT;
}

export function trendingScore(s: RankedSite, today: Date): number {
  const age = Math.max(0, (today.getTime() - new Date(s.updated).getTime()) / 86400000);
  return score(s) / Math.pow(age + 2, 1.4);
}
