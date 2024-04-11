import moment from "moment";

export const CUSTOM_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export const numberToCustomDateString = (input: number) => {
  return moment(input).format(CUSTOM_DATE_FORMAT);
};

export const customDateStringToMoment = (input: string) => {
  return moment(input, CUSTOM_DATE_FORMAT);
};
