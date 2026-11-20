import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Clock,
  Mail,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Sunrise,
  Users,
  X,
} from "lucide-react";
import { LogoMark } from "./Logo";
import { ArrowBtn, CONTACT, MAPS_URL, PHONE_DISPLAY, Photo, SectionHead, Tag, digits, initials, team } from "./App";

/* Ramakkalmedu Jeep Safari — a dedicated page so search engines and AI
   assistants can match "Ramakkalmedu jeep safari" searches to RKM. */

const nav = [
  ["Home", "/"],
  ["Jeep Safari", "/jeep-safari/"],
  ["Stay", "/#stay"],
  ["Facilities", "/#facilities"],
  ["Gallery", "/#gallery"],
  ["Team", "/#team"],
  ["Contact", "/#contact"],
];

const stops = [
  {
    title: "Amappara · Tortoise Rock",
    text: "The classic off-road route to the giant tortoise-shaped boulder on the ridge, with wide views across the hills.",
    img: "ramakalmedu_tortoise",
  },
  {
    title: "Windmill ridges",
    text: "Bump along red-earth tracks between the wind turbines on the high, breezy grasslands above Ramakkalmedu.",
    img: "ramakalmedu_windmills_elevated_view",
  },
  {
    title: "Ramakkal rock viewpoint",
    text: "Stand above the patchwork farms of Tamil Nadu, thousands of feet below the edge of the Western Ghats.",
    img: "ramakalmedu_rock_view",
  },
  {
    title: "Off-road trails & hilltops",
    text: "Green hills, rocky climbs and quiet viewpoints that are hard to reach without a 4×4.",
    img: "ramakalmedu_offroad_view",
  },
];

const goodToKnow = [
  [Users, "Who it's for", "Families, friends, tourist groups and school or college tours. Tell us your group size and we'll arrange the jeeps."],
  [Clock, "Rates & timing", "Rates depend on the route, number of jeeps and season. Call or WhatsApp for today's rate and available slots."],
  [Sunrise, "Best time", "Early morning for mist and sunrise; late afternoon for golden light and sunset over the windmills."],
  [BedDouble, "Make it a trip", "Combine your safari with FreshUp, café, dormitory or tent stay at RKM Travel Hub in Ramakkalmedu."],
];

const faqs = [
  [
    "How do I book a jeep safari in Ramakkalmedu?",
    `Call or WhatsApp RKM Travel Hub on ${PHONE_DISPLAY}, or contact Sijo (+91 89435 75887) or Naufal (+91 62829 98798) directly. Share your date, time and group size.`,
  ],
  [
    "Where does the Amappara (Tortoise Rock) jeep safari go?",
    "The off-road route climbs to Amappara / Tortoise Rock and nearby windmill ridges and viewpoints around Ramakkalmedu. The exact route is confirmed when you book.",
  ],
  [
    "What is the jeep safari rate?",
    "Rates vary with the route, number of jeeps and season, so please call or WhatsApp for the current rate before you travel.",
  ],
  [
    "Can large groups and tourist buses book together?",
    "Yes. RKM Travel Hub regularly helps tourist buses, school and college groups — we can arrange several jeeps, FreshUp and food for the group.",
  ],
  [
    "How far is Ramakkalmedu?",
    "Roughly 75 km from Thekkady, 100 km from Munnar, 130 km from Kottayam and 150 km from Kochi.",
  ],
];

const safariTeam = team.filter((m) => /jeep/i.test(m.role));

const waLink = (text, number = CONTACT) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
const BOOK_TEXT =
  "Hi RKM Travel Hub! I'd like to book a Ramakkalmedu jeep safari.\n\nDate:\nTime (morning / evening):\nNumber of people:";

