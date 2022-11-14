import Head from "next/head";
import { Navbar, Footer, Sidebar } from "../layouts";
import { useState } from "react";

export default function Simulator() {
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
        <div className="flex">
          <Sidebar open={open} />
          <div className="w-full mx-auto p-3 bg-[#F7F8FA]">
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
            <div className="grid grid-cols-1 gap-6 my-3 lg:grid-cols-3">
              <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total users
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  12,00
                </div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Profit
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  $ 450k
                </div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Orders
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  20k
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
