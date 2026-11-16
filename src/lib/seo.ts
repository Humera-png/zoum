// Keep titles and meta descriptions inside what Google shows in results
// (about 60 characters for titles, about 160 for descriptions).

/** "Page | ZOUM Consultancy", or the shorter "Page | ZOUM" if that would be cut off. */
export function pageTitle(name: string) {
  const full = `${name} | ZOUM Consultancy`;
  return full.length <= 62 ? full : `${name} | ZOUM`;
}

/** Shorten to at most `max` characters, ending on a full sentence or word. */
export function metaDescription(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const sentence = cut.lastIndexOf(". ");
  if (sentence > max * 0.6) return cut.slice(0, sentence + 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\-–]$/, "") + "…";
}