export default function JeepSafari() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const current = (href) => (href === "/jeep-safari/" ? "page" : undefined);

  return (
    <div className="site">
      <header className={`header ${scrolled ? "is-solid" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="/" aria-label="RKM Travel Hub home">
            <LogoMark size={42} className="brand-logo" />
            <span className="brand-text">
              <strong>RKM</strong>
              <small>Travel Hub</small>
            </span>
          </a>
          <nav className="pill-nav" aria-label="Main">
            {nav.slice(1).map(([label, href]) => (
              <a key={href} href={href} aria-current={current(href)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-cta">
            <ArrowBtn variant="light" href={waLink(BOOK_TEXT)}>
              Book Jeep Safari
            </ArrowBtn>
          </div>
          <button className="menu-btn" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu-top">
            <span className="brand">
              <LogoMark size={40} className="brand-logo on-dark" />
              <span className="brand-text">
                <strong>RKM</strong>
                <small>Travel Hub</small>
              </span>
            </span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav>
            {nav.map(([label, href]) => (
              <a key={href} href={href} aria-current={current(href)} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowRight size={18} />
              </a>
            ))}
          </nav>
          <ArrowBtn variant="light" href={waLink(BOOK_TEXT)}>
            Book Jeep Safari
          </ArrowBtn>
        </div>
      )}

      <main>
        {/* Hero */}
        <section className="hero sub" id="top">
          <div className="hero-frame">
            <Photo
              name="ramakalmedu_offroad_view"
              alt="Red-earth off-road track through the green hills of Ramakkalmedu"
              sizes="100vw"
              eager
              className="hero-img"
            />
            <div className="hero-shade" />
            <div className="hero-content">
              <nav className="crumbs" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <span>Jeep Safari</span>
              </nav>
              <Tag light>Amappara · Tortoise Rock · Windmills</Tag>
              <h1>
                Ramakkalmedu
                <br />
                Jeep Safari
              </h1>
              <p>
                Off-road jeep rides through the Ramakkalmedu highlands in Idukki, Kerala — Amappara (Tortoise Rock),
                windmill ridges and viewpoints over Tamil Nadu. Book with RKM Travel Hub.
              </p>
              <div className="hero-actions">
                <ArrowBtn variant="light" href={waLink(BOOK_TEXT)}>
                  Book on WhatsApp
                </ArrowBtn>
                <a className="ghost-btn" href={`tel:+${CONTACT}`}>
                  <Phone size={16} /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll see */}
        <section className="section why">
          <div className="container">
            <SectionHead
              center
              tag="The route"
              title="What you'll see on the safari"
              text="Every trip is planned around your group and the weather. These are the places most guests ask for."
            />
            <div className="why-timeline">
              {stops.map((s, i) => (
                <div className={`why-row ${i % 2 ? "flip" : ""}`} key={s.title}>
                  <div className="why-media">
                    <Photo name={s.img} alt={s.title} sizes="(max-width: 760px) 100vw, 40vw" />
                  </div>
                  <span className="why-dot" aria-hidden="true" />
                  <div className="why-text">
                    <span className="why-no">0{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Good to know */}
        <section className="section">
          <div className="container">
            <SectionHead tag="Good to know" title="Before you book" />
            <div className="know-grid">
              {goodToKnow.map(([Icon, title, text]) => (
                <div className="know-card" key={title}>
                  <Icon size={26} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safari contacts */}
        <section className="section team" id="contacts">
          <div className="container">
            <SectionHead
              center
              tag="Jeep safari contacts"
              title="Call the safari team directly"
              text="Our jeep safari coordinators at Ramakkalmedu will confirm the route, timing and rate for your group."
            />
            <div className="team-grid two">
              {safariTeam.map((m) => (
                <article className="team-card" key={m.id}>
                  <div className="team-photo">
                    {m.photo ? (
                      <img src={`/img/team/${m.id}.webp?v=2`} alt={m.name} width="640" height="800" loading="lazy" decoding="async" />
                    ) : (
                      <div className="team-placeholder">
                        <span>{initials(m.name)}</span>
                      </div>
                    )}
                    <LogoMark size={34} className="team-badge" />
                  </div>
                  <div className="team-body">
                    <small>{m.role}</small>
                    <h3>{m.name}</h3>
                    <div className="team-phones">
                      {m.phones.map((p) => (
                        <a key={p} href={`tel:+${digits(p)}`}>
                          <Phone size={15} /> {p}
                        </a>
                      ))}
                    </div>
                    <a
                      className="mini-btn wa"
                      href={waLink(`Hi ${m.name.split(" ")[0]}, I found you on ramakalmedu.com and would like to book a Ramakkalmedu jeep safari.`, digits(m.phones[0]))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="team-office">
              <LogoMark size={46} />
              <div>
                <small>RKM Office · Call / WhatsApp</small>
                <a href={`tel:+${CONTACT}`}>{PHONE_DISPLAY}</a>
              </div>
              <ArrowBtn href={waLink(BOOK_TEXT)}>Book Jeep Safari</ArrowBtn>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="container faq-grid">
            <div>
              <Tag>FAQ</Tag>
              <h2 className="display-sm">Ramakkalmedu jeep safari questions</h2>
              <p className="muted">
                Still unsure? Message us on WhatsApp — we usually reply quickly. You can also email{" "}
                <a href="mailto:rkmtravelhub@gmail.com">rkmtravelhub@gmail.com</a>.
              </p>
              <div className="distance-list">
                {[
                  ["Thekkady", "~75 km"],
                  ["Munnar", "~100 km"],
                  ["Kottayam", "~130 km"],
                  ["Kochi", "~150 km"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <span>{a}</span>
                    <strong>{b}</strong>
                  </div>
                ))}
              </div>
              <ArrowBtn href={MAPS_URL}>Get Directions</ArrowBtn>
            </div>
            <div className="accordion">
              {faqs.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div className={`acc-item ${open ? "open" : ""}`} key={q}>
                    <button type="button" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open}>
                      <span>{q}</span>
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    <div className="acc-panel">
                      <p>{a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a className="brand footer-brand" href="/">
              <LogoMark size={44} className="brand-logo" />
              <span className="brand-text">
                <strong>RamaKalMedu.com</strong>
                <small>RKM Travel Hub · Ramakalmedu, Idukki, Kerala</small>
              </span>
            </a>
          </div>
          <nav aria-label="Footer">
            {nav.slice(1).map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a href="mailto:rkmtravelhub@gmail.com">
              <Mail size={14} /> Email
            </a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>Rama in spirit · Kal in strength · Medu in beauty</span>
          <span suppressHydrationWarning>© {new Date().getFullYear()} RKM Travel Hub</span>
        </div>
      </footer>

      <a className="wa-float" href={waLink(BOOK_TEXT)} target="_blank" rel="noopener noreferrer" aria-label="Book a jeep safari on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
