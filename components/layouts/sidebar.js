import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assetList } from "../../data/assetList";
import { indicatorList } from "../../data/indicatorList";
import useStore from "../../store/store";
import AssetPopup from "../assetPopup";

export default function Sidebar({ open }) {
  const [modalOn, setModalOn] = useState(false);
  const [searchAssetList, setSearchAssetList] = useState([]);
  const [searchIndicatorList, setSearchIndicatorList] = useState([]);
  const inputEl = useRef();
  const indicatorListEl = useRef();
  const {
    selectedAsset,
    selectedIndicator,
    setSelectedIndicator,
    setIndicatorList,
  } = useStore();

  useEffect(() => {
    // 종목 표시
    inputEl.current.value = selectedAsset.display_name;
    setIndicatorList(indicatorList);
  }, []);

  useEffect(() => {
    // indicator list 토글 표시 처리

    // 전체 색상 초기화
    indicatorListEl.current.childNodes.forEach((list) => {
      // list.childNodes[2].src = "/image/unchecked.png";
      list.childNodes[1].srcset = "/image/unchecked.png";
    });

    // 선택한 리스트 색상 변경
    indicatorListEl.current.childNodes.forEach((list) => {
      const code = list.getAttribute("code");
      selectedIndicator.forEach((ele) => {
        if (ele.code === code) {
          list.childNodes[1].srcset = "/image/checked.png";
        }
      });
    });
  }, [selectedIndicator]);

  const assetOnClick = () => setModalOn(!modalOn);
  const assetOnBlur = () => {
    // 종목 팝업 리스트 이벤트 안 먹는 문제로 딜레이 시킴
    setTimeout(() => {
      modalOn && setModalOn(false);
    }, 100);
  };

  // 종목 검색 필터
  const searchAsset = (e) => {
    // console.log(e.target.value);
    // assetList에서 입력된 종목 검색
    const list = assetList.filter((asset) =>
      asset.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    );
    // console.log(list);
    setSearchAssetList(list);
  };

  // 보조지표 검색 필터
  const searchIndicator = (e) => {
    // console.log(e.target.value);
    const text = e.target.value.toLowerCase();
    const list = indicatorList.filter((indicator) =>
      indicator.display_name.toLocaleLowerCase().includes(text)
    );
    // console.log(list);
    setSearchIndicatorList(list);
  };

  // 보조지표 리스트 클릭
  const clickList = (e) => {
    e.stopPropagation();
    const code = e.target.getAttribute("code");
    console.log(e.target);
    // set indicator
    const filterdIndicator = indicatorList.find((t) => t.code == code);
    console.log("code:", code, "filterdIndicator:", filterdIndicator);
    setSelectedIndicator(filterdIndicator);
  };

  const makeIndicatorList = (indicator) => {
    return (
      <li
        key={indicator.code}
        className="flex items-center p-2 space-x-3 rounded-sm cursor-pointer"
        code={indicator.code}
        onClick={clickList}
      >
        {/* <div className="w-5 h-5 text-gray-800 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={indicator.path}
            />
          </svg>
        </div> */}
        {indicator.display_name}
        <Image
          src="/image/unchecked.png"
          className="ml-auto"
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
        open ? "translate-x-0 w-80 p-4" : "-translate-x-64 w-0"
      } sticky flex flex-col h-screen bg-white shadow transition-[width] ease-in-out duration-300`}
    >
      <div className="space-y-3">
        <div className="space-y-3 pb-4 border-b">
          {/* asset box */}
          <div
            className="relative border border-slate-300 hover:border-slate-400"
            onClick={assetOnClick}
            onBlur={assetOnBlur}
          >
            <input
              ref={inputEl}
              type="search"
              name="Search"
              placeholder="Search Assets"
              className="w-full py-1 pl-2 pr-10 text-sm rounded-md focus:outline-none"
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
            <AssetPopup
              modalOn={modalOn}
              setModalOn={setModalOn}
              assetList={assetList}
              searchAssetList={searchAssetList}
              ref={inputEl}
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
