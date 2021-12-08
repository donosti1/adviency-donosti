export const random = {
  get number() {
    return Math.round(Math.random() * 6) + 1;
  },
  get boolean() {
    return Math.random() < 0.5;
  },
};
