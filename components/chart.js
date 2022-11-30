import { useEffect, useRef } from "react";
// import { SymbolInfo } from "react-tradingview-embed";
import { createChart, CrosshairMode } from "lightweight-charts";
import { priceData } from "../data/priceData";
import { volumeData } from "../data/volumeData";
import useStore from "../store/store";

export default function Chart() {
  const tvChartRef = useRef(); // trading view
  const indicatorList = useStore((state) => state.indicatorList);
  const selectedAsset = useStore((state) => state.selectedAsset);
  const selectedIndicator = useStore((state) => state.selectedIndicator);

  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   makeChart();

  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []);

  useEffect(() => {
    console.log("selectedAsset:", selectedAsset);
    makeChart();
  }, [selectedAsset]);

  useEffect(() => {
    console.log("selectedIndicator:", selectedIndicator);
    makeChart();
  }, [selectedIndicator]);

  const makeChart = () => {
    tvChartRef.current.innerHTML = "";

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
        text: "Chart Simulator",
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

    // symbol 별 데이터 호출, assetPopup에서 눌린 종목으로 차트 데이터 로딩.
    // candle
    let candleSeries = chart.addCandlestickSeries();
    const filteredAsset = priceData.find(
      (d) => d.symbol == selectedAsset.symbol
    );

    /**
     * 보조지표 세팅
     */
    // ma
    if (filteredAsset !== undefined && selectedIndicator.length > 0) {
      selectedIndicator.forEach((indicatorName) => {
        // example: 'MA-5'
        // TODO: 보조지표 구분 명확히 하기
        const period = indicatorName.split("-")[1];
        let smaData = calculateSMA(filteredAsset.data, period);
        let smaLine = chart.addLineSeries({
          color: indicatorList.find((t) => t.code === indicatorName).color,
          lineWidth: 2,
        });
        // console.log("smaData:", smaData);
        smaLine.setData(smaData);
        // TODO: legend 추가
      });
    }

    // volume
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
    const filteredVolume = volumeData.find(
      (d) => d.symbol == selectedAsset.symbol
    );

    if (filteredAsset && filteredVolume) {
      candleSeries.setData(filteredAsset.data);
      volumeSeries.setData(filteredVolume.data);
    }

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
  };

  return (
    <div className="w-full h-full bg-white border border-slate-300">
      <div className="p-3 font-medium text-gray-500 border-b truncate">
        {selectedAsset.display_name}
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
      </div>
    </div>
  );
}

function calculateSMA(data, count) {
  var avg = function (data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].close;
    }
    return sum / data.length;
  };
  var result = [];
  for (var i = count - 1, len = data.length; i < len; i++) {
    var val = avg(data.slice(i - count + 1, i));
    result.push({ time: data[i].time, value: val });
  }
  return result;
}
