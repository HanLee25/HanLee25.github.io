import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="section">
        <h2 className="hero h1">
          Hey there!
          <br />I am{" "}
          <strong className="hero__strong">
            a product designer
          </strong>{" "}
          who loves working on both UI & UX.
        </h2>

        <p>
          I'm also an illustrator, a front-end developer, and a
          glue-gun master.
        </p>

        <p className="hero__desc hero__desc--bad">
          A 💡<span className="tracking-tighter underline">life</span>{" "}
          <b className="inline-block transform translate-y-1">is</b> t
          <span className="font-serif uppercase">o</span>o{" "}
          <span className="uppercase">v</span>alu
          <span className="inline-block italic transform scale-125">
            able
          </span>
          🧻 to de
          <span className="uppercase inline-block transform scale-125">
            a
          </span>
          l with{" "}
          <span className="font-sans inline-block transform -rotate-5 skew-x-12 font-bold line-through textShadow-xl">
            bad <span className="uppercase">d</span>esigns
          </span>
          .
        </p>

        <p>Let me help you.</p>
      </section>
    </Layout>
  );
}

export default IndexPage;
