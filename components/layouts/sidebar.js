import { useEffect, useRef, useState } from "react";
import { assetList } from "../../data/assetList";
import AsssetPopup from "../assetPopup";

export default function Sidebar({ open }) {
  console.log(assetList);
  const [modalOn, setModalOn] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const inputEl = useRef();

  const assetOnClick = () => setModalOn(!modalOn);
  const assetOnBlur = () => modalOn && setModalOn(false);

  // 종목 검색 필터
  const searchStock = (e) => {
    console.log(e.target.value);
    // assetList에서 입력된 종목 검색
    const words = assetList.filter((asset) =>
      asset.name.includes(e.target.value.toLowerCase())
    );
    // console.log(words);
    setSearchList(words);
  };

  return (
    <div
      className={`${
        // open ? "hidden" : ""
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
              placeholder="Search..."
              className="w-full py-1 pl-2 pr-10 text-sm rounded-md focus:outline-none"
              // value={assetList[0].name}
              onChange={searchStock}
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
          {modalOn && (
            <AsssetPopup
              modalOn={modalOn}
              setModalOn={setModalOn}
              searchList={searchList}
              ref={inputEl}
            />
          )}
          {/* {
            <AsssetPopup
              modalOn={modalOn}
              setModalOn={setModalOn}
              searchList={searchList}
              ref={inputEl}
            />
          } */}

          {/* indecator box */}
          <div className="relative border border-slate-300 hover:border-slate-400">
            <input
              type="search"
              name="Search"
              placeholder="Search Indicators"
              className="w-full py-1 pl-2 pr-10 text-sm rounded-md focus:outline-none"
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
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <a
              href="#"
              code={"BINANCE:BTCUSDT"}
              onClick={clickList}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
              BINANCE:BTCUSDT
              {/* <p className="text-gray-800">BINANCE:BTCUSDT</p> */}
            </a>
            <li
              className="flex items-center p-2 space-x-3 rounded-sm"
              code="BITMEX:XBTUSD"
              // onClick={() => console.log("click 2")}
              onClick={clickList}
            >
              {/* <a
                href="#"
                code="BITMEX:XBTUSD"
                onClick={clickList}
                className="flex items-center p-2 space-x-3 rounded-md"
              > */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg> */}
              BITMEX:XBTUSD
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function clickList(e) {
  const code = e.target.getAttribute("code");
  console.log(code);
}
