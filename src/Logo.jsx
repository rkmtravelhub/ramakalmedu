import React from "react";

/* RKM Travel Hub logo mark — same artwork as the printed visiting cards
   (green tile, white hill, windmill, gold sun). */
export function LogoMark({ size = 42, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 26 26"
      role="img"
      aria-label="RKM Travel Hub logo"
    >
      <rect width="26" height="26" rx="6" fill="#1F4D3A" />
      <path d="M3 21 C 8 15, 12 16, 15 18 S 21 14, 23 15 V23 H3 Z" fill="#FFFFFF" />
      <g stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <line x1="17" y1="7.5" x2="17" y2="16.5" />
        <g transform="translate(17,7.5) rotate(20)">
          <line x1="0" y1="0" x2="0" y2="-4.6" />
          <line x1="0" y1="0" x2="0" y2="-4.6" transform="rotate(120)" />
          <line x1="0" y1="0" x2="0" y2="-4.6" transform="rotate(240)" />
        </g>
      </g>
      <circle cx="8" cy="8" r="2.2" fill="#E8A33D" />
    </svg>
  );
}

/* Full lockup: mark + "RKM / TRAVEL HUB" wordmark, as on the cards. */
export function Logo({ size = 42, sub = "Travel Hub" }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-words">
        <strong>RKM</strong>
        <small>{sub}</small>
      </span>
    </span>
  );
}
