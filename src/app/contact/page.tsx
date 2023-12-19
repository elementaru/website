import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Elementaru",
  description:
    "Feel free to contact me for any questions or inquiries. I'll come back to you with an offer as soon as possible.",
};

function Contact() {
  return (
    <main className="container min-h-adjusted max-w-screen-lg my-12">
      <h1>Hey! Let&apos;s have a chat about your project</h1>
      <div className="mb-10 pb-6 lg:flex border-b border-neutral-600 lg:border-none ">
        <a
          className="block my-4 pr-4 mr-4 lg:border-r text-neutral-300 border-neutral-600 transition-opacity hover:opacity-80 active:opacity-70"
          href="tel:+37062268868"
        >
          +370 (622) 68868
        </a>
        <a
          className="block my-4 pr-4 mr-4 lg:border-r text-neutral-300 border-neutral-600 transition-opacity hover:opacity-80 active:opacity-70"
          href="mailto:laurynas@elementaru.com"
        >
          laurynas@elementaru.com
        </a>
        <p className="block my-4 pr-4 mr-4 text-neutral-300">
          Gyneju str. 14, Vilnius, Lithuania
        </p>
      </div>
      <ContactForm />
    </main>
  );
}

export default Contact;
