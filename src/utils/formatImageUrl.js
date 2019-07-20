const formatImageUrl = (url, width, height) => {
  return url.replace('{width}', width).replace('{height}', height);
};

export default formatImageUrl;