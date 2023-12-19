"use client";
import { useRef, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Radio from "./radio";
import Image from "next/image";
import services from "@/constants/services";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!formRef.current) return;
    const form: HTMLFormElement = formRef.current;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    if (!formObject.service) {
      toast.error("Please select service");
      return;
    }
    if (!formObject.name) {
      toast.error("Please enter your name");
      return;
    }
    if (!formObject.email) {
      toast.error("Please enter your email");
      return;
    }
    if (!formObject.project) {
      toast.error("Please enter your project description");
      return;
    }
    if (!formObject.budget) {
      toast.error("Please select project budget");
      return;
    }
    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_s453ncv",
        "template_7nuhm0n",
        formRef.current,
        "eQb8UiyaFsvw9W3WV"
      );
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Thank you for your message!");
      form.reset();
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const budgets = [
    "- 1k EUR",
    "1k - 5k EUR",
    "5k - 10k EUR",
    "10k - 20k EUR",
    "20k+",
  ];

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <Radio name="service" values={services} label="I'm looking for" />
      <label className="block mt-8 mb-1" htmlFor="name">
        What&apos;s your name?
      </label>
      <input
        className="block text-lg w-full bg-secondary py-4 border-b border-gray-500 focus:outline-none focus:border-white"
        type="text"
        name="name"
        id="name"
        placeholder="Full name"
      />
      <label className="block mt-8 mb-1" htmlFor="email">
        Your email?
      </label>
      <input
        className="block text-lg w-full bg-secondary py-4 border-b border-gray-500 focus:outline-none focus:border-white"
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
      />

      <label className="block mt-8 mb-1" htmlFor="project">
        Tell me about the project idea
      </label>
      <input
        className="block mb-8 text-lg w-full bg-secondary py-4 border-b border-gray-500 focus:outline-none focus:border-white"
        type="text"
        name="project"
        id="project"
        placeholder="Project overview"
      />
      <Radio name="budget" values={budgets} label="Project budget" />
      <button
        className="my-8 inline-flex items-center text-xl transition-opacity hover:opacity-80 active:opacity-60"
        type="submit"
        disabled={loading}
      >
        <Image
          className="mr-3"
          src="/arrow-right.svg"
          alt="arrow-right"
          height="60"
          width="60"
        />{" "}
        Submit form
      </button>
    </form>
  );
}

export default ContactForm;
