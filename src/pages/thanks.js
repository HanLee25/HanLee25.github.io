import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ThanksPage() {
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
        title="Thank you for reaching out"
      />

      <section className="content-section">
        <header className="content-section__header">
          <h2 className="h2">
            Sent!{" "}
            <span role="img" aria-label="emoji">
              📫
            </span>{" "}
          </h2>
        </header>

        <div className="md:w-1/2">
          <p>Thank you for reaching out to me.</p>
          <p>
            Your note is just arrived at my inbox, and I can't wait to open it.
            I'm sure it's about something super interesting.{" "}
            <span role="img" aria-label="emoji">
              😁
            </span>{" "}
            I'd reply as soon as I'd get the context.
            <br />
            You can count on me!
          </p>
          <p>
            If you're in rush, you can contact me at{" "}
            <a href="mailto:hi2hanlee@gmail.com">hi2hanlee@gmail.com</a>{" "}
            directly.
          </p>
          <p>Talk to you soon!</p>
        </div>
      </section>

      <Helmet
        bodyAttributes={{
          class: 'thanks'
        }}
      />
    </Layout>
  );
}

export default ThanksPage;
