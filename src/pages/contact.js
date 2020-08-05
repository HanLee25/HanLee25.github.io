import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `product design`,
          `illustrattion`,
          `UI design`,
          `UX design`,
          `visual storytelling`,
          `visual narrative`,
        ]}
        title="Contact"
      />

      <section className="content-section">
        <header className="content-section__header">
          <h2 className="h2">
            Say{" "}
            <span role="img" aria-label="emoji">
              👋
            </span>{" "}
            to Han
          </h2>
        </header>

        <form
          className="md:w-1/2"
          action="https://formspree.io/xlepzrob"
          method="POST"
        >
          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="name"
          >
            Name *
          </label>

          <input
            className="w-full mb-6 form-input"
            id="name"
            placeholder="Bill Murray"
            name="name"
            type="text"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="email"
          >
            Email *
          </label>

          <input
            className="w-full mb-6 form-input"
            id="email"
            placeholder="you@email.com"
            type="email"
            name="_replyto"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message *
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            name="message"
            rows="8"
            required
          />

          <input
            type="hidden"
            name="_subject"
            value="Contact form 'hanlee25.github.io'"
          />
          <input type="text" name="_gotcha" className="hidden" />

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
