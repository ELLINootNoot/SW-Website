"use client";

import { useState } from "react";

const products = [
  { code: "01", name: "MyFinancial", tag: "Financial Management", icon: "▥", visual: "LIVE LEDGER", text: "SAGA-compliant budgeting, accounting and reporting built for confident financial control." },
  { code: "02", name: "MyProcurement", tag: "Procurement Management", icon: "◇", visual: "SMART SOURCING", text: "End-to-end e-Tender, e-Quotation, e-Bidding and contract management in one connected flow." },
  { code: "03", name: "MyAsset", tag: "Asset Management", icon: "▦", visual: "LIFECYCLE VIEW", text: "Track the complete asset lifecycle—from registration and inspection to depreciation and write-off." },
  { code: "04", name: "MyHRMS", tag: "Human Resource", icon: "◎", visual: "PEOPLE HUB", text: "A complete employee lifecycle platform for leave, claims, policies and self-service." },
  { code: "05", name: "MyPayroll", tag: "Payroll Management", icon: "≋", visual: "ACCURATE PAY", text: "Accurate, compliant payroll processing with fast access to the information your team needs." },
  { code: "06", name: "MyInventory", tag: "Inventory Management", icon: "⬡", visual: "STOCK SIGNAL", text: "Real-time, multi-store inventory visibility that helps optimize stock and reduce operating costs." },
];

const services = [
  ["DISCOVER", "Business consulting", "We uncover the business goals, processes and constraints that matter.", "◎"],
  ["DESIGN", "System integration", "We shape a connected solution and practical roadmap around your organization.", "⇄"],
  ["DELIVER", "Solution implementation", "We deploy robust, secure systems with speed and minimal disruption.", "⚙"],
  ["OPTIMIZE", "Training & change", "We equip your people and continuously improve performance and adoption.", "✦"],
  ["SUPPORT", "Support & maintenance", "Our local team keeps mission-critical systems running smoothly.", "☎"],
];

const reasons = [
  ["★", "25+ years", "Proven experience", "A delivery track record built since 2002 across complex Malaysian organizations."],
  ["♟", "Deep domain", "Business expertise", "Practical knowledge of finance, procurement, assets, people and operations."],
  ["✦", "Built around you", "Tailored solutions", "Flexible modules and bespoke workflows shaped around real organizational needs."],
  ["✓", "Enterprise grade", "Quality & reliability", "Secure, scalable foundations engineered for availability, control and performance."],
  ["☎", "Here when needed", "Local support", "A responsive Malaysian team for implementation, training and long-term care."],
  ["↗", "Always evolving", "Future ready", "Continuous investment in modern technology, integration and better user experiences."],
];

const expertise = [
  ["▦", "Accounting Management", "SAGA-compliant financial control covering budgets, accounting, reporting and audit readiness."],
  ["⇄", "Procurement Management", "Transparent sourcing, tendering, quotations, contracts and supplier collaboration."],
  ["◇", "Asset Management", "Complete lifecycle visibility from registration and inspection to depreciation and disposal."],
  ["♟", "Human Resource & Payroll", "Connected employee records, leave, claims, payroll, policies and self-service."],
  ["♡", "Customer Relationship Management", "Smarter engagement, clearer service histories and stronger stakeholder relationships."],
  ["✓", "Project Management", "Plan, govern and deliver projects on time, within scope and with measurable impact."],
];

const approach = [
  ["Discover", "Understand your organization, goals, users and operational challenges."],
  ["Design", "Shape the right solution architecture, experience and delivery roadmap."],
  ["Deliver", "Implement with proven controls, quality assurance and minimal disruption."],
  ["Optimize", "Measure outcomes, refine workflows and unlock more value over time."],
  ["Support", "Provide responsive local care, maintenance and continuous improvement."],
];

