import { useEffect, useRef } from "react";
// import { SymbolInfo } from "react-tradingview-embed";
import { createChart, CrosshairMode } from "lightweight-charts";
import { priceData } from "../data/priceData";
import { volumeData } from "../data/volumeData";

export default function Chart() {
  const tvChartRef = useRef(); // trading view

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    makeChart();

    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  const makeChart = () => {
    // if (chart) {
    if (tvChartRef.current.children.length) {
      console.log("chart 있음");
      return;
    }

    console.log("chart 없음");
    const chart = createChart(tvChartRef.current, {
      width: tvChartRef.current.offsetWidth,
      height: 500,
      layout: {
        // background: "#ffffff",
      },
      options: {
        responsive: true,
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      // priceScale: {
      //   position: "right",
      // },
      rightPriceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.25,
        },
        borderVisible: true,
      },
      watermark: {
        visible: true,
        fontSize: 34,
        horzAlign: "center",
        vertAlign: "center",
        color: "rgba(171, 71, 188, 0.1)",
        text: "Simple ChartBook",
      },
    });

    // Make Chart Responsive with screen resize
    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== tvChartRef.current) {
        return;
      }
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    }).observe(tvChartRef.current);

    // line drawing test
    // let lineSeries = chart.addLineSeries();
    // lineSeries.setData([
    //   { time: "2018-12-12", value: 144.11 },
    //   { time: "2018-12-13", value: 131.74 },
    //   { time: "2018-12-14", value: 121.74 },
    //   { time: "2018-12-17", value: 130.74 },
    //   { time: "2018-12-18", value: 121.74 },
    // ]);

    let candleSeries = chart.addCandlestickSeries();
    // candleSeries.setData(priceData[0].data);
    // TODO: symbol 별 데이터 호출, 상태관리 라이브러리 써야 함. assetPopup에서 눌린 종목으로 차트 데이터 로딩.
    candleSeries.setData(priceData[0].data);

    // marker 테스트
    candleSeries.setMarkers([
      {
        time: "2018-10-24",
        position: "aboveBar",
        color: "green",
        shape: "arrowDown",
        size: 2,
      },
      {
        time: "2018-11-25",
        position: "belowBar",
        color: "red",
        shape: "arrowUp",
        id: "id3",
        size: 2,
      },
      {
        time: "2018-12-10",
        position: "belowBar",
        color: "orange",
        shape: "arrowUp",
        id: "id4",
        text: "example",
        size: 2,
      },
    ]);

    let volumeSeries = chart.addHistogramSeries({
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });
    volumeSeries.setData(volumeData);
  };

  return (
    <div className="w-full h-full bg-white border border-slate-300">
      <div className="p-3 font-medium text-gray-500 border-b truncate">
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
            onClick={() => console.log("1Y click")}
          >
            1Y
          </button>
        </div>
        <div className="flex-1"></div>
        <div>
          {/* date picker */}
          <div className="relative border border-slate-300 hover:border-slate-400">
            <input
              type="search"
              name="Search"
              placeholder="date picker"
              className="w-full py-1 pl-2 pr-10 text-sm rounded-md focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex p-3 text-gray-500 justify-end border-b">
        <button
          className="bg-gray-100 px-4 py-1 text-sm border border-slate-300 hover:border-slate-400"
          onClick={() => console.log("simulation click")}
        >
          Go Simulation
        </button>
        {/* <button
          className="px-4 py-1 text-sm text-white bg-black"
          onClick={() => console.log("simulation click")}
        >
          Go Simulation
        </button> */}
      </div>
      <div>
        {/* <SymbolInfo
          widgetProps={{
            // symbol: "BITMEX:XBTUSD",
            symbol: "BINANCE:BTCUSDT",
            width: "100%",
            locale: "en",
            colorTheme: "light",
            isTransparent: false,
          }}
        /> */}
        <div id="tvChart" ref={tvChartRef}></div>
        {/* <AdvancedChart
          widgetProps={{
            symbol: "BINANCE:BTCUSDT",
            // interval: "h",
            range: "1D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            hide_side_toolbar: true,
            withdateranges: true,
            // hide_legend: true,
            enable_publishing: false,
            allow_symbol_change: true,
            study_count_limit: 2,
            // container_id: "tradingview_9aad7",
            // studies_overrides: {
            //   "moving average exponential.length": 20,
            // },

            studies: [
              // {
              // "ROC@tv-basicstudies",
              // "StochasticRSI@tv-basicstudies",
              // "MASimple@tv-basicstudies",
              // {
              //   id: "MAExp@tv-basicstudies",
              //   version: 60,
              //   inputs: {
              //     length: 20,
              //   },
              // },
              // {
              //   id: "IchimokuCloud@tv-basicstudies",
              //   version: 2.0,
              // },
              // {
              //   id: "BB@tv-basicstudies",
              //   inputs: {
              //     length: 25,
              //   },
              // },
              // {
              //   id: "MASimple@tv-basicstudies",
              //   inputs: {
              //     length: 200,
              //   },
              // },
              // {
              //   id: "MASimple@tv-basicstudies",
              //   inputs: {
              //     length: 100,
              //   },
              // },
              // {
              //   id: "MASimple@tv-basicstudies",
              //   inputs: {
              //     length: 50,
              //   },
              // },
              // {
              //   id: "MASimple@tv-basicstudies",
              //   inputs: {
              //     length: 9,
              //   },
              // },
              // {
              //   id: "RSI@tv-basicstudies",
              // },
              // {
              //   id: "RSI@tv-basicstudies",
              //   inputs: {
              //     length: 4,
              //   },
              // },
            ],
          }}
        /> */}
      </div>
    </div>
  );
}
