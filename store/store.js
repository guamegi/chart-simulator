import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    assetList: [],
    indicatorList: [],
    selectedAsset: {
      name: "bitcoin",
      display_name: "Bitcoin",
      symbol: "BTC",
      code_set: "KRW-BTC",
      category: "coin",
      src: "/image/btc.png",
    },
    selectedIndicator: [],

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
        selectedAsset: { ...asset },
      }));
    },
    setSelectedIndicator: (indicator) => {
      set((state) => ({
        selectedIndicator: [
          ...state.selectedIndicator.filter((t) => t !== indicator),
          indicator,
        ],
      }));
    },
  }))
);

export default useStore;
