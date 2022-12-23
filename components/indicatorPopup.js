import { useRef } from "react";
import useStore from "../store/store";

export default function IndicatorPopup() {
  const {
    selectedIndicator,
    setSelectedIndicator,
    indicatorModalOn,
    setIndicatorModalOn,
  } = useStore();
  const lastSelIndic = selectedIndicator[selectedIndicator.length - 1];
  // console.log("lastSelIndic:", lastSelIndic);
  const daysRef = useRef();
  const buyRef = useRef();
  const sellRef = useRef();

  const onClose = () => {
    setIndicatorModalOn();
    // list check 해제. selectedIndicator - lastSelIndic
    setSelectedIndicator(lastSelIndic);
  };

  const onChange = () => {
    setIndicatorModalOn();
    // set indicator
    const newData = {
      name:
        lastSelIndic.code == "MA"
          ? lastSelIndic.code + daysRef.current.value
          : lastSelIndic.code,
      // display_name: "Moving average",
      code: lastSelIndic.code,
      color:
        lastSelIndic.code == "MA"
          ? lastSelIndic.color[daysRef.current.value]
          : lastSelIndic.color,
      path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      description: "",
      contents: {
        days: [daysRef.current.value],
        buy: [buyRef.current.value],
        sell: [sellRef.current.value],
      },
    };
    setSelectedIndicator(lastSelIndic); // 기존거 없애고
    setSelectedIndicator(newData); // 새거 추가
  };

  return (
    <div
      className={`modal fade fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-10 outline-none overflow-x-hidden overflow-y-auto ${
        indicatorModalOn ? "" : "hidden"
      }`}
      // id="exampleModal"
      // tabindex="-1"
      // aria-labelledby="exampleModalLabel"
      // aria-hidden="true"
    >
      <div className="modal-dialog relative w-fit h-auto m-auto top-1/4  pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 mb-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              {lastSelIndic ? lastSelIndic.display_name : "Indicator settings"}
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              // data-bs-dismiss="modal"
              // aria-label="Close"
            ></button>
          </div>
          <div className="modal-body py-2 m-auto">
            Days :
            <select ref={daysRef}>
              {lastSelIndic
                ? lastSelIndic.contents.days.map((t, idx) => {
                    return <option key={idx}>{t}</option>;
                  })
                : ""}
            </select>
          </div>
          <div className="modal-body py-2 m-auto">
            Buy :
            <select ref={buyRef}>
              {lastSelIndic
                ? lastSelIndic.contents.buy.map((t, idx) => {
                    return <option key={idx}>{t}</option>;
                  })
                : ""}
            </select>
            {lastSelIndic ? lastSelIndic.contents.unit : ""}
          </div>
          <div className="modal-body py-2 m-auto">
            Sell :
            <select ref={sellRef}>
              {lastSelIndic
                ? lastSelIndic.contents.sell.map((t, idx) => {
                    return <option key={idx}>{t}</option>;
                  })
                : ""}
            </select>
            {lastSelIndic ? lastSelIndic.contents.unit : ""}
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 mt-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
              // data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
          ml-1"
              onClick={onChange}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
