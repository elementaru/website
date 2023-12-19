import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="container flex items-center py-4">
      <Link
        href="/"
        className="shrink-0 transition-opacity hover:cursor-pointer hover:opacity-80 active:opacity-70"
      >
        <Image
          className="w-[180px]"
          src="/logo/elementaru-logo-dark.svg"
          alt="Elementaru Logo"
          width={500}
          height={66}
          priority={true}
        />
      </Link>
      <nav className="w-full">
        <ul className="flex justify-end">
          <li className="hidden md:block">
            <Link
              href="/contact"
              className="block p-4 hover:opacity-80 active:opacity-70"
            >
              Contact
            </Link>
          </li>
          <li className="p-4">
            <a
              href="https://calendly.com/laurynas-antanavicius/60min"
              target="_blank"
              className="whitespace-nowrap px-5 py-3 border border-gray-300 rounded-full uppercase transition-opacity hover:opacity-80 active:opacity-60"
            >
              Book a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
