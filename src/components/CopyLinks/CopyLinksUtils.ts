import { FeaturesContextType } from "../../context/features-context/FeaturesContextType";
import { FEATURE_CONTEXT_DEFAULT_VALUES } from "../../context/features-context/default-values";

type SearchParamData = {
  value: string | number | boolean;
  defaultValue: string | number | boolean;
  paramName: string;
};

const addSearchParamIfNotDefault = (
  urlWithParams: URL,
  searchParamData: SearchParamData[]
) => {
  for (const { value, defaultValue, paramName } of searchParamData) {
    if (value !== defaultValue) {
      urlWithParams.searchParams.append(paramName, value.toString());
    }
  }
};

export const generateCopyLink = (features: FeaturesContextType) => {
  const rushCoefficient = features.rushCoefficient;
  const rushTimes = features.rushTimes;
  const linkHideAdmin = features.linkHideAdmin;
  const enableShadowClock = features.enableShadowClock;
  const displayDigitalClock = features.displayDigitalClock;
  const digitalClockType = features.clock24Type ? "24" : "12";
  const alarm = features.alarm;
  const hueColor = features.hueColor;

  const urlWithParams = new URL(window.location.href.split("?")[0]);

  const data: SearchParamData[] = [
    {
      value: linkHideAdmin,
      defaultValue: "",
      paramName: "hideAdmin",
    },
    {
      value: rushCoefficient.toFixed(2),
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.rushCoefficient.toFixed(2),
      paramName: "rushness",
    },
    {
      value: displayDigitalClock,
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.displayDigitalClock,
      paramName: "displayDigitalClock",
    },
    {
      value: enableShadowClock,
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.enableShadowClock,
      paramName: "enableShadowClock",
    },
    {
      value: digitalClockType,
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.clock24Type ? "24" : "12",
      paramName: "digitalClockType",
    },
    {
      value: rushTimes.rushType,
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.rushTimes.rushType,
      paramName: "rushType",
    },
    {
      value:
        rushTimes.rushType === "custom" ? rushTimes.customRushTimes.from : 0,
      defaultValue: 0,
      paramName: "customRushTimeFrom",
    },
    {
      value: rushTimes.rushType === "custom" ? rushTimes.customRushTimes.to : 0,
      defaultValue: 0,
      paramName: "customRushTimeTo",
    },
    {
      value: alarm,
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.alarm,
      paramName: "alarm",
    },
    {
      value: hueColor,
      defaultValue: FEATURE_CONTEXT_DEFAULT_VALUES.hueColor,
      paramName: "hueColor",
    },
  ];

  addSearchParamIfNotDefault(urlWithParams, data);

  return urlWithParams.toString();
};

export const generateCopyEmbeddedLink = (features: FeaturesContextType) => {
  return `<iframe src="${generateCopyLink(
    features
  )}" allowtransparency="true" frameborder="0" width="100%" height="700px"></iframe>`;
};
