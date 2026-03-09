const signals = [
  { value: "3x", label: "faster launch momentum" },
  { value: "94%", label: "average activation lift" },
  { value: "12", label: "design-ready modules" },
];

const features = [
  {
    title: "Narrative-first layouts",
    text: "Structure each section to explain value in seconds, then deepen trust with proof and clear next actions.",
  },
  {
    title: "Responsive by default",
    text: "Every block is built mobile-first, with graceful scaling across compact phones, laptops, and wide displays.",
  },
  {
    title: "Accessible interactions",
    text: "Semantic sections, visible focus states, strong contrast, and reduced-motion support are included from the start.",
  },
];

const highlights = [
  "Strategic hero with strong CTA",
  "Editorial typography and layered gradients",
  "Feature cards, metrics, and launch checklist",
  "Clean React structure ready to extend",
];

export default function App() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="topbar">
        <div className="brand-lockup" aria-label="Northstar Studio">
          <span className="brand-mark" aria-hidden="true">
            NS
          </span>
          <div>
            <p className="brand-name">Northstar Studio</p>
            <p className="brand-tag">React launch experience</p>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Modern product homepage</p>
            <h1>
              Launch a homepage that feels bold, clear, and ready for the real
              world.
            </h1>
            <p className="lede">
              This React concept blends sharp storytelling, warm visual depth,
              and practical conversion blocks so a product can look premium
              without feeling generic.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href="#contact">
                Book a launch sprint
              </a>
              <a className="button button-secondary" href="#features">
                Explore the system
              </a>
            </div>

            <ul className="signal-grid" aria-label="Key metrics">
              {signals.map((signal) => (
                <li key={signal.label} className="signal-card">
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-panel reveal">
            <div className="glass-card orbit-card">
              <p className="mini-label">Launch board</p>
              <h2>From idea to polished front door in one focused pass.</h2>
              <div className="panel-grid">
                <article>
                  <span>Message</span>
                  <strong>Sharper positioning</strong>
                </article>
                <article>
                  <span>Design</span>
                  <strong>Intentional visual identity</strong>
                </article>
                <article>
                  <span>Build</span>
                  <strong>React-ready foundation</strong>
                </article>
                <article>
                  <span>QA</span>
                  <strong>Responsive and accessible</strong>
                </article>
              </div>
            </div>

            <div className="glass-card ribbon-card">
              <p className="mini-label">What is included</p>
              <ul className="highlight-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="trust-strip section reveal" aria-label="Selected partners">
          <p>Used by teams shipping calmer launches at:</p>
          <div className="logo-row">
            <span>Helio</span>
            <span>Arcwell</span>
            <span>Fieldnote</span>
            <span>Morrow</span>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading reveal">
            <p className="eyebrow">Why it works</p>
            <h2>Built to convert attention into confidence.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card reveal">
                <p className="mini-label">Feature</p>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-layout" id="process">
          <div className="section-heading reveal">
            <p className="eyebrow">Launch process</p>
            <h2>Designed for speed without losing craft.</h2>
          </div>

          <div className="process-card reveal">
            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Clarify the offer</h3>
                  <p>Refine the message, target audience, and product promise.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Shape the visual system</h3>
                  <p>Define the art direction, hierarchy, color rhythm, and motion.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Ship the React experience</h3>
                  <p>Implement clean sections, responsive behavior, and polished interactions.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section contact-banner reveal" id="contact">
          <div>
            <p className="eyebrow">Ready to adapt</p>
            <h2>Use this page as a starting point for your own product story.</h2>
          </div>
          <a className="button button-primary" href="mailto:hello@northstar.example">
            Start the conversation
          </a>
        </section>
      </main>
    </div>
  );
}
