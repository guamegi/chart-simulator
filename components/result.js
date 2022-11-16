import { Screener } from "react-tradingview-embed";

export default function Result() {
  // TODO: 시뮬레이션 실행 후, 거래내역 데이터 리스트 표시
  return (
    <div className="w-full h-full bg-white border border-slate-300">
      <div className="p-3 font-medium text-gray-500 border-b truncate">
        Result
      </div>
      <div>
        <Screener
          widgetProps={{
            width: "100%",
            height: 300,
            defaultColumn: "overview",
            defaultScreen: "general",
            market: "crypto",
            // showToolbar: false,
            colorTheme: "light",
            locale: "en",
          }}
        />
      </div>
    </div>
  );
}
