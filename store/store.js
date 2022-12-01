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
      // selectIndicator와 비교. 있으면 빼고, 없으면 추가
      // TODO: 3개 까지 제한 걸기
      set((state) => ({
        selectedIndicator:
          state.selectedIndicator.length > 0
            ? state.selectedIndicator.indexOf(indicator) > -1
              ? [
                  ...state.selectedIndicator.filter(
                    (t) => t.code !== indicator.code
                  ),
                ]
              : [...state.selectedIndicator, indicator]
            : [indicator],
      }));
    },
  }))
);

export default useStore;
