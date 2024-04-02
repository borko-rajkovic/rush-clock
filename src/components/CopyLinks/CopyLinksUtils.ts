import { FeaturesContextType } from "../../context/features-context/FeaturesContextType";

export const generateCopyLink = (features: FeaturesContextType) => {
  const rushCoefficient = features.rushCoefficient;
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

  return urlWithParams.toString();
};

export const generateCopyEmbeddedLink = (features: FeaturesContextType) => {
  return `<iframe src="${generateCopyLink(
    features
  )}" allowtransparency="true" frameborder="0" width="100%" height="700px"></iframe>`;
};
