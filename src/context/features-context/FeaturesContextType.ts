export type FeaturesContextType = {
  shadowVisible: boolean;
  setShadowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  clock24Type: boolean;
  setClock24Type: React.Dispatch<React.SetStateAction<boolean>>;
  rushCoefficient: number;
  setRushCoefficient: React.Dispatch<React.SetStateAction<number>>;
};
