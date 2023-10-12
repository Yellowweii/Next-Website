import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-8 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com">
            <Image src={LinkedinIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-sm text-gray-100 rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="1119765689hw@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-sm text-gray-100 rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-sm text-gray-100 rounded-lg block w-full p-2.5"
              id="message"
              required
              placeholder="Let's talk about..."
            />
          </div>
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-20 rounded-lg w-full" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
