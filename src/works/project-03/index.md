---
slug: "/works/3rd-project"
date: "2019-05-04"
title: "Car listing redesign"
team: "Fareportal"
teamUrl: "http://www.fareportal.com/"
excerpt: "Revisit information architecture of car listing page and detail page of CheapOair native iOS application to improve car rental process."
tags: ['UI design', 'IA / NA', 'Style guide', 'UX research', 'Persona', 'User test', 'Wireframe', 'Prototype', 'Interaction', 'iOS HIG', 'Conversion optimization']
cover: "./project-cover.png"
preview: "./project-preview.png"
previewLandscape: false
role: "Mobile design manager"
industry: "Travel / Online travel agency"
number: "03"
headerFlip: true
---

<div class="content-section project-content project-content--6/4">
  <div class="project-content__column">
    <header class="content-section__header">
      <h3 class="h3">Project background</h3>
    </header>
    <dl>
      <dt>Product issue</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Funnel decrease drastically</li>
          <li>Conversion is low</li>
        </ul>
      </dd>
      <dt>User Feedback Finding</dt>
      <dd>
        "I need to see more details to select the car..."
      </dd>
      <dt>Product goal</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Increase listing - booking page funnel</li>
          <li>Reduce decision-making duration</li>
        </ul>
      </dd>
      <dt>Design challenge</dt>
      <dd>
        Keep visual consistency over different corner cases
      </dd>
    </dl>
  </div>
  <div class="project-content__column project-content__image project-content__image--2">
    <figure class="project-content__figure">
      <img src="./project01.png" alt="Project" />
      <figcaption>Fig.1: Listing screen</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project02.png" alt="Project" />
      <figcaption>Fig.2: Detail screen</figcaption>
    </figure>
  </div>
</div>
<div class="content-section project-content project-content--4/6 project-content--flipped">
  <div class="project-content__column">
    <header class="content-section__header">
      <h3 class="h3">Draft ideas</h3>
    </header>
    <dl>
      <dt>Listing (Fig.3)</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Enhance layout of the listing card to align with design guideline</li>
          <li>Add critical information based on user feedback <span class="text-red-500">(e.g., car spec)</span></li>
        </ul>
      </dd>
      <dt>Detail (Fig.4)</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Add secondary information <span class="text-red-500">(e.g., rental information)</span></li>
          <li>Add adjustable specs that might affect the price <span class="text-red-500">(i.e., users could review before the final decision)</span></li>
        </ul>
      </dd>
    </dl>
  </div>
  <div class="project-content__column project-content__image project-content__image--2">
    <figure class="project-content__figure">
      <img src="./project03.png" alt="Project" />
      <figcaption>Fig.3: Listing sketch</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project04.png" alt="Project" />
      <figcaption>Fig.4: Detail sketch</figcaption>
    </figure>
  </div>
</div>
<div class="content-section project-content project-content--6/4">
  <div class="project-content__column">
    <header class="content-section__header">
      <h3 class="h3">Diverge solutions</h3>
    </header>
    <dl>
    <dt>Information architecture</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Listed out factors that would affect to decision making</li>
          <li>Segmentize tier of information</li>
        </ul>
      </dd>
      <dt>Wireframe</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Utilize card layout with information segments</li>
          <li>Utilize tier segments to define interaction flow</li>
        </ul>
      </dd>
      <dt>Options</dt>
      <dd>
        <dl class="definition-list bulleted-list">
          <dt>Communication</dt>
          <dd>
            <ul>
              <li>Which pronoun would be more straightforward?</li>
              <li><span class="text-red-500">Car model vs. car type</span></li>
            </ul>
          </dd>
          <dt>Interaction flow</dt>
          <dd>
            <ul>
              <li>What would be the right amount of commitment when users see the detail?</li>
              <li><span class="text-red-500">Browsing vs. deciding</span></li>
            </ul>
          </dd>
        </dl>
      </dd>
    </dl>
    <a href="https://preview.uxpin.com/881796dcaf0e673af0260dbee9c2a9b5b392ca77#/pages/109030465/simulate/sitemap?mode=ch" target="_blank" rel="noreferrer" class="text-sm text-gray-600">Open wireframe</a>
  </div>
  <div class="project-content__column project-content__image project-content__image--2">
    <figure class="project-content__figure">
      <img src="./project05.png" alt="Project"/>
      <figcaption>Fig.5: Listing wireframe</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project06.png" alt="Project"/>
      <figcaption>Fig.6: Detail wireframe</figcaption>
    </figure>
  </div>
</div>
<div class="content-section project-content">
  <div class="project-content__column">
    <header class="content-section__header">
      <h3 class="h3">Converge and Prototype</h3>
    </header>
    <dl>
      <dt>Converge solution</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Use the <span class="text-red-500">car type</span> to reduce surprise</li>
          <li>Using <span class="text-red-500">car type</span> allows to use conversion-friendly labels.</li>
          <li>Place the <span class="text-red-500">detail view in the browsing path</span></li>
          <li>Users would decide after they check out the rental information.</li>
        </ul>
      </dd>
      <dt>Visual design</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Update and utilize UI component for visual consistency</li>
          <li>Update icons and add a text label improve receptiveness</li>
        </ul>
      </dd>
      <dt>Business cases</dt>
      <dd>
        <ol class="ordered-list">
          <li>Distance check - <span class="text-red-500">map view (Fig.8)</span></li>
          <li>Rental details - <span class="text-red-500">different drop-off location (Fig.10)</span></li>
          <li>Upgrade - <span class="text-red-500">upsell options (Fig.12)</span></li>
        </ol>
      </dd>
    </dl>
    <a href="https://preview.uxpin.com/a158b33be496ec6632826186ca95f9a3a8af4eab#/pages/109030754/simulate/sitemap?mode=ch" target="_blank" rel="noreferrer" class="button button--ghost button--sm mt-4">Open interactive prototype</a>
  </div>
  <div class="project-content__column project-content__image project-content__image--block">
    <figure class="project-content__figure">
      <img src="./project07.png" alt="Project"/>
      <figcaption>Fig.7: Listing screen</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project08.png" alt="Project"/>
      <figcaption>Fig.8: Listing screen (map view)</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project09.png" alt="Project"/>
      <figcaption>Fig.9: Detail screen</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project12.png" alt="Project"/>
      <figcaption>Fig.10: Detail screen (diff. drop-off location)</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project11.png" alt="Project"/>
      <figcaption>Fig.11: Detail screen (price details)</figcaption>
    </figure>
    <figure class="project-content__figure">
      <img src="./project10.png" alt="Project"/>
      <figcaption>Fig.12: Detail screen (upsell options)</figcaption>
    </figure>
  </div>
</div>
<div class="content-section project-content">
  <div class="project-content__column">
    <header class="content-section__header">
      <h3 class="h3">Contribution</h3>
    </header>
    <dl class="project-content__card">
      <dt>Product strategy</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Collaborating with the product owner to define the problem statement</li>
        </ul>
      </dd>
      <dt>UX design</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Collect and analyze pain points</li>
          <li>Revisit information architecture and segmentize them</li>
          <li>Create a wireframe and flow</li>
        </ul>
      </dd>
      <dt>UI design</dt>
      <dd>
        <ul class="bulleted-list">
          <li>Creating a high-fidelity UI mock-up</li>
          <li>Update and utilize style guide / UI library</li>
          <li>Creating an interactive prototype using Sketch and UXPin</li>
        </ul>
      </dd>
    </dl>
  </div>
</div>
