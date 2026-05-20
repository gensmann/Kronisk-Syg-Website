// Centralized image asset catalog. Filenames map to /public/images/<name>-{960,1600}.webp.

export type ImgRole =
  | "hero-ship"
  | "ship-schematic"
  | "kronisk-syg-logo"
  | "character-nora"
  | "character-inge"
  | "character-kaj"
  | "character-valentina"
  | "character-valentino"
  | "crew-meerkats"
  | "scene-engine-frogs"
  | "scene-captain-bear"
  | "scene-cook-seal"
  | "scene-brass-owl"
  | "scene-singer-shepherd"
  | "scene-singer-retriever"
  | "scene-drummer-bear"
  | "scene-lemur"
  | "scene-deck"
  | "scene-aux";

const map: Record<ImgRole, string> = {
  "hero-ship": "hero-ship",
  "ship-schematic": "ship-schematic",
  "kronisk-syg-logo": "kronisk-syg-logo",
  "character-nora": "character-nora",
  "character-inge": "character-inge",
  "character-kaj": "character-kaj",
  "character-valentina": "character-valentina",
  "character-valentino": "character-valentino",
  "crew-meerkats": "crew-meerkats",
  "scene-engine-frogs": "scene-1",
  "scene-captain-bear": "scene-2",
  "scene-cook-seal": "scene-3",
  "scene-brass-owl": "scene-4",
  "scene-singer-shepherd": "scene-5",
  "scene-singer-retriever": "scene-6",
  "scene-drummer-bear": "scene-7",
  "scene-lemur": "scene-8",
  "scene-deck": "scene-9",
  "scene-aux": "scene-10",
};

export function img(role: ImgRole, width: 960 | 1600 = 1600) {
  return `/images/${map[role]}-${width}.webp`;
}
