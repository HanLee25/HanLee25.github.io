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
          action="https://mailthis.to/hi2hanlee@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
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
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="w-full mb-6 form-input"
            id="email"
            placeholder="bill@email.com"
            type="email"
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

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="file"
          >
            Attachments
          </label>

          <input
            className="w-full mb-6 form-input"
            id="file"
            placeholder="Attachments (optional)"
            type="file"
          />
          <input type="hidden" name="_subject" value="Contact form 'hanlee25.github.io'" />
          <input
            type="hidden"
            name="_after"
            value="https://hanlee25.github.io/thanks"
          />
          <input type="hidden" name="_honeypot" value="" />
          <input type="hidden" name="_confirmation" value="Sending the message." />

          <button className="button">Submit</button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
