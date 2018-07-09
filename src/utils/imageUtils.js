import { CLOUDINARY_URL } from '../constants/urls';

export const buildCloudinaryImageUrl = (path, options) => {
  let params = [];

  Object.keys(options).forEach(key => {
    params.push(`${key}_${options[key]}`);
  });

  const finalUrl = `${CLOUDINARY_URL}/${params.join(',')}/${path}`;
  if (finalUrl.indexOf('http') === 0) {
    return finalUrl;
  } else if (finalUrl.indexOf('//') === 0) {
    return `https:${finalUrl}`;
  } else {
    return `https://${finalUrl}`;
  }
};
