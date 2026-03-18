const KEY = "fv_favorites";
const RATINGS_KEY = "fv_ratings";

export function getFavorites(): number[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleFavorite(id: number): number[] {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1);
  else favs.push(id);
  localStorage.setItem(KEY, JSON.stringify(favs));
  return favs;
}

export function getRatings(): Record<number, number> {
  try {
    return JSON.parse(localStorage.getItem(RATINGS_KEY) || "{}");
  } catch {
    return {};
  }
}

export function setRating(id: number, rating: number): Record<number, number> {
  const ratings = getRatings();
  ratings[id] = rating;
  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  return ratings;
}
