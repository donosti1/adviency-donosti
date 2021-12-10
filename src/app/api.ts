import { sampleGifts } from "./constants";

export default {
  gifts: {
    list: () => {
      const savedItems = localStorage.getItem("adviency");

      return savedItems ? JSON.parse(savedItems) : sampleGifts;
    },
  },
};
