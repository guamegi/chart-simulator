import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    assetList: [],
    indicatorList: [],
    selectedAsset: "BTC",
    selectedIndicator: [],
    chart: null,

    setAssetList: (asset) => {
      set(() => ({
        assetList: [...asset],
      }));
    },
    setIndicatorList: (indicator) => {
      set(() => ({
        indicatorList: [...indicator],
      }));
    },
    setSelectedAsset: (asset) => {
      set(() => ({
        selectedAsset: asset,
      }));
    },
    setSelectedIndicator: (indicator) => {
      set(() => ({
        selectedIndicator: [indicator],
      }));
    },
    setChart: (chart) => {
      set(() => ({
        chart: chart,
      }));
    },
  }))
);

export default useStore;