const clients = [
  { name: "UNISIRAJ", logo: "/clients/reference-unisiraj.png" },
  { name: "Bank Islam", logo: "/clients/reference-bank-islam.png" },
  { name: "Tabung Pendidikan", logo: "/clients/reference-tabung-pendidikan.png" },
  { name: "BERNAMA", logo: "/clients/reference-bernama.png" },
  { name: "MPOB", logo: "/clients/reference-mpob.png" },
  { name: "Lembaga Arkitek Malaysia", logo: "/clients/reference-lembaga-arkitek-malaysia.png" },
  { name: "Majlis Sukan Negara", logo: "/clients/reference-majlis-sukan-negara.png" },
  { name: "Kulim Hi-Tech Park", logo: "/clients/reference-kulim-hi-tech-park.png" },
  { name: "LPNPP", logo: "/clients/reference-lpnp.png" },
  { name: "MBS", logo: "/clients/reference-mbs.png" },
  { name: "Majlis Amanah Rakyat (MARA)", logo: "/clients/mara.png", wide: true },
  { name: "Bank Rakyat", logo: "/clients/bank-rakyat.png" },
  { name: "FAMA", logo: "/clients/fama.png" },
  { name: "MTIB", logo: "/clients/mtib.png" },
  { name: "Forest Research Institute Malaysia", logo: "/clients/frim.png" },
  { name: "Universiti Kuala Lumpur", logo: "/clients/unikl.png" },
  { name: "SPNB", logo: "/clients/spnb.png" },
  { name: "LKTN", logo: "/clients/lktn.png" },
  { name: "MBPJ", logo: "/clients/mbpj.png" },
  { name: "Institut Kefahaman Islam Malaysia (IKIM)", logo: "/clients/ikim.png" },
  { name: "MyIPO", logo: "/clients/myipo.jpg", featured: true },
  { name: "Malaysian Institute of Road Safety Research", logo: "/clients/miros.png" },
  { name: "Institut Sukan Negara Malaysia", logo: "/clients/isn.png", wide: true },
];

const searchItems = [
  { title: "About Software Wizards", detail: "Malaysian enterprise software company since 2002", href: "#about", keywords: "company history mission vision malaysia" },
  ...products.map((product) => ({ title: product.name, detail: product.tag, href: "#products", keywords: product.text })),
  ...expertise.map((item) => ({ title: item[1], detail: "Core expertise", href: "#expertise", keywords: item[2] })),
  ...services.map((service) => ({ title: service[1], detail: `${service[0]} - Our services`, href: "#services", keywords: service[2] })),
  { title: "Our delivery approach", detail: "Discover, design, deliver, optimize and support", href: "#approach", keywords: "methodology process implementation roadmap" },
  { title: "Clients & track record", detail: "50+ organizations and 100+ projects", href: "#track-record", keywords: clients.map((client) => client.name).join(" ") },
  { title: "Contact Software Wizards", detail: "Email, telephone and headquarters", href: "#contact", keywords: "asri email phone address consultation" },
];

