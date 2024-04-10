export const initialDate = new Date();

export const calculateHourRushTimes = (date = initialDate) => {
  const from = new Date().setHours(date.getHours(), 0, 0, 0);
  const to = from + 60 * 60 * 1000;

  return { from, to };
};

export const calculateDayRushTimes = () => {
  const from = new Date().setHours(0, 0, 0, 0);
  const to = from + 24 * 60 * 60 * 1000;

  return { from, to };
};
