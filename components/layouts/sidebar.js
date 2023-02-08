import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assetList } from "../../data/assetList";
import { indicatorList } from "../../data/indicatorList";
import useStore from "../../store/store";
import AssetModal from "../assetModal";

export default function Sidebar({ toggleMenu }) {
  const [modalOn, setModalOn] = useState(false);
  const [searchAssetList, setSearchAssetList] = useState([]);
  const [searchIndicatorList, setSearchIndicatorList] = useState([]);
  const assetContainerEl = useRef();
  const assetInputEl = useRef();
  const indicatorListEl = useRef();
  const {
    selectedAsset,
    selectedIndicator,
    setSelectedIndicator,
    setIndicatorList,
    setIndicatorModalOn,
    clearSelectedIndicator,
  } = useStore();

  useEffect(() => {
    // 종목 표시 초기화
    assetInputEl.current.value = selectedAsset.display_name;
    setIndicatorList(indicatorList);
  }, []);

  useEffect(() => {
    // indicator list 토글 표시 처리
    // 전체 이미지 초기화
    indicatorListEl.current.childNodes.forEach((list) => {
      // list.childNodes[2].src = "/image/unchecked.png";
      list.childNodes[1].srcset = "/image/unchecked.png";
    });

    // 선택한 리스트 이미지 변경
    indicatorListEl.current.childNodes.forEach((list) => {
      const code = list.getAttribute("code");
      selectedIndicator.forEach((ele) => {
        if (ele.code === code) {
          list.childNodes[1].srcset = "/image/checked.png";
        }
      });
    });
  }, [selectedIndicator]);

  const onClickAsset = () => setModalOn(!modalOn);
  const onBlurAsset = () => {
    // 종목 팝업 리스트 이벤트 안 먹는 문제로 딜레이 시킴
    setTimeout(() => {
      modalOn && setModalOn(false);
    }, 100);
  };

  /** 종목 검색 필터 */
  const searchAsset = (e) => {
    // console.log(e.target.value);
    // assetList에서 입력된 종목 검색
    const list = assetList.filter((asset) =>
      asset.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchAssetList(list);
  };

  /** 보조지표 검색 필터 */
  const searchIndicator = (e) => {
    // console.log(e.target.value);
    const text = e.target.value.toLowerCase();
    const list = indicatorList.filter((indicator) =>
      indicator.display_name.toLocaleLowerCase().includes(text)
    );

    setSearchIndicatorList(list);
  };

  /** 보조지표 리스트 클릭 */
  const onClickIndicator = (e) => {
    const code = e.target.getAttribute("code");

    // set indicator
    const filterdIndicator = indicatorList.find((t) => t.code == code);
    // console.log("code:", code, "filterdIndicator:", filterdIndicator);
    setSelectedIndicator(filterdIndicator);

    // indicator popup 띄우기 + popup 컨텐츠 변경
    setIndicatorModalOn();
  };

  const makeIndicatorList = (indicator) => {
    return (
      <li
        key={indicator.code}
        className="flex items-center p-2 space-x-3 rounded-sm cursor-pointer"
        code={indicator.code}
        onClick={onClickIndicator}
      >
        {indicator.display_name}
        <Image
          src="/image/unchecked.png"
          className="ml-auto pointer-events-none"
          alt="checkbox"
          width={20}
          height={20}
        />
      </li>
    );
  };

  return (
    <div
      className={`${
        toggleMenu ? "translate-x-0 w-80 p-4" : "-translate-x-64 w-0"
      } sticky flex flex-col h-screen bg-white shadow`}
    >
      <div className="space-y-3">
        <div className="space-y-3 pb-4 border-b">
          {/* asset box */}
          <div
            ref={assetContainerEl}
            className="relative border border-slate-300 hover:border-slate-400"
            onClick={onClickAsset}
            onBlur={onBlurAsset}
          >
            <Image
              src="/image/symbol/btc.png"
              className="absolute ml-2 my-1.5"
              alt="asset icon"
              width={16}
              height={16}
            ></Image>
            <input
              ref={assetInputEl}
              type="search"
              name="Search"
              placeholder="Search Assets"
              className="w-full py-1 pl-7 pr-10 text-sm rounded-md focus:outline-none"
              // value={assetList[0].name}
              onChange={searchAsset}
            />
            <span className="absolute inset-y-0 right-0 flex items-center py-1">
              <button
                // type="submit"
                className="p-1 focus:outline-none focus:none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#8C8C8C"
                  strokeWidth={2}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </span>
          </div>

          {/* 종목 팝업 */}
          {modalOn && (
            <AssetModal
              assetList={assetList}
              searchAssetList={searchAssetList}
              assetContainerEl={assetContainerEl}
              ref={assetInputEl}
            />
          )}

          {/* indicator box */}
          <div className="relative border border-slate-300 hover:border-slate-400">
            <input
              type="search"
              name="Search"
              placeholder="Search Indicators"
              className="w-full py-1 pl-2 pr-10 text-sm rounded-md focus:outline-none"
              onChange={searchIndicator}
            />
            <span className="absolute inset-y-0 right-0 flex items-center py-1">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#8C8C8C"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        {/* indicator list */}
        <div className="flex-1">
          <div className="flex flex-col items-end py-1">
            {/* reset */}
            <button
              className="bg-gray-100 px-3 py-0 rounded border border-slate-300 hover:border-slate-400"
              onClick={clearSelectedIndicator}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-5"
                fill="none"
                viewBox="0 -4 30 40"
                stroke="#6b7280"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64c4.529,0,8.717,1.932,11.64,5.336V1h0.721v6.36
		H22V6.64h5.259C24.466,3.275,20.402,1.36,16,1.36C7.927,1.36,1.36,7.927,1.36,16c0,8.072,6.567,14.64,14.64,14.64
		c8.072,0,14.64-6.567,14.64-14.64h0.721C31.36,24.47,24.47,31.36,16,31.36z"
                />
              </svg>
            </button>
          </div>
          <ul className="pt-2 pb-4 space-y-1 text-sm" ref={indicatorListEl}>
            {searchIndicatorList.length > 0
              ? searchIndicatorList.map((indicator) =>
                  makeIndicatorList(indicator)
                )
              : indicatorList.map((indicator) => makeIndicatorList(indicator))}
          </ul>
        </div>
      </div>
    </div>
  );
}
