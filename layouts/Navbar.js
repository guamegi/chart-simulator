import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="navbar grid grid-cols-3 tracking-wide my-2">
        <div className="logo flex justify-start">
          <h3 className="font-extrabold text-3xl">
            <Link href="/">ChartSimulator</Link>
          </h3>
        </div>
        <div className="navs flex justify-center font-bold  p-2 hidden lg:flex">
          <div className="mx-2">
            <Link href="/">Home</Link>
          </div>
          <div className="mx-2">
            <Link href="/simulator">Simulator</Link>
          </div>

          {/* <div className="mx-2">
            <Link href="/guide">Guide</Link>
          </div> */}
          {/* <div className="mx-2">
            <Link href="https://discord.gg/Ga3kp745r5">Discord</Link>
          </div> */}
        </div>
        <div className="flex justify-end font-bold px-2 flex content-end col-start-3  ">
          <div className="login-button py-2 mx-2 hidden md:flex cursor-pointer">
            <Link href="/api/auth/login">Log in</Link>
          </div>
          <Link href="/api/auth/login">
            <button className="button font-medium text-xs md:text-sm text-white bg-black border rounded-md p-2 px-2  md:px-4 mx-2">
              Try for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
