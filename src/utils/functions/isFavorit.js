export const isFavorite = (id, favorits) => {

  return favorits.some((item) => item === id);
};
