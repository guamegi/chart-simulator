import create from "zustand";
import { devtools } from "zustand/middleware";

// const store = create((set) => ({
//   assetList: [],
//   addAsset: (asset) => {
//     set((state) => ({
//       assetList: [...state.assetList, asset],
//     }));
//   },
//   indicatorList: [],
// }));
// const useStore = create(devtools(store));

const useStore = create(
  devtools((set) => ({
    assetList: [],
    indicatorList: [],
    selectedAsset: "",
    selectedIndicator: [],
    setSelectedAsset: (asset) => {
      set(() => ({
        selectAsset: asset,
      }));
    },
    setSelectedIndicator: (indicator) => {
      set(() => ({
        selectedIndicator: [...indicator],
      }));
    },
    setAsset: (asset) => {
      set(() => ({
        assetList: [...asset],
      }));
    },
    setIndicator: (indicator) => {
      set(() => ({
        indicatorList: [...indicator],
      }));
    },
  }))
);

export default useStore;
