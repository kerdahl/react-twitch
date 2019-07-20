import clientHeader from './Headers';

const getData = async url => {
  const apiRequest = new Request(url, {
    headers: clientHeader
  });
  const result = await fetch(apiRequest);
  const resultJSON = await result.json();
  return resultJSON.data;
};

export default getData;