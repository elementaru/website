import Link from "next/link";

function Footer() {
  return (
    <footer className="container pb-8">
      <nav className="border-t border-gray-300 pt-4">
        <ul className="flex mb-4">
          <li className="py-4">
            <Link
              className="rounded transition-colors hover:text-gray-300 active:text-gray-400"
              href="contact"
            >
              Contact
            </Link>
          </li>
          <li className="py-4">
            <Link
              className="ml-4 rounded transition-colors hover:text-gray-300 active:text-gray-400"
              href="privacy-policy"
            >
              Privacy policy
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Elementaru MB is a company registered in Lithuania (Company No.
        304436197)
      </p>
    </footer>
  );
}

export default Footer;
