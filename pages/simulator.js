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
        <div>
          <p>simulator page</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
