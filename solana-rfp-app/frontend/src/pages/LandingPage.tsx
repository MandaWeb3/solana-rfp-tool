import React from 'react';
import { useNavigate } from 'react-router-dom';

const SolanaLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 397 311" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M64.6 237.9a9.4 9.4 0 0 1 6.6-2.7h317.9c4.2 0 6.3 5 3.3 8l-62.7 62.7a9.4 9.4 0 0 1-6.6 2.7H4.6c-4.2 0-6.3-5-3.3-8l63.3-62.7z"
      fill="url(#solana-grad-a)"
    />
    <path
      d="M64.6 8.7A9.6 9.6 0 0 1 71.2 6h317.9c4.2 0 6.3 5 3.3 8L329.7 76.7a9.4 9.4 0 0 1-6.6 2.7H5.2c-4.2 0-6.3-5-3.3-8L64.6 8.7z"
      fill="url(#solana-grad-b)"
    />
    <path
      d="M329.7 122.8a9.4 9.4 0 0 0-6.6-2.7H5.2c-4.2 0-6.3 5-3.3 8l62.7 62.7a9.4 9.4 0 0 0 6.6 2.7h317.9c4.2 0 6.3-5 3.3-8l-62.7-62.7z"
      fill="url(#solana-grad-c)"
    />
    <defs>
      <linearGradient id="solana-grad-a" x1="360.9" y1="351.5" x2="141.2" y2="-69" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="solana-grad-b" x1="264.8" y1="401.6" x2="45.1" y2="-19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="solana-grad-c" x1="312.5" y1="376.9" x2="92.8" y2="-43.6" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="solana-card rounded-2xl p-6 flex flex-col gap-4">
    <div className="solana-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-solana-muted leading-relaxed">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="solana-landing min-h-screen flex flex-col">
      {/* Ambient background blobs */}
      <div className="solana-blob solana-blob-1" aria-hidden />
      <div className="solana-blob solana-blob-2" aria-hidden />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-5">
        <div className="flex items-center gap-3">
          <SolanaLogo className="w-8 h-6" />
          <span className="text-white font-bold text-lg tracking-tight">Solana RFP Tool</span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="solana-btn-outline text-sm font-medium px-5 py-2 rounded-full"
        >
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-24">
        <div className="solana-badge mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <span className="solana-dot" />
          Powered by Solana Foundation
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl mb-6">
          Respond to RFPs{' '}
          <span className="solana-gradient-text">10x faster</span>
        </h1>

        <p className="text-lg md:text-xl text-solana-muted max-w-2xl mb-10 leading-relaxed">
          An intelligent knowledge-base system that automatically extracts questions from RFP
          documents and generates accurate, on-brand responses — so your team ships answers, not
          spreadsheets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => navigate('/login')}
            className="solana-btn-primary font-semibold px-8 py-3.5 rounded-full text-base"
          >
            Get Started
          </button>
          <a
            href="#features"
            className="text-solana-muted hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Mock UI preview */}
        <div className="mt-20 w-full max-w-3xl solana-preview rounded-2xl overflow-hidden shadow-2xl">
          <div className="solana-preview-header flex items-center gap-2 px-4 py-3">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <span className="ml-4 text-xs text-solana-muted font-mono">solana-rfp-tool.app</span>
          </div>
          <div className="p-6 space-y-3">
            {[
              { q: 'What is Solana\'s TPS?', a: 'Solana processes up to 65,000 transactions per second...' },
              { q: 'How does Proof of History work?', a: 'PoH is a cryptographic clock that timestamps...' },
              { q: 'What security audits have been performed?', a: 'Multiple independent audits by Kudelski...' },
            ].map(({ q, a }) => (
              <div key={q} className="solana-preview-row rounded-lg p-3">
                <div className="flex items-start gap-3">
                  <span className="solana-q-badge text-xs font-bold px-2 py-0.5 rounded mt-0.5 shrink-0">Q</span>
                  <div>
                    <p className="text-sm text-white font-medium">{q}</p>
                    <p className="text-xs text-solana-muted mt-1 truncate">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 md:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Everything you need to win RFPs
          </h2>
          <p className="text-solana-muted text-center mb-12 max-w-xl mx-auto">
            Built for Solana ecosystem teams responding to institutional inquiries and financial
            operator RFPs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-solana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="PDF Question Extraction"
              description="Upload any RFP document. Our AI extracts every question automatically — no copy-paste, no manual triage."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-solana-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
              title="Curated Knowledge Base"
              description="Store, search, and manage your official Solana answers. Every response comes from your vetted, up-to-date knowledge base."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-solana-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
              title="One-Click Export"
              description="Download polished responses as Word (.docx) or Markdown files, ready to send to financial institutions and partners."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-solana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Similarity Matching"
              description="TF-IDF cosine similarity finds the best answer for each question — and returns 'No answer found' when confidence is low."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-solana-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              title="Access Control"
              description="Google OAuth sign-in with role-based permissions. Admin accounts manage the knowledge base; team members submit RFPs."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-solana-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Built for Speed"
              description="FastAPI backend + React frontend deployed globally. Sub-second responses so you never keep a counterparty waiting."
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 px-6 md:px-16 pb-24">
        <div className="max-w-3xl mx-auto solana-cta-card rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to streamline your RFP workflow?
          </h2>
          <p className="text-solana-muted mb-8 max-w-lg mx-auto">
            Sign in with your authorized Solana Foundation account and start answering RFPs in
            minutes.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="solana-btn-primary font-semibold px-10 py-4 rounded-full text-base"
          >
            Open the App
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-16 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SolanaLogo className="w-6 h-4.5" />
            <span className="text-sm text-solana-muted">Solana RFP Tool</span>
          </div>
          <p className="text-xs text-solana-muted">
            © {new Date().getFullYear()} Solana Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