const popularQuestions = [
  { question: "What products does Software Wizards offer?", detail: "Explore finance, procurement, assets, HR, payroll and inventory", href: "#products" },
  { question: "How can your solutions help my organization?", detail: "See the business benefits and core expertise", href: "#expertise" },
  { question: "What implementation and support services are available?", detail: "Discover the complete service journey", href: "#services" },
  { question: "Who has Software Wizards worked with?", detail: "View clients and the company track record", href: "#track-record" },
  { question: "How do I request a consultation?", detail: "Find contact details and speak with the team", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = normalizedQuery
    ? searchItems.filter((item) => `${item.title} ${item.detail} ${item.keywords}`.toLowerCase().includes(normalizedQuery)).slice(0, 6)
    : [];
  const goToResult = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setQuery("");
    setSearchOpen(false);
  };
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Software Wizards home">
          <span className="brand-logo"><img src="/software-wizards-logo-user.png" alt="Software Wizards — A Software & Technology Company" /></span>
        </a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          <span></span><span></span>
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#track-record" onClick={() => setMenuOpen(false)}>Track record</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗</span></a>
        </div>
      </nav>

      <form className="site-search" role="search" onFocus={() => setSearchOpen(true)} onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setSearchOpen(false);
      }} onSubmit={(event) => {
        event.preventDefault();
        if (searchResults[0]) goToResult(searchResults[0].href);
      }}>
        <label htmlFor="site-search">SEARCH THIS SITE</label>
        <div className="search-box">
          <span aria-hidden="true">⌕</span>
          <input id="site-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Products, services, clients…" autoComplete="off" aria-controls="search-results" aria-expanded={searchOpen} />
          <button type="submit" aria-label="Search">→</button>
        </div>
        {searchOpen && !query && <div className="search-results popular-questions" id="search-results">
          <div className="suggestion-heading"><span>POPULAR QUESTIONS</span><small>Choose a topic to explore</small></div>
          {popularQuestions.map((item) => <button type="button" key={item.question} onClick={() => goToResult(item.href)}><span>{item.question}</span><small>{item.detail}</small></button>)}
        </div>}
        {query && <div className="search-results" id="search-results" aria-live="polite">
          {searchResults.map((result) => <button type="button" key={`${result.title}-${result.detail}`} onClick={() => goToResult(result.href)}><span>{result.title}</span><small>{result.detail}</small></button>)}
          {searchResults.length === 0 && <p>No matches. Try “payroll”, “support” or “contact”.</p>}
        </div>}
      </form>

      <section className="hero" id="top">
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="hero-grid"></div>
        <div className="eyebrow light"><span></span> ENTERPRISE SOFTWARE · SINCE 2002</div>
        <h1>You make the rules.<br/><em>We build the system.</em></h1>
        <p className="hero-copy">Flexible, secure and deeply integrated ERP solutions that help Malaysian organizations operate smarter, faster and better.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Book a free consultation <span>↗</span></a>
          <a className="button button-ghost" href="#products">Explore our products <span>↓</span></a>
        </div>
        <div className="hero-proof">
          <div><strong>25+</strong><span>Years of innovation</span></div>
          <div><strong>50+</strong><span>Organizations served</span></div>
          <div><strong>100+</strong><span>Projects delivered</span></div>
        </div>
        <div className="hero-card">
          <span className="status"><i></i> BUILT FOR INTEGRATION</span>
          <p>One modular ecosystem.<br/>Endless possibilities.</p>
          <div className="dashboard-visual" aria-hidden="true">
            <div className="dashboard-top"><span>ORGANIZATION OVERVIEW</span><i></i><i></i><i></i></div>
            <div className="dashboard-metrics"><div><b>98%</b><small>VISIBILITY</small></div><div><b>6</b><small>MODULES</small></div><div><b>24/7</b><small>ACCESS</small></div></div>
            <div className="dashboard-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <div className="module-row"><b>FIN</b><b>PROC</b><b>HR</b><b>PAY</b><b>INV</b></div>
        </div>
      </section>

      <section className="ticker" aria-label="Key attributes">
        <div>INNOVATIVE <span>✦</span> RELIABLE <span>✦</span> IMPACTFUL <span>✦</span> SECURE <span>✦</span> SCALABLE</div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">ABOUT SOFTWARE WIZARDS</div>
        <div className="about-grid">
          <div>
            <h2>Malaysian roots.<br/><em>Enterprise impact.</em></h2>
            <div className="about-impact" aria-label="Software Wizards company highlights">
              <div className="impact-orbit" aria-hidden="true"><span>SW</span><i></i><i></i><i></i></div>
              <div className="impact-stats">
                <div><strong>2002</strong><span>Established<br/>in Malaysia</span></div>
                <div><strong>30+</strong><span>Experienced<br/>professionals</span></div>
                <div><strong>100+</strong><span>Projects<br/>delivered</span></div>
              </div>
              <div className="impact-flow"><span>DISCOVER</span><i></i><span>DESIGN</span><i></i><span>DELIVER</span><i></i><span>SUPPORT</span></div>
            </div>
          </div>
          <div className="about-copy">
            <p>Software Wizards (M) Sdn Bhd is a 100% Malaysian technology company. For more than two decades, we’ve combined business insight, domain expertise and modern technology to create software that adds measurable value.</p>
            <p>From government agencies and statutory bodies to education and enterprise, our team delivers the full cycle—from strategy and customization to deployment, integration and long-term support.</p>
            <p><strong>AI-driven software development.</strong> Artificial intelligence drives our software development process, guided by our team’s technical knowledge and business expertise.</p>
            <div className="principles">
              <div><i className="mini-icon" aria-hidden="true">◎</i><span>Client-centric<br/>by design</span></div>
              <div><i className="mini-icon" aria-hidden="true">◇</i><span>Local expertise,<br/>lasting support</span></div>
              <div><i className="mini-icon" aria-hidden="true">✓</i><span>Secure, scalable<br/>foundations</span></div>
            </div>
          </div>
        </div>
        <div className="company-visual">
          <div className="visual-intro"><span>WHAT WE BRING TOGETHER</span><h3>Technology built around how your organization works.</h3><p>Software Wizards connects people, processes and information through one secure, scalable enterprise platform.</p><div className="outcome-chips"><b>LESS DUPLICATION</b><b>FASTER DECISIONS</b><b>BETTER CONTROL</b></div></div>
          <div className="transformation-map" aria-label="Software Wizards connects people, processes, data and operations">
            <div className="map-ring map-ring-one"></div><div className="map-ring map-ring-two"></div>
            <div className="map-core"><strong>SW</strong><span>ENTERPRISE<br/>PLATFORM</span></div>
            <div className="map-node map-people"><i>♟</i><b>PEOPLE</b></div>
            <div className="map-node map-process"><i>⇄</i><b>PROCESS</b></div>
            <div className="map-node map-data"><i>▦</i><b>DATA</b></div>
            <div className="map-node map-operations"><i>◇</i><b>OPERATIONS</b></div>
          </div>
        </div>
        <div className="purpose-grid">
          <article><i className="card-icon" aria-hidden="true">◎</i><span>MISSION</span><h3>Empower organizations to achieve more.</h3><p>We deliver innovative software that simplifies complexity, strengthens decisions and improves how people work.</p></article>
          <article><i className="card-icon" aria-hidden="true">◉</i><span>VISION</span><h3>Build better businesses and a better future.</h3><p>We aim to be the trusted long-term technology partner behind resilient, connected and forward-looking organizations.</p></article>
          <article><i className="card-icon" aria-hidden="true">◇</i><span>VALUES</span><h3>Do the right work, the right way.</h3><p>Integrity, innovation, excellence, teamwork and customer success guide every solution and every relationship.</p></article>
        </div>
      </section>

      <section className="why section">
        <div className="detail-heading"><div><div className="section-label">WHY SOFTWARE WIZARDS</div><h2>Experience. Expertise.<br/><em>Excellence.</em></h2></div><p>More than software: the right people, process and technology to move your organization forward with confidence.</p></div>
        <div className="reason-grid">{reasons.map((reason) => <article key={reason[2]}><i className="card-icon" aria-hidden="true">{reason[0]}</i><strong>{reason[1]}</strong><h3>{reason[2]}</h3><p>{reason[3]}</p></article>)}</div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="detail-heading inverse"><div><div className="section-label">CORE EXPERTISE</div><h2>Multidisciplinary thinking.<br/><em>Business-focused solutions.</em></h2></div><p>Our specialists bring together technology and deep functional knowledge to improve performance, strengthen compliance and drive growth.</p></div>
        <div className="expertise-grid">{expertise.map((item) => <article key={item[1]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
      </section>

      <section className="products section" id="products">
        <div className="section-heading">
          <div><div className="section-label">OUR PRODUCTS</div><h2>One ecosystem.<br/><em>Smarter operations.</em></h2></div>
          <p>Modular solutions that work beautifully alone—and even better together. Built for the public sector and enterprise, with compliance, security and scalability at the core.</p>
        </div>
        <figure className="product-honeycomb" aria-label="Six connected products in the Software Wizards ecosystem">
          <figcaption className="honeycomb-story">
            <span>ONE CONNECTED ECOSYSTEM</span>
            <h3>Standalone when you need it.<br/>Integrated when you’re ready.</h3>
            <p>Start with the module that solves today’s priority, then connect finance, procurement, assets, people, payroll and inventory as your requirements grow. Shared data and consistent controls reduce duplication while improving visibility across the organization.</p>
          </figcaption>
          <div className="honeycomb-grid">
            <div className="honeycomb-cell honeycomb-center"><strong>SW</strong><span>Connected ecosystem</span></div>
            {products.map((product) => <div className="honeycomb-cell" key={product.name}><strong>{product.name}</strong><span>{product.tag}</span></div>)}
          </div>
        </figure>
        <div className="product-grid" aria-live="polite">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-visual" aria-hidden="true"><span>{product.icon}</span><div><i></i><i></i><i></i></div><small>{product.visual}</small></div>
              <h3>{product.name}</h3><b>{product.tag}</b><p>{product.text}</p>
              <div className="card-line"></div>
            </article>
          ))}
        </div>
        <div className="benefit-strip">
          <span>SAGA COMPLIANT</span><span>REAL-TIME INSIGHTS</span><span>SECURE & RELIABLE</span><span>SCALABLE & FLEXIBLE</span>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading inverse">
          <div><div className="section-label">OUR SERVICES</div><h2>From first question<br/>to <em>lasting impact.</em></h2></div>
          <p>End-to-end services that bring clarity to complexity, reduce operational costs and equip your people for long-term success.</p>
        </div>
        <div className="service-list">
          {services.map((item) => <article key={item[0]}><i className="service-icon" aria-hidden="true">{item[3]}</i><b>{item[0]}</b><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="detail-heading"><div><div className="section-label">OUR APPROACH</div><h2>Structured delivery.<br/><em>Better outcomes.</em></h2></div><p>A clear, collaborative process keeps every transformation focused, measurable and built for long-term adoption.</p></div>
        <div className="approach-grid">{approach.map((step) => <article key={step[0]}><h3>{step[0]}</h3><p>{step[1]}</p></article>)}</div>
      </section>

      <section className="record section" id="track-record">
        <div className="section-label">OUR TRACK RECORD</div>
        <div className="record-title"><h2>Trusted to deliver<br/>where it <em>matters.</em></h2><p>Proven across government, statutory bodies, education and industry—where reliability is non-negotiable.</p></div>
        <div className="client-grid">{clients.map((client) => <div key={client.name} className={`client-logo ${client.featured ? "client-logo--featured" : ""} ${client.wide ? "client-logo--wide" : ""}`}><img src={client.logo} alt={`${client.name} logo`} loading="lazy" /></div>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <div className="section-label">GET IN TOUCH</div>
          <h2>Let’s build a smarter<br/><em>future, together.</em></h2>
          <p>Tell us what’s slowing your organization down. We’ll help you map the clearest path forward.</p>
          <a className="button button-white" href="mailto:hello@softwarewizards.com.my">hello@softwarewizards.com.my <span>↗</span></a>
        </div>
        <div className="contact-details">
          <div><span>HEADQUARTERS</span><p><strong>Software Wizards (M) Sdn Bhd</strong><br/>2-06 Jalan Prima SG1, Prima Sri Gombak<br/>68100 Batu Caves, Selangor<br/><a href="tel:+60361883442">P: +603-61883442</a><br/><a href="tel:+60361882552">F: +603-61882552</a></p></div>
          <div><span>PENANG BRANCH</span><p><strong>Software Wizards (M) Sdn Bhd</strong><br/>31-10-06 Ideal CEO, Lebuh Nipah 5<br/>11950 Bayan Lepas, Penang<br/><a href="tel:+6046117446">P: +604-6117446</a></p></div>
          <div><span>ONLINE</span><p><a href="https://softwarewizards.com.my">softwarewizards.com.my</a><br/>LinkedIn · Software Wizards</p></div>
        </div>
      </section>

      <footer><div className="brand"><span className="brand-logo"><img src="/software-wizards-logo-user.png" alt="Software Wizards — A Software & Technology Company" /></span></div><p>© {new Date().getFullYear()} Software Wizards (M) Sdn Bhd</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
