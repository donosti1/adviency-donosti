import { Gift } from "./types";
export const sampleGifts: Gift[] = [
  {
    id: 1,
    title: "Mantecol",
    qty: Math.round(Math.random() * 6) + 1,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Mantecol_logo.png/200px-Mantecol_logo.png",
  },
  {
    id: 2,
    title: "A2 X5",
    qty: Math.round(Math.random() * 6) + 1,
    imgSrc: "https://grupoa2.com/wp-content/uploads/2017/02/2-11.jpg",
  },
  {
    id: 3,
    title: "Mug de Vercel",
    qty: Math.round(Math.random() * 6) + 1,
    imgSrc: "https://edge-mug.vercel.app/mug.png",
  },
];