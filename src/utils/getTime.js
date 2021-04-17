const getTime = (timestamp) => {
  const time = new Date(timestamp * 1000);
  return time.getTime();
};

export default getTime;
