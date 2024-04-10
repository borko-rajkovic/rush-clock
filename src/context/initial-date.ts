export const initialDate = new Date();

export const calculateInitialHourRushStartAndFinish = () => {
  const from = new Date().setHours(initialDate.getHours(), 0, 0, 0);
  const to = from + 60 * 60 * 1000;

  return { from, to };
};

export const calculateInitialDayRushStartAndFinish = () => {
  const from = new Date().setHours(0, 0, 0, 0);
  const to = from + 24 * 60 * 60 * 1000;

  return { from, to };
};
