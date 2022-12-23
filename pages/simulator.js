import Head from "next/head";
import { useState } from "react";
import { Navbar, Footer, Sidebar } from "../components/layouts";
import { Result, Description } from "../components";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("../components/chart"), { ssr: false });
import IndicatorPopup from "../components/indicatorPopup";

function Simulator() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Head>
        <title>Simulator - Chart Simulator</title>
      </Head>
      <header>
        <div className="px-4">
          <Navbar />
        </div>
      </header>
      <main className="border-t">
        <div className="flex bg-[#F7F8FA]">
          <Sidebar open={open} />
          <div className="container mx-auto px-8 py-4">
            {/* content top button area */}
            <div className="flex">
              <button
                className="bg-white border border-slate-300 hover:border-slate-400"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-8 p-2 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <div className="flex-1"></div>
              {/* <button
                className="bg-white px-4 text-sm border border-slate-300 hover:border-slate-400"
                onClick={() => console.log("simulation click")}
              >
                Go Simulation
              </button> */}
            </div>
            <div className="grid grid-cols-1 gap-6 my-3">
              <Chart />
              <Result />
              <Description />
              <IndicatorPopup />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Simulator;
