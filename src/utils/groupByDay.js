const groupByDay = (data) => {
  const result = [];

  data.forEach((post) => {
    const date = new Date(post.created_utc * 1000);
    const day = date.getDay();
    const hour = date.getHours();

    if (!result[day]) {
      result[day] = Array.from({ length: 24 }, () => []);
    }

    result[day][hour].push(post);
  });

  return result;
};

export default groupByDay;
