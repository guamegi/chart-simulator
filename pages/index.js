import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import homeImage from "../public/image/mainpage.png";
import homeImage from "../public/image/chartImage.jpg";
import { About } from "../components";
import { Navbar, Footer } from "../components/layouts";

export default function Home() {
  return (
    <div className="container mx-auto md:px-20 px-6">
      <Head>
        <title>Chart Simulator</title>
      </Head>
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main className="border-t">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 md:gap-4">
          <div>
            <div className="font-bold text-4xl md:mt-10 mb-10 leading-tight ">
              <section>Stock Market Simulator</section>
            </div>
            <div className="text-lg text-gray-600 m-2 my-4">
              <p>
                The ChartSimulator provides the data, knowledge, and confidence
                to make better investment and trading decision in Bitcoin,
                Ethereum and cryptocurrency markets.
              </p>
            </div>
            <div className="buttons my-10">
              {/* <Link href="/api/auth/login"> */}
              <Link href="/simulator">
                <button className="border-2 border-black text-white bg-black p-4 my-4 mr-4 w-60">
                  Get started
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-start-2">
            <Image src={homeImage} alt="Illustration of Home pic" />
          </div>
        </div>
        {/* 아래 화살표 */}
        <div className="flex justify-center my-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 animate-bounce	"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}
