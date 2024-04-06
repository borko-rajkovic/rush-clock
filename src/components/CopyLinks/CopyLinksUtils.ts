import { FeaturesContextType } from "../../context/features-context/FeaturesContextType";

export const generateCopyLink = (features: FeaturesContextType) => {
  const rushCoefficient = features.rushCoefficient;
  const rushTimes = features.rushTimes;
  const linkHideAdmin = features.linkHideAdmin;
  const enableShadowClock = features.enableShadowClock;
  const displayDigitalClock = features.displayDigitalClock;
  const digitalClockType = features.clock24Type ? "24" : "12";

  const urlWithParams = new URL(window.location.href.split("?")[0]);

  urlWithParams.searchParams.append("hideAdmin", linkHideAdmin.toString());
  urlWithParams.searchParams.append("rushness", rushCoefficient.toString());
  urlWithParams.searchParams.append(
    "displayDigitalClock",
    displayDigitalClock.toString()
  );
  urlWithParams.searchParams.append(
    "enableShadowClock",
    enableShadowClock.toString()
  );
  urlWithParams.searchParams.append(
    "enableShadowClock",
    enableShadowClock.toString()
  );
  urlWithParams.searchParams.append("digitalClockType", digitalClockType);
  urlWithParams.searchParams.append("rushType", rushTimes.rushType);
  urlWithParams.searchParams.append(
    "customRushTimeFrom",
    rushTimes.customRushTimes.from.toString()
  );
  urlWithParams.searchParams.append(
    "customRushTimeTo",
    rushTimes.customRushTimes.to.toString()
  );
  urlWithParams.searchParams.append("hueColor", features.hueColor.toString());

  return urlWithParams.toString();
};

export const generateCopyEmbeddedLink = (features: FeaturesContextType) => {
  return `<iframe src="${generateCopyLink(
    features
  )}" allowtransparency="true" frameborder="0" width="100%" height="700px"></iframe>`;
};
