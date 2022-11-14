import Head from "next/head";
// import Link from "next/link";
import { Navbar, Footer } from "../layouts";

export default function Simulator() {
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
        <div className="grid grid-cols-2">
          <div className="bg-red-200">dafsf</div>
          <div className="bg-blue-200">dfa</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
