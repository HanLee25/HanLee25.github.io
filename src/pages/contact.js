import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form className="mx-auto md:w-1/2">
          <p className="mb-8 leading-loose">
            Here is an example of a form built using the official Tailwind CSS
            Custom Forms plugin.{` `}
            <a
              className="font-bold text-gray-700 no-underline"
              href="https://github.com/tailwindcss/custom-forms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
            .
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Bill"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="last-name"
            placeholder="Murray"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button className="button">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
