import { assetList } from "../data/assetList";

export default function AsssetPopup(props) {
  const { modalOn, setModalOn, searchList } = props;

  const selectAssetList = (symbol) => {
    // setModalOn(!modalOn);
    console.log("select asset ", symbol);

    // input 에 종목 표시 교체
  };

  const makeAssetList = (asset) => {
    return (
      <li key={asset.symbol} onClick={() => selectAssetList(asset.symbol)}>
        <div className="flex p-1 hover:bg-gray-200 cursor-pointer">
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
    <div className="absolute bg-white border z-10 w-full">
      <ul>
        {searchList.length > 0
          ? searchList.map((asset) => makeAssetList(asset))
          : assetList.map((asset) => makeAssetList(asset))}
      </ul>
    </div>
  );
}
