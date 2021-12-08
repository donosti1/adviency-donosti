import { Gift } from "./types";
import { random } from "./utils/random";
export const sampleGifts: Gift[] = [
  { id: 1, title: "Mantecol", qty: random.number },
  { id: 2, title: "A2 X5", qty: random.number },
  { id: 3, title: "Mug de Vercel", qty: random.number },
];
