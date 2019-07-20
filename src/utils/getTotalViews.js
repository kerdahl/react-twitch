const getTotalViews = streams => {
  let totalViews = streams.reduce((acc, val) => {
    return acc + val.viewer_count;
  }, 0);

  return totalViews;
};

export default getTotalViews;