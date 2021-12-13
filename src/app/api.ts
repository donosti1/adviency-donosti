import { sampleGifts, Users } from "./constants";

export default {
  gifts: {
    list: () => {
      const savedItems = localStorage.getItem("adviency");

      return savedItems ? JSON.parse(savedItems) : sampleGifts;
    },
    listById: (id: number) => {
      const savedItems = localStorage.getItem("adviency");

      if (savedItems) {
        return JSON.parse(savedItems).filter((it: any) => console.log(it));
      }
    },
  },
  owners: {
    list: () => {
      Users;
    },
  },
};
