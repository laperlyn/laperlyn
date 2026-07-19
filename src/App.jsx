import React from 'react';
import './index.css'; // Make sure this matches your CSS file name

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          {/* Swap the src below for your logo file, e.g. src="logo.svg" */}
          <img src="//Primary Logo(Black).png" alt="Xvora" className="brand-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <button className="signin-btn">Sign-In</button>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <h1>Great ideas fail when founders don't know what to do next.</h1>
          <p>Xvora researches your competitors, analyzes your market, and tells you exactly where your startup can win&mdash;in minutes</p>
          <div className="hero-actions">
            <button className="btn-primary">Analyze My Startup</button>
            <button className="btn-secondary">View Demo</button>
          </div>
        </div>

        <div className="hero-diagram">
          <div className="diagram-canvas">
            <svg className="connectors" viewBox="0 0 640 520" preserveAspectRatio="none">
              {/* idea -> center */}
              <path d="M 320 62 L 320 150" />
              <circle cx="320" cy="150" r="4" />
              {/* center -> market (elbow) */}
              <path d="M 300 200 L 150 200 L 150 288" />
              <circle cx="150" cy="288" r="4" />
              {/* center -> competitor (elbow) */}
              <path d="M 340 200 L 500 200 L 500 288" />
              <circle cx="500" cy="288" r="4" />
              {/* center -> opportunities (elbow) */}
              <path d="M 310 250 L 230 250 L 230 428" />
              <circle cx="230" cy="428" r="4" />
              {/* center -> next steps (elbow) */}
              <path d="M 330 250 L 420 250 L 420 428" />
              <circle cx="420" cy="428" r="4" />
            </svg>

            <div className="node node-idea">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <span className="label">Your Startup Idea</span>
            </div>

            <div className="node node-center">
              <span className="x-mark">X</span>
            </div>

            <div className="node node-market">
              <div className="icon-wrap market">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
              </div>
              <span className="label">Market Analysis</span>
            </div>

            <div className="node node-competitor">
              <div className="icon-wrap competitor">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="label">Competitor Insights</span>
            </div>

            <div className="node node-opportunities">
              <div className="icon-wrap opportunities">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5A5.5 5.5 0 1 0 8.5 11.5c.8.8 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <span className="label">Opportunities</span>
            </div>

            <div className="node node-nextsteps">
              <div className="icon-wrap nextsteps">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="label">Next Steps</span>
            </div>

          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="features">
        <div className="features-head">
          <h2>Built for <span className="accent">Founders</span> who are tired of <span className="accent">guessing</span>.</h2>
          <p>If you're a founder struggling to understand your market or unsure what to do next, you're in the right place. Xvora gives you the clarity to move forward with confidence.</p>
        </div>

        {/* Market Validation */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>Market Validation</h3>
            <p>Don't know if your market is worth entering?</p>
            <p>We'll help you understand market demand before you invest months building.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note" style={{ '--tilt': '-2deg' }}>
              <span className="tape"></span>
              <p className="note-title">Worst entering<br />this market?</p>
              <svg className="doodle" viewBox="0 0 300 130" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 110 L70 80 L110 95 L160 45 L215 55 L260 15" />
                <path d="M260 15 l-16 2 M260 15 l3 15" />
                <circle cx="270" cy="30" r="13" strokeWidth="1.8" />
                <text x="264" y="35" fontFamily="Kalam" fontSize="16" stroke="none" fill="#1a1a1a">?</text>
              </svg>
              <p className="note-sub">&bull; Demand?</p>
              <p className="note-sub">&bull; Competition?</p>
              <p className="note-sub">&bull; Opportunity?</p>
              <span className="note-circle">Need validation.</span>
            </div>
          </div>
        </div>

        {/* Competitive Landscape */}
        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>Competitive Landscape</h3>
            <p>Can't figure out who your competitors are?</p>
            <p>Identify direct and indirect competitors, compare positioning, and uncover gaps they're leaving behind.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note" style={{ '--tilt': '2deg' }}>
              <p className="note-title">Who are my<br />competitors?</p>
              <svg className="doodle" viewBox="0 0 300 110" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="30" y="30" width="46" height="60" rx="2" />
                <path d="M38 42h8M52 42h8M38 56h8M52 56h8M38 70h8M52 70h8" />
                <rect x="150" y="18" width="52" height="72" rx="2" />
                <path d="M160 32h10M176 32h10M160 48h10M176 48h10M160 64h10M176 64h10" />
                <path d="M90 55 h45 M225 40 l35 -18" strokeDasharray="4 5" />
                <path d="M225 40 l30 -16 M225 40 l-2 -8" />
              </svg>
              <p className="note-sub">Direct? Indirect?</p>
              <p className="note-sub">Who's growing faster?</p>
              <p className="note-sub">Where's the gap?</p>
            </div>
          </div>
        </div>

        {/* Decision Making */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>Decision Making</h3>
            <p>Overwhelmed by too many decisions?</p>
            <p>Stop jumping between ideas. Xvora helps you prioritize the next move with confidence.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note" style={{ '--tilt': '-1.5deg' }}>
              <span className="tape"></span>
              <p className="note-title">Too many<br />decisions.</p>
              <svg className="doodle" viewBox="0 0 300 110" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="26" cy="55" r="12" />
                <rect x="60" y="20" width="34" height="24" rx="3" />
                <rect x="60" y="72" width="34" height="24" rx="3" />
                <path d="M38 55 L60 32 M38 55 L60 84" />
                <path d="M94 32 h34 M94 84 h34" strokeDasharray="3 5" />
                <circle cx="150" cy="32" r="9" />
                <circle cx="150" cy="84" r="9" />
                <path d="M162 32 h30 M162 84 h30" />
                <text x="196" y="38" fontFamily="Kalam" fontSize="18" stroke="none" fill="#1a1a1a">?</text>
                <text x="196" y="90" fontFamily="Kalam" fontSize="18" stroke="none" fill="#1a1a1a">?</text>
              </svg>
              <span className="note-circle">What should I focus on?</span>
            </div>
          </div>
        </div>

        {/* Strategy */}
        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>Strategy</h3>
            <p>Unsure what to do next?</p>
            <p>Every insight ends with a clear recommendation so you're never left wondering what comes next.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note" style={{ '--tilt': '1.5deg' }}>
              <p className="note-title">What do<br />I do next?</p>
              <svg className="doodle" viewBox="0 0 260 60" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="20" cy="30" r="15" /><text x="15" y="36" fontFamily="Kalam" fontSize="15" stroke="none" fill="#1a1a1a">1</text>
                <path d="M38 30 h24" />
                <circle cx="80" cy="30" r="15" /><text x="75" y="36" fontFamily="Kalam" fontSize="15" stroke="none" fill="#1a1a1a">2</text>
                <path d="M98 30 h24" />
                <circle cx="140" cy="30" r="15" /><text x="135" y="36" fontFamily="Kalam" fontSize="15" stroke="none" fill="#1a1a1a">3</text>
                <path d="M158 30 h24" />
                <circle cx="200" cy="30" r="15" /><text x="194" y="36" fontFamily="Kalam" fontSize="15" stroke="none" fill="#1a1a1a">?</text>
              </svg>
              <p className="note-sub">&bull; Plan?</p>
              <p className="note-sub">&bull; Build?</p>
              <p className="note-sub">&bull; Launch?</p>
              <span className="note-circle">Need a clear next step.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STARTUP BRIEF ============ */}
      <section className="brief-section">
        <h2>What You'll Walk Away With</h2>
        <p className="subtext">One analysis, Complete clarity.</p>

        <div className="brief-outer">
          <div className="brief-shadow"></div>
          <div className="brief-window">
            <div className="brief-tab"><span className="x-mark">X</span> Xvora Analysis</div>
            <div className="brief-card">
              <h3>Your Startup Brief</h3>
              <p className="brief-sub">Everything you need to move forward with confidence.</p>
              <ul className="brief-list">
                <li>
                  <div className="brief-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg></div>
                  <div className="brief-item-text"><strong>Market Validation</strong><span>Know if your market is worth entering.</span></div>
                  <svg className="brief-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </li>
                <li>
                  <div className="brief-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                  <div className="brief-item-text"><strong>Competitor Landscape</strong><span>Understand who you are really competing with.</span></div>
                  <svg className="brief-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </li>
                <li>
                  <div className="brief-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5A5.5 5.5 0 1 0 8.5 11.5c.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg></div>
                  <div className="brief-item-text"><strong>Growth opportunity</strong><span>Discover gaps and untapped opportunities.</span></div>
                  <svg className="brief-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </li>
                <li>
                  <div className="brief-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8 13 13.7l-4-4L3 16" /></svg></div>
                  <div className="brief-item-text"><strong>Positioning Strategy</strong><span>See where you fit and how you can win.</span></div>
                  <svg className="brief-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </li>
                <li>
                  <div className="brief-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></div>
                  <div className="brief-item-text"><strong>Recommended next steps</strong><span>Get one clear, prioritized action to take next.</span></div>
                  <svg className="brief-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </li>
              </ul>
              <p className="ready-note">Ready for <span className="squiggle">review?</span></p>
            </div>
          </div>
        </div>

        <div className="brief-cta">
          <button className="btn-primary">Analyze My Startup</button>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="steps-section" id="how-it-works">
        <p className="eyebrow">HOW XVORA WORKS</p>
        <h2>From idea to clarity in 3 simple steps.</h2>
        <div className="steps-row">
          <div className="step-card">
            <span className="step-num">01</span>
            <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></div>
            <h4>Tell us about your startup</h4>
            <p>Share your idea, target audience, and what you're building.</p>
          </div>
          <span className="step-arrow">┄┄▸</span>
          <div className="step-card">
            <span className="step-num">02</span>
            <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></div>
            <h4>Xvora researches your market</h4>
            <p>Our AI analyzes the market, competitors, and opportunities behind the scenes.</p>
          </div>
          <span className="step-arrow">┄┄▸</span>
          <div className="step-card">
            <span className="step-num">03</span>
            <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg></div>
            <h4>Get your Startup Brief</h4>
            <p>Receive a personalized strategy with clear insights and next steps.</p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="faq-section" id="faq">
        <h2>FAQ</h2>
        <p className="subtext">Everything you need to know before analyzing your startup.</p>
        <div className="faq-list">
          <details className="faq-item">
            <summary>What exactly does Xvora analyze?<span className="plus">+</span></summary>
            <p>Xvora researches your market, identifies your competitors, uncovers opportunities, and creates a personalized strategy so you know exactly what to do next.</p>
          </details>
          <details className="faq-item">
            <summary>Who is Xvora built for?<span className="plus">+</span></summary>
            <p>Xvora is designed for solo founders, first-time founders, indie hackers, and small teams who want to validate ideas before spending months building.</p>
          </details>
          <details className="faq-item">
            <summary>How long does an analysis take?<span className="plus">+</span></summary>
            <p>Most analyses are completed within a few minutes. For more complex markets, Xvora may continue researching in the background and update your Startup Brief as new insights become available.</p>
          </details>
          <details className="faq-item">
            <summary>What makes Xvora different from ChatGPT?<span className="plus">+</span></summary>
            <p>ChatGPT answers questions. Xvora continuously researches your market, remembers your startup, and turns scattered information into one clear strategy tailored to your business.</p>
          </details>
          <details className="faq-item">
            <summary>Is my startup information private?<span className="plus">+</span></summary>
            <p>Yes. Your ideas and analysis remain private and are never shared with other users.</p>
          </details>
          <details className="faq-item">
            <summary>What do I receive after the analysis?<span className="plus">+</span></summary>
            <p>You'll receive a personalized Startup Brief with market validation, competitor insights, opportunity mapping, positioning recommendations, and clear next steps.</p>
          </details>
          <details className="faq-item">
            <summary>Will my Startup Brief change over time?<span className="plus">+</span></summary>
            <p>Yes. As markets evolve and competitors change, Xvora can continue researching and keep your Startup Brief up to date.</p>
          </details>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section>
        <div className="cta-band">
          <h2>Ready to stop guessing?</h2>
          <p>Get your personalized Startup Brief today.</p>
          <button className="btn-primary">Analyze My Startup &rarr;</button>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="logo.png" alt="Xvora" className="brand-logo" />
            <p>Great ideas deserve better decisions.<br />Research deeply. Present simply.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <a href="#">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8 22 10.2 22 14.05V23h-4v-8.05c0-1.92-.03-4.4-2.68-4.4-2.68 0-3.09 2.1-3.09 4.26V23h-4V8z" /></svg></a>
            <a href="#" aria-label="X/Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.4 8.4L23.3 22H16.8l-5.1-6.6L5.9 22H2.8l7.9-9L1.7 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.7L7.3 4H5.5l12.3 16z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg></a>
          </div>
          <p>&copy; 2026 Xvora. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
