export default function Description() {
  return (
    <div className="w-full bg-white border border-slate-300">
      <div className="p-3 font-medium text-gray-500 border-b truncate">
        Description
      </div>
      <div className="p-3 text-sm text-gray-400">
        The number of unique addresses that were active in the network either as
        a sender or receiver. Only addresses that were active in successful
        transactions are counted.
        <br />
        <br />
        <b>Assets</b>
        <br />
        BTC, ETH, LTC, AAVE, ABT, AMPL, ANT, APE, ARMOR, BADGER, BAL, BAND, BAT,
        BIX, BNT, BOND, BRD, BUSD... (show more) Resolutions 1 Month, 1 Week, 1
        Day, 1 Hour, 10 Minutes
      </div>
    </div>
  );
}
