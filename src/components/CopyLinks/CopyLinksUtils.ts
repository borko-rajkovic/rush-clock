import { FeaturesContextType } from "../../context/features-context/FeaturesContextType";

export const generateCopyLink = (features: FeaturesContextType) => {
  const rushCoefficient = features.rushCoefficient;
  const enableShadowClock = features.enableShadowClock;

  const urlWithParams = new URL(window.location.href.split("?")[0]);

  urlWithParams.searchParams.append("hideAdmin", "true");
  urlWithParams.searchParams.append("rushness", rushCoefficient.toString());
  urlWithParams.searchParams.append(
    "enableShadowClock",
    enableShadowClock.toString()
  );

  return urlWithParams.toString();
};

export const generateCopyEmbeddedLink = (features: FeaturesContextType) => {
  return `<iframe src="${generateCopyLink(
    features
  )}" allowtransparency="true" frameborder="0" width="100%" height="700px"></iframe>`;
};
