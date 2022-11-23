import React, { forwardRef } from "react";
import Image from "next/image";
import { assetList } from "../data/assetList";

// export default function AsssetPopup((props, ref)) {
const AssetPopup = forwardRef((props, ref) => {
  const { modalOn, setModalOn, searchList } = props;

  const selectAssetList = (asset) => {
    // setModalOn(!modalOn);
    console.log("select asset ", asset);

    // input 에 종목 표시 교체
    ref.current.value = asset.display_name;
  };

  const makeAssetList = (asset) => {
    return (
      <li key={asset.symbol} onClick={() => selectAssetList(asset)}>
        <div className="flex p-1 hover:bg-gray-100 cursor-pointer">
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
      <div className="absolute bg-white border z-10 w-full">
        <ul>
          {searchList.length > 0
            ? searchList.map((asset) => makeAssetList(asset))
            : assetList.map((asset) => makeAssetList(asset))}
        </ul>
      </div>
    </div>
  );
});

// displayName을 준다.
AssetPopup.displayName = "Search";
export default AssetPopup;
