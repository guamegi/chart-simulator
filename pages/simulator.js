import Head from "next/head";
import Link from "next/link";
import { Navbar, Footer } from "../layouts";

export default function Simulator() {
  return (
    <div className="container mx-auto md:px-20 px-6 md:mb-4 max-h-screen">
      <Head>
        <title>Simulator - Chart Simulator</title>
      </Head>
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main>
        <div>
          <p>simulator page</p>
          <Link href="/">홈으로 돌아가기</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
