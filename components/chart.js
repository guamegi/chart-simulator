import { AdvancedChart, SymbolInfo } from "react-tradingview-embed";

export default function Chart() {
  // Todo: 선택 종목 name 받아오고, 해당 chart 생성

  return (
    <div className="w-full h-full bg-white border border-slate-300">
      {/* <div className="p-3 font-medium text-gray-500 border-b truncate">
        Bitcoin
      </div>
      <div className="flex p-3 text-gray-500 border-b">
        <div className="">
          <button
            className="bg-gray-100 w-10 px-auto py-1 mx-1 text-sm border border-slate-300 hover:border-slate-400"
            onClick={() => console.log("1D click")}
          >
            1D
          </button>
          <button
            className="bg-gray-100 w-10 px-auto py-1 mx-1 text-sm border border-slate-300 hover:border-slate-400"
            onClick={() => console.log("1W click")}
          >
            1W
          </button>
          <button
            className="bg-gray-100 w-10 px-auto py-1 mx-1 text-sm border border-slate-300 hover:border-slate-400"
            onClick={() => console.log("1M click")}
          >
            1M
          </button>
        </div>
        <div className="flex-1"></div>
        <div>
          date picker
          <div className="relative border border-slate-300 hover:border-slate-400">
            <input
              type="search"
              name="Search"
              placeholder="Search Indicators"
              className="w-full py-1 pl-2 pr-10 text-sm rounded-md focus:outline-none"
            />
          </div>
        </div>
      </div> */}

      <div>
        <SymbolInfo
          widgetProps={{
            // symbol: "BITMEX:XBTUSD",
            symbol: "BINANCE:BTCUSDT",
            width: "100%",
            locale: "en",
            colorTheme: "light",
            isTransparent: false,
          }}
        />
        <AdvancedChart
          widgetProps={{
            // autosize: true,
            // symbol: "NASDAQ:AAPL",
            symbol: "BINANCE:BTCUSDT",
            // interval: "D",
            range: "1D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            hide_side_toolbar: true,
            withdateranges: true,
            // enable_publishing: false,
            allow_symbol_change: true,
            // container_id: "tradingview_9aad7",
          }}
        />
      </div>
    </div>
  );
}
