import Link from "next/link";
import { Navbar, Footer } from "../layouts";

export default function NotFound() {
  return (
    <>
      <div className="container mx-auto md:px-20 px-6 md:mb-4 max-h-screen">
        <header>
          <div>
            <Navbar />
          </div>
        </header>
        <main>
          <div>
            <p>Page not found</p>
            <Link href="/">홈으로 돌아가기</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
