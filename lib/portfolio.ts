/**
 * Portfolio catalog — project photos grouped by category and stage.
 * Files live in /public/portfolio.
 * The on-site "Our Work" gallery shows ONLY finished shots.
 * In-progress ("during") shots are kept here for reference and for sourcing
 * before/after pairs.
 */

export type PortfolioCategory = {
  key: string;
  label: string;
  blurb: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  { key: "kitchen", label: "Kitchens", blurb: "Custom cabinetry, quartz islands and full layouts." },
  { key: "bathroom", label: "Bathrooms", blurb: "Tile, glass and spa-grade fixtures." },
  { key: "deck", label: "Decks & Patios", blurb: "Composite decks, rooftop decks and railings." },
  { key: "addition", label: "Additions & Sunrooms", blurb: "Screened porches and room additions." },
  { key: "siding", label: "Siding & Exteriors", blurb: "Siding, facades and whole-home exteriors." },
  { key: "roofing", label: "Roofing", blurb: "Shingle and standing-seam metal roofing." },
  { key: "doors", label: "Windows & Doors", blurb: "Entry doors, French doors and windows." },
  { key: "interior", label: "Interiors", blurb: "Staircases, living spaces and finish carpentry." },
];

export type Shot = { src: string; cat: string; stage: "finished" | "during" };

const f = (id: string): string => `/portfolio/IMG_${id}.jpg`;

/** Per-category file ids, split by stage. Finished shots lead. */
const groups: Record<string, { finished: string[]; during: string[] }> = {
  kitchen: {
    finished: ["5631", "5632", "5633", "5731", "2914", "2917", "3506", "3507", "3450", "2516", "4582", "4608", "4609", "5567", "1761", "2884", "2903", "0243", "0473"],
    during: ["3080", "3560", "2811", "1557", "1558", "0326", "0327", "0328", "0664", "1081"],
  },
  bathroom: {
    finished: ["3962", "3289", "3492", "3288", "3944", "6242", "5365", "5366"],
    during: [],
  },
  deck: {
    finished: ["5548", "5550", "5552", "5553", "0946", "0947", "5259", "5260", "5261", "6119", "6120", "0701", "0703", "0704", "0711", "0652", "2366", "2886", "3048", "3258", "3259", "3672", "3852", "3853", "3854", "3933", "1823", "5547", "6259", "2321", "5866", "1526", "0752"],
    during: ["6261", "0918", "0557", "0566", "0614", "0631", "2244", "2245", "2320", "2322", "3041", "5145", "5167", "5234", "5861", "4389"],
  },
  addition: {
    finished: ["5953", "5768", "5769", "1467", "1329", "1415", "0705", "0706", "1508", "1507", "1824", "3481", "1373"],
    during: ["1308", "1414", "1949", "1950", "4655", "1501"],
  },
  siding: {
    finished: ["1547", "1287", "1427", "1533", "2217", "2365", "2367", "2368", "3244", "2733", "4315"],
    during: ["4978", "5053", "5082", "5083", "7978", "3999", "4005"],
  },
  roofing: {
    finished: ["6318", "2272", "0766", "0767"],
    during: ["6316", "1023", "1272", "1943", "5348", "5349", "1265"],
  },
  doors: {
    finished: ["1609", "1608", "0594", "0595", "1851", "4228", "4668", "3140", "4234", "4235"],
    during: [],
  },
  interior: {
    finished: ["0200", "0201", "0282", "0284", "1924", "1889", "1727", "1852", "1854", "0464", "0826"],
    during: ["0862", "0863", "1225", "1887", "0143", "3271", "3283", "3800"],
  },
};

/** Every shot, finished + during, in category display order. */
export const portfolio: Shot[] = portfolioCategories.flatMap((c) => [
  ...groups[c.key].finished.map((id) => ({ src: f(id), cat: c.key, stage: "finished" as const })),
  ...groups[c.key].during.map((id) => ({ src: f(id), cat: c.key, stage: "during" as const })),
]);

/** Finished-only — what the public "Our Work" gallery displays. */
export const finishedPortfolio: Shot[] = portfolio.filter((s) => s.stage === "finished");

export function countFinishedByCat(key: string): number {
  return finishedPortfolio.filter((s) => s.cat === key).length;
}

/**
 * Before/After pairs for the comparison sliders.
 * Populated once the client identifies which photos pair together.
 * Each pair: { before, after, caption }. The "before" photo is then removed
 * from the Our Work gallery via the `removedFromGallery` list below.
 */
export type BeforeAfterPair = {
  before: string;
  after: string;
  caption: string;
  /** "contain" shows the full (zoomed-out) image instead of cropping to fill. */
  fit?: "cover" | "contain";
};
export const beforeAfterPairs: BeforeAfterPair[] = [
  { before: f("0631"), after: f("0652"), caption: "Backyard composite deck" },
  { before: f("4655"), after: f("4668"), caption: "New patio doors & siding" },
  { before: f("5145"), after: f("5167"), caption: "Elevated deck & paver patio" },
  { before: f("2245"), after: f("2272"), caption: "New architectural shingle roof" },
  { before: f("1501"), after: f("1508"), caption: "Sunroom addition" },
  { before: f("3800"), after: f("0464"), caption: "Custom staircase & wainscoting", fit: "contain" },
  { before: f("1265"), after: f("1272"), caption: "New skylight installation" },
  { before: f("0143"), after: f("1081"), caption: "Commercial space buildout", fit: "contain" },
  { before: f("4005"), after: f("4315"), caption: "Whole-home exterior transformation" },
  { before: f("4389"), after: f("0752"), caption: "Hillside pool & deck", fit: "contain" },
];

/** File ids to hide from the Our Work gallery (e.g. "before" photos moved to the slider). */
export const hiddenFromGallery: string[] = ["0631", "4655", "5145", "2245", "1501", "3800", "1373", "1265", "0143", "4005", "4389"];
