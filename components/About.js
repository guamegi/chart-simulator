import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="lg:mx-20 mx-4">
      <div className="">
        <div className="font-medium lg:text-5xl text-2xl md:text-4xl lg:pr-20 md:pr-4 leading-tight uppercase">
          Trusted by over three million educated investors
        </div>
        <div className="grid mt-40 lg:grid-cols-2 gap-6">
          <div className="flex justify-center items-center mx-2">
            <video
              autoPlay
              loop
              muted
              src="https://res.cloudinary.com/theashishmaurya/video/upload/v1629708809/share_x6gxly.mp4"
            />
          </div>
          <div className=" flex  md:pl-10 justify-end md:text-3xl  items-center">
            <p>Practice stock trading with virtual money.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="grid md:mt-40 mt-10 lg:grid-cols-2 md:gap-6 gap-4">
          <div className=" flex justify-end md:pr-20 md:text-3xl items-center row-start-2 lg:row-start-1">
            <p>Trade a wide range of stocks, ETFs, and options.</p>
          </div>
          <div>
            {" "}
            <div className="flex justify-center items-center mx-2">
              <video
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/theashishmaurya/video/upload/v1629710455/TailwindCSs_qrrco8.mp4"
              />
            </div>
          </div>
        </div>
        <div className="grid md:mt-40 mt-10 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-center items-center mx-2">
              <video
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/theashishmaurya/video/upload/v1629739522/EmbeddingToBlog_udubaf.mp4"
              />
            </div>
          </div>
          <div className=" flex justify-end md:pr-20 md:text-3xl items-center ">
            <p>Trade by yourself or compete with others.</p>
          </div>
        </div>
        <div className="grid md:mt-40 mt-10 lg:grid-cols-2 gap-6">
          <div className=" flex justify-end md:pr-20 md:text-3xl items-center row-start-2 lg:row-start-1">
            <p>Practice trading and investing by yourself or join a game</p>
          </div>
          <div>
            <div className="flex justify-center items-center mx-2">
              <video
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/theashishmaurya/video/upload/v1629740150/TopRoadmaps_maxis2.mp4"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center my-40 items-center">
            <div className="flex md:text-4xl text-xl md font-bold lg:mx-10 mx-2">
              What are you waiting for?{" "}
            </div>
            <Link href="/api/auth/login">
              <button className="border-2 border-black lg:p-4 font-bold text-sm lg:mx-8 flex py-2 px-1 items-center lg:text-2xl rounded-md ml-2 hover:text-white hover:bg-black">
                Sign Up{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-8 flex items-center mx-2 hidden md:flex"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
