import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Modern "Nano Banana" Styled Icons
const IconSparkle = ({
  size = 7,
  className = "",
}) => (
  <svg
    width={size}
    height={size * 2}
    viewBox="0 0 128 256"
    xmlns="http://www.w3.org/2000/svg"
    className={`nano-icon ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="sparkle-grad"
        x1="0"
        y1="0"
        x2="128"
        y2="256"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>

    <path
      d="M72 0
         L20 108
         H58
         L32 184
         H72
         L40 256
         L108 140
         H70
         L96 64
         H56
         Z"
      fill="url(#sparkle-grad)"
      stroke="#fbbf24"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const IconLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="url(#link-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="url(#link-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="link-grad" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  </svg>
);

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <path d="M18 20V10M12 20V4M6 20V14" stroke="url(#chart-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="chart-grad" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <circle cx="12" cy="12" r="10" stroke="#fbbf24" strokeWidth="2" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#fbbf24" strokeWidth="2" />
  </svg>
);

const IconTag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" y1="7" x2="7.01" y2="7" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBolt = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="nano-icon">
    {/* Outer Glow Path */}
    <path
      d="M13 2
         L5 13
         H11
         L10 22
         L19 11
         H13
         Z"
      stroke="#6366f1"   // indigo / bluish (matches IconCopy & IconLock)
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="bolt-gradient" x1="4" y1="3" x2="20" y2="21">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
      <linearGradient id="bolt-glow" x1="4" y1="2" x2="20" y2="22">
        <stop offset="0%" stopColor="rgba(251, 191, 36, 0.8)" />
        <stop offset="100%" stopColor="rgba(234, 88, 12, 0.4)" />
      </linearGradient>
    </defs>
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCopy = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMobile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrash = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <polyline points="3 6 5 6 21 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPalette = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <circle cx="12" cy="12" r="10" stroke="#a855f7" strokeWidth="2" />
    <path d="M11 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#a855f7" />
    <path d="M16 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#a855f7" />
    <path d="M8 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#6366f1" />
    <path d="M12 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#6366f1" />
  </svg>
);

const IconLock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="nano-icon">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTwitterX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [serverStatus, setServerStatus] = useState("checking");
  const [showQR, setShowQR] = useState(false);
  const [activeTab, setActiveTab] = useState("shorten");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Check server health on load
  useEffect(() => {
    checkHealth();
    const saved = localStorage.getItem("tiny_history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const checkHealth = async () => {
    try {
      const res = await axios.get(`${API_URL}/health`);
      if (res.data.database === "connected") setServerStatus("online");
      else setServerStatus("db_error");
    } catch (e) {
      setServerStatus("offline");
    }
  };

  const handleShorten = async (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    setLoading(true);
    setShortUrl("");
    setShowQR(false);

    try {
      const res = await axios.post(`${API_URL}/url/save`, {
        longUrl,
        alias: alias.trim() || undefined
      });

      const newUrl = res.data.shortUrl;
      setShortUrl(newUrl);

      // Update history
      const newEntry = {
        long: longUrl,
        short: newUrl,
        alias: alias || "auto-generated",
        date: new Date().toLocaleDateString(),
        clicks: 0
      };
      const newHistory = [newEntry, ...history.slice(0, 9)];
      setHistory(newHistory);
      localStorage.setItem("tiny_history", JSON.stringify(newHistory));

      // Reset form
      setLongUrl("");
      setAlias("");

    } catch (err) {
      console.error("Shortening failed:", err);
      const msg = err.response?.data?.message || err.message || "Server connection failed";
      alert(`Status: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateQRCode = () => {
    setShowQR(!showQR);
  };

  const clearHistory = () => {
    if (confirm("Clear all link history?")) {
      setHistory([]);
      localStorage.removeItem("tiny_history");
    }
  };

  const deleteHistoryItem = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem("tiny_history", JSON.stringify(newHistory));
  };

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="bg-gradient"></div>
      <div className="bg-gradient-2"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="url(#gradient)" />
            <path d="M8 12h16M12 8v16M20 8v16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <span>TinyURL Pro</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#api">API</a></li>
          <li><button className="signup-btn">Get Started Free</button></li>
        </ul>
        <button className="mobile-menu"><IconMenu /></button>
      </nav>

      {/* Main Content */}
      <main className="main-wrapper">
        <section className="hero-section">
          <div className="badge"><IconSparkle /> Trusted by 10M+ users worldwide</div>
          <h1>
            Shorten URLs.<br />
            <span className="gradient-text">Track Performance.</span>
          </h1>
          <p>Create powerful short links with advanced analytics, QR codes, and custom branding. Perfect for marketers, businesses, and creators.</p>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Links Created</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">&lt;50ms</div>
              <div className="stat-label">Redirect Speed</div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <button
            className={`tab ${activeTab === 'shorten' ? 'active' : ''}`}
            onClick={() => setActiveTab('shorten')}
          >
            <span className="tab-icon"><IconLink /></span>
            Shorten Link
          </button>
          <button
            className={`tab ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <span className="tab-icon"><IconChart /></span>
            My Links ({history.length})
          </button>
        </div>

        {/* Shorten Tab */}
        {activeTab === 'shorten' && (
          <div className="form-card glass-card">
            <form className="input-container" onSubmit={handleShorten}>
              <div className="input-group">
                <label>
                  <span className="label-icon"><IconGlobe /></span>
                  Destination URL
                </label>
                <input
                  type="url"
                  placeholder="https://your-very-long-link.com/path/to/page..."
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  required
                  className="url-input"
                />
              </div>

              <div className="alias-section">
                <div className="input-group">
                  <label>
                    <span className="label-icon"><IconTag /></span>
                    Custom Alias (Optional)
                  </label>
                  <div className="alias-input-wrapper">
                    <span className="domain-prefix">tinyurl.com/</span>
                    <input
                      type="text"
                      placeholder="my-custom-link"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      className="alias-input"
                    />
                  </div>
                  <span className="input-hint">Use letters, numbers, and hyphens only</span>
                </div>
              </div>

              <button className="shorten-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Creating Link...
                  </>
                ) : (
                  <>
                    <span className="btn-icon"><IconBolt /></span>
                    Shorten URL
                  </>
                )}
              </button>
            </form>

            {shortUrl && (
              <div className="result-container">
                <div className="result-header">
                  <div className="success-badge"><IconCheck /> Link Created Successfully!</div>
                </div>

                <div className="result-url-box">
                  <a href={shortUrl} target="_blank" rel="noreferrer" className="result-url">
                    {shortUrl}
                  </a>
                  <div className="result-actions">
                    <button
                      className={`action-btn copy-btn ${copied ? 'copied' : ''}`}
                      onClick={handleCopy}
                      title="Copy to clipboard"
                    >
                      {copied ? <><IconCheck /> Copied</> : <><IconCopy /> Copy</>}
                    </button>
                    <button
                      className="action-btn qr-btn"
                      onClick={generateQRCode}
                      title="Generate QR Code"
                    >
                      <IconMobile /> QR Code
                    </button>
                  </div>
                </div>

                {showQR && (
                  <div className="qr-container">
                    <div className="qr-placeholder">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`}
                        alt="QR Code"
                        className="qr-image"
                      />
                      <p className="qr-label">Scan to visit link</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="history-card glass-card">
            {history.length > 0 ? (
              <>
                <div className="history-header">
                  <h2>Your Links</h2>
                  <button className="clear-btn" onClick={clearHistory}>
                    <IconTrash /> Clear All
                  </button>
                </div>

                <div className="history-list">
                  {history.map((item, i) => (
                    <div key={i} className="history-item">
                      <div className="history-main">
                        <div className="history-icon"><IconLink /></div>
                        <div className="history-info">
                          <a href={item.short} target="_blank" rel="noreferrer" className="hist-short">
                            {item.short}
                          </a>
                          <span className="hist-long" title={item.long}>{item.long}</span>
                          <div className="hist-meta">
                            <span className="meta-item"><IconSparkle /> {item.date}</span>
                            <span className="meta-item"><IconTag /> {item.alias}</span>
                          </div>
                        </div>
                      </div>
                      <div className="history-actions">
                        <button
                          className="icon-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(item.short);
                            alert('Copied!');
                          }}
                          title="Copy link"
                        >
                          <IconCopy />
                        </button>
                        <button
                          className="icon-btn delete-btn"
                          onClick={() => deleteHistoryItem(i)}
                          title="Delete"
                        >
                          <IconTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="empty-state">
                <div className="empty-icon"><IconLink /></div>
                <h3>No links yet</h3>
                <p>Start shortening URLs to see them here</p>
                <button className="empty-btn" onClick={() => setActiveTab('shorten')}>
                  Create Your First Link
                </button>
              </div>
            )}
          </div>
        )}

        {/* Features Section */}
        <section className="features-section" id="features">
          <h2 className="section-title">Why Choose TinyURL Pro?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><IconBolt /></div>
              <h3>Lightning Fast</h3>
              <p>Sub-50ms redirect times with global CDN infrastructure</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><IconChart /></div>
              <h3>Advanced Analytics</h3>
              <p>Track clicks, locations, devices, and referrers in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><IconPalette /></div>
              <h3>Custom Branding</h3>
              <p>Use your own domain and create branded short links</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><IconLock /></div>
              <h3>Enterprise Security</h3>
              <p>SSL encryption, password protection, and link expiration</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>TinyURL Pro</h4>
            <p>The world's most powerful URL shortener</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#api">API Docs</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#security">Security</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TinyURL Pro. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter" title="Twitter"><IconTwitterX /></a>
            <a href="#linkedin" title="LinkedIn"><IconLinkedIn /></a>
            <a href="#github" title="GitHub"><IconGitHub /></a>
          </div>
        </div>
      </footer>

      {/* Status Indicator */}
      <div className="status-bar" onClick={checkHealth} title="Click to refresh status">
        <div className={`status-dot ${serverStatus === 'online' ? 'online' : ''}`}></div>
        <span>{serverStatus === 'online' ? <IconCheck /> : <IconBolt />} {serverStatus === 'online' ? 'All Systems Operational' : serverStatus.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default App;
