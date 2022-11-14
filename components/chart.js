export default function Chart() {
  return (
    <div className="w-full h-192 bg-white border border-slate-300">
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
            onClick={() => console.log("1M click")}
          >
            1M
          </button>
          <button
            className="bg-gray-100 w-10 px-auto py-1 mx-1 text-sm border border-slate-300 hover:border-slate-400"
            onClick={() => console.log("6M click")}
          >
            6M
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
      </div>
      <div className="flex">chart...</div>
    </div>
  );
}
