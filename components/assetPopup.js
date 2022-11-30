import React, { forwardRef } from "react";
import Image from "next/image";
import useStore from "../store/store";

// export default function AsssetPopup((props, ref)) {
const AssetPopup = forwardRef((props, ref) => {
  const { modalOn, setModalOn, assetList, searchAssetList } = props;
  const setSelectedAsset = useStore((state) => state.setSelectedAsset);

  const selectList = (asset) => {
    console.log("select asset ", asset);
    setModalOn(!modalOn);

    // input 에 종목 표시
    ref.current.value = asset.display_name;

    // 차트 변경
    setSelectedAsset(asset);
  };

  const makeList = (asset) => {
    return (
      <li key={asset.symbol} onClick={() => selectList(asset)}>
        <div className="flex p-1 text-gray-600 hover:bg-gray-100 cursor-pointer">
          <Image
            src={asset.src}
            alt="asset icon"
            className="m-1"
            width={16}
            height={16}
          />
          <span className="ml-1">{asset.display_name}</span>
          <span className="flex-1"></span>
          <span className="mr-1">
            <small>{asset.symbol}</small>
          </span>
        </div>
      </li>
    );
  };

  return (
    <div className="relative">
      {/* <div className={modalOn ? "relative" : "hidden relative"}> */}
      <div className="absolute bg-white border z-10 w-full">
        <ul>
          {searchAssetList.length > 0
            ? searchAssetList.map((asset) => makeList(asset))
            : assetList.map((asset) => makeList(asset))}
        </ul>
      </div>
    </div>
  );
});

// eslint 오류 방지
AssetPopup.displayName = "AssetPopup";
export default AssetPopup;
