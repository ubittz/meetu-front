export const getImageURL = (image?: File | string) => {
  if (!image || typeof image === 'string') {
    return image;
  }

  return URL.createObjectURL(image);
};
