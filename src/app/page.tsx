import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IT solutions architect and RPA engineer | Elementaru",
  description:
    "Over 20 years of experience IT consulting, business process automation and E-commerce development. Bring your products to market faster!",
};

function Home() {
  return (
    <main className="container">
      <div className="min-h-adjusted flex">
        <div className="w-2/3 flex items-center">
          <div>
            <span className="inline-block border border-gray-300 rounded-lg px-3 py-1">
              Laurynas Antanavičius
            </span>
            <h1 className="text-6xl leading-normal pr-16 my-6">
              IT solutions architect and RPA engineer
            </h1>
            <div className="flex">
              <Link
                className="inline-flex items-center rounded-lg px-7 py-4 uppercase bg-primary transition-opacity hover:opacity-90 active:opacity-80 "
                href="/contact"
              >
                <Image
                  className="inline mr-4"
                  src="/bolt.svg"
                  height={27}
                  width={25}
                  alt="bolt icon"
                />
                Get an offer
              </Link>
              <a
                href="https://calendly.com/laurynas-antanavicius/60min"
                target="_blank"
                className="border border-gray-300 rounded-lg ml-4 px-8 py-4 uppercase transition-opacity hover:opacity-80 active:opacity-60"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end text-right">
          <div>
            <h2 className="text-2xl mt-0 mb-4">Services</h2>
            <ul className="timeline">
              <li className="text-base">
                IT consulting
                <span className="block h-0.5 w-3 bg-white ml-9"></span>
              </li>
              <li className="text-base leading-loose">
                Startup consulting
                <span className="block h-0.5 w-3 bg-white ml-9"></span>
              </li>
              <li className="text-base leading-loose">
                Strategic planning
                <span className="block h-0.5 w-3 bg-white ml-9"></span>
              </li>
              <li className="text-lg leading-loose">
                Process / workflow / data modeling
                <span className="block h-0.5 w-4 bg-white ml-8"></span>
              </li>
              <li className="text-xl leading-loose">
                Business process automation
                <span className="block h-0.5 w-5 bg-white ml-7"></span>
              </li>
              <li className="text-2xl leading-loose">
                Robotic process automation (RPA)
                <span className="block h-0.5 w-6 bg-white ml-6"></span>
              </li>
              <li className="text-3xl leading-loose">
                IT solution development
                <span className="block h-1 w-8 bg-white ml-4"></span>
              </li>
              <li className="text-2xl leading-loose">
                DevOps automation
                <span className="block h-0.5 w-6 bg-white ml-6"></span>
              </li>
              <li className="text-xl leading-loose">
                E-commerce development
                <span className="block h-0.5 w-5 bg-white ml-7"></span>
              </li>
              <li className="text-lg leading-loose">
                E-commerce support
                <span className="block h-0.5 w-4 bg-white ml-8"></span>
              </li>
              <li className="text-base leading-loose">
                AI tools integration
                <span className="block h-0.5 w-3 bg-white ml-9"></span>
              </li>
              <li className="text-base leading-loose">
                Analytics tools integration
                <span className="block h-0.5 w-3 bg-white ml-9"></span>
              </li>
              <li className="text-base leading-loose">
                Marketing tools integration
                <span className="block h-0.5 w-3 bg-white ml-9"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
