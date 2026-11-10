"use client";

import { useState } from "react";

interface ContactActionsProps {
  email?: string;
  githubUrl?: string;
}

export default function ContactActions({
  email = "swadippatra@gmail.com",
  githubUrl = "https://github.com/swadip0007",
}: ContactActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent("Portfolio Inquiry")}`;

  return (
    <div className="mt-8 space-y-4">
      {/* Primary Actions */}
      <div className="flex flex-wrap items-center gap-3.5">
        {/* Open in Gmail Button */}
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>Open in Gmail</span>
          <span aria-hidden="true" className="text-xs">↗</span>
        </a>

        {/* Copy Email Button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Email copied to clipboard" : "Copy email address to clipboard"}
          className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
            copied
              ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              : "border-white/20 bg-white/[0.05] text-white hover:border-cyan-400 hover:text-cyan-300 hover:bg-white/[0.08]"
          }`}
        >
          {copied ? (
            <>
              <svg
                className="h-4 w-4 text-emerald-400 animate-in fade-in zoom-in-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4 text-cyan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              <span>Copy Email Address</span>
            </>
          )}
        </button>

        {/* GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>Connect on GitHub</span>
          <span aria-hidden="true" className="text-xs">↗</span>
        </a>
      </div>

      {/* Direct email info & Desktop Mail fallback */}
      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-gray-400">
        <span>Direct address:</span>
        <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-cyan-300 select-all">
          {email}
        </span>
        <span className="text-gray-600">•</span>
        <a
          href={`mailto:${email}`}
          className="text-gray-400 underline decoration-gray-600 underline-offset-4 transition-colors hover:text-cyan-300"
        >
          open in default mail client ↗
        </a>
      </div>
    </div>
  );
}
