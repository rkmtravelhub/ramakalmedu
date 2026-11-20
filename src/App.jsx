import React, { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Bus,
  Car,
  Check,
  Compass,
  Flame,
  Grape,
  House,
  Info,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Mountain,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShowerHead,
  Tent,
  UtensilsCrossed,
  Users,
  Waves,
  Wifi,
  Wind,
  X,
} from "lucide-react";
import { IMG } from "./imageMeta";
import { LogoMark } from "./Logo";
import "./styles.css";

export const CONTACT = "919074685552";
export const PHONE_DISPLAY = "+91 90746 85552";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ramakalmedu%2C%20Idukki%2C%20Kerala";

/* ---------------------------------------------------------------
   Responsive, lazy-loaded WebP image.
   Every photo has an 800px and a 1600px version in /public/img.
   --------------------------------------------------------------- */
export function Photo({ name, alt, sizes = "(max-width: 760px) 100vw, 50vw", eager = false, className = "" }) {
  const meta = IMG[name];
  const [w, h] = meta ? meta.s : [800, 600];
  const srcSet = meta
    ? `/img/${name}-800.webp ${meta.s[0]}w, /img/${name}-1600.webp ${meta.l[0]}w`
    : undefined;
  return (
    <img
      className={className}
      src={`/img/${name}-800.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}

/* ---------------------------------------------------------------
   Content
   --------------------------------------------------------------- */
const nav = [
  ["Home", "home"],
  ["Explore", "explore"],
  ["Experiences", "experiences"],
  ["Jeep Safari", "/jeep-safari/"],
  ["Stay", "stay"],
  ["Facilities", "facilities"],
  ["Gallery", "gallery"],
  ["Team", "team"],
  ["Contact", "contact"],
];

const audiences = [
  "Tourist groups",
  "Family trips",
  "School & college tours",
  "Corporate groups",
  "Adventure groups",
];

const places = [
  {
    title: "Ramakkal Rock",
    preset: "Tortoise Rock / local attraction",
    tag: "Viewpoint",
    img: "ramakalmedu_rock_view",
    text: "The iconic rock and viewpoint at the heart of the Ramakalmedu landscape.",
  },
  {
    title: "Tortoise Rock",
    preset: "Tortoise Rock / local attraction",
    tag: "Adventure",
    img: "ramakalmedu_tortoise",
    text: "Amappara / Tortoise Rock and its off-road route for adventure seekers.",
  },
  {
    title: "Windmill Country",
    preset: "Windmill / vineyard visit",
    tag: "Scenic",
    img: "ramakalmedu_windmills_elevated_view",
    text: "The famous wind-swept highlands and surrounding wind farms.",
  },
  {
    title: "Kuravan & Kurathi",
    preset: "Tortoise Rock / local attraction",
    tag: "Landmark",
    img: "ramakalmedu_kuravan_kurathi_statue",
    text: "The well-known statue overlooking the Tamil Nadu plains.",
  },
  {
    title: "Off-road Trails",
    preset: "Jeep safari",
    tag: "Jeep Safari",
    img: "ramakalmedu_offroad_view",
    text: "Red-earth tracks and green hills — ideal for a local jeep safari.",
  },
  {
    title: "Cumbum Vineyards",
    preset: "Windmill / vineyard visit",
    tag: "Day Trip",
    img: "RamaKalMedu_Near_Vineyard",
    text: "A nearby Tamil Nadu-side stop that fits into a longer day trip.",
  },
];

const moods = {
  "Nature Escape": {
    img: "RamaKalMedu_Nature_view",
    text: "Wide views, quiet moments and the feeling of being above the valleys.",
  },
  "Campfire Night": {
    img: "20260927_065616",
    text: "End the day slowly with warm food, stories, mountain air and a campfire.",
  },
  Adventure: {
    img: "ramakalmedu_offroad_view",
    text: "Take the scenic route with off-road trails, viewpoints and jeep safari possibilities.",
  },
  "Family Trip": {
    img: "RamaKalMedu_view",
    text: "A relaxed base for families who want views, comfort and easy local exploring.",
  },
  "Group Tour": {
    img: "ramakalmedu_tamilnadu_view",
    text: "Plan school, college, corporate and friends trips with practical support at the hub.",
  },
  "Relax & Stay": {
    img: "RamaKalMedu_RKM_Travel_Hub",
    text: "Freshen up, rest, eat well and enjoy the hills without rushing.",
  },
};

const experienceCards = [
  ["Refresh", "20260927_070308", "Arrive, freshen up and take a comfortable pause in the hills."],
  ["Explore", "ramakalmedu_rock_elevated_rear_view", "Rocks, viewpoints, windmills, trails and valley panoramas."],
  ["Experience", "ramakalmedu_tamilnadu_town_view", "Food, local culture, nature and the spirit of Idukki."],
];

const whyUs = [
  {
    title: "Built for group travel",
    img: "RamaKalMedu_RKM_Travel_Hub",
    text: "A convenient stop for tourist buses and vans, with clean toilets and bathrooms, FreshUp rooms and food for the whole group.",
  },
  {
    title: "Stay your way",
    img: "20260927_065616",
    text: "Choose a dormitory, tent stay or homestay — and finish the evening around a campfire under the mountain sky.",
  },
  {
    title: "Local adventures, sorted",
    img: "ramakalmedu_offroad_view",
    text: "Jeep safari booking support, Tortoise Rock, windmill and vineyard visits, plus tourist information to plan your day.",
  },
  {
    title: "Comfort & peace of mind",
    img: "ramakalmedu_tamilnadu_view",
    text: "Free Wi-Fi, power backup and security support for a smoother stop and stay.",
  },
];

const stays = [
  ["Dormitory", "Group-friendly, practical accommodation for tours, schools and families.", "RamaKalMedu_RKM_Travel_Hub"],
  ["Tent Stay", "A closer-to-nature outdoor option, perfect with a campfire night.", "20260927_065544"],
  ["Homestay", "A relaxed, local-style stay for travellers wanting a longer experience.", "RamaKalMedu_view"],
];

const facilities = [
  [ShowerHead, "FreshUp Rooms", "Clean bathrooms and toilets for groups, buses, vans and families."],
  [BedDouble, "Dormitory Stay", "Practical group accommodation for travellers and school tours."],
  [Tent, "Tent Stay", "Outdoor accommodation for a closer-to-nature experience."],
  [Flame, "Campfire", "Relax around a campfire on a cool mountain evening."],
  [Waves, "Swimming Pool", "Cool down after a day of exploring."],
  [UtensilsCrossed, "RKM Café & Snacks", "Food, snacks and refreshments for travellers and tour groups."],
  [Leaf, "Spices Shop", "Take a taste of Idukki's spices home with you."],
  [ShoppingBag, "Galaxy Purchase Hub", "Home-made chocolates, toys, fancy items, spices and gifts."],
  [Car, "Jeep Safari", "Off-road adventure support and safari booking enquiries."],
  [House, "Homestay", "A local-style stay for a longer experience."],
  [Wind, "Windmill Visit", "Explore the wind-swept highlands nearby."],
  [Grape, "Vineyard Visit", "Add a Cumbum-side vineyard visit to your day trip."],
  [Mountain, "Tortoise Rock", "Explore Tortoise Rock / Amappara and its off-road route."],
  [Bus, "Bus & Van Support", "A convenient stop for tourist buses and group travel."],
  [Info, "Tourist Information", "Local tips to help plan your Ramakalmedu visit."],
  [Wifi, "Wi-Fi & Backup", "Free Wi-Fi, power backup and security."],
];

const dayPlans = {
  "Half Day": [
    ["08:00", "FreshUp & breakfast", "Start slowly at RKM Travel Hub."],
    ["09:00", "Windmill country", "Take in the highland views."],
    ["11:00", "Ramakkal Rock", "Enjoy the signature viewpoint."],
    ["12:30", "Lunch & refresh", "Return for food and a comfortable pause."],
  ],
  "Full Day": [
    ["06:00", "Sunrise", "Start with the cool mountain morning."],
    ["08:00", "Breakfast & FreshUp", "Recharge at the hub."],
    ["10:00", "Windmills & viewpoints", "Explore the highlands."],
    ["13:00", "Lunch", "Pause and refuel."],
    ["15:00", "Jeep / local adventure", "Choose an off-road experience."],
    ["17:30", "Tortoise Rock / sunset", "Finish with a scenic view."],
    ["19:00", "Campfire", "Slow down under the evening sky."],
  ],
};

const gallery = [
  ["RamaKalMedu_Nature_view_WM1", "Ramakalmedu panorama"],
  ["ramakalmedu_rock_view", "Ramakalmedu rock"],
  ["ramakalmedu_windmills", "Windmills on the ridge"],
  ["ramakalmedu_tamilnadu_longview", "Tamil Nadu farmlands"],
  ["20260927_070308", "Golden morning hills"],
  ["ramakalmedu_tortoise", "Tortoise Rock"],
  ["ramakalmedu_malamuzhakki_vezhambal", "Malamuzhakki Vezhambal sculpture"],
  ["ramakalmedu_rock_tamilnadu_view", "Rock and valley view"],
  ["20260927_065130", "Sky over the Ghats"],
];

const faqs = [
  [
    "Who is RKM Travel Hub for?",
    "Tourist groups, family trips, school and college tours, corporate teams and adventure groups. The hub is designed around the realities of group travel — including bus and van support.",
  ],
  [
    "What stay options are available?",
    "Dormitory stay for groups, tent stay for a closer-to-nature night, and homestay for a relaxed local experience. Tell us your date and group size and we'll confirm what suits you.",
  ],
  [
    "How far is Ramakalmedu?",
    "Roughly 75 km from Thekkady, 100 km from Munnar, 130 km from Kottayam and 150 km from Kochi.",
  ],
  [
    "What should I pack?",
    "Comfortable shoes, a light jacket, sunscreen, a water bottle, a camera, a power bank, rain protection — and a little extra time to enjoy the views.",
  ],
  [
    "How do I book or enquire?",
    `Send us a message on WhatsApp at ${PHONE_DISPLAY}, or use the enquiry form on this page. The team will get back to you to confirm details.`,
  ],
];

/* Team — details from the printed RKM visiting cards.
   To add a photo later: save it as public/img/team/<id>.webp and set photo: true. */
export const team = [
  {
    id: "anjith",
    name: "Anjith Chatterji",
    role: "Dormitory & FreshUp · Galaxy Purchase Hub",
    phones: ["+91 73560 05249"],
    photo: true,
  },
  {
    id: "sijo",
    name: "Sijo Kunnumpurathu",
    role: "Offroad Jeep Safari",
    phones: ["+91 89435 75887"],
    photo: true,
  },
  {
    id: "naufal",
    name: "Naufal KI",
    role: "Spices · Offroad Jeep Safari",
    phones: ["+91 62829 98798", "+91 99614 92251"],
    photo: true,
  },
];

export const digits = (p) => p.replace(/[^0-9]/g, "");
export const initials = (n) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const enquiryOptions = [
  "Stay",
  "Group stay",
  "Camping",
  "Jeep safari",
  "Food / refreshment",
  "FreshUp / bathroom",
  "Spices / shopping",
  "Windmill / vineyard visit",
  "Tortoise Rock / local attraction",
  "Swimming pool",
  "Bus / van support",
  "Tourist information",
  "Other enquiry",
];

/* ---------------------------------------------------------------
   Small building blocks
   --------------------------------------------------------------- */
export function Tag({ children, light = false }) {
  return <span className={`tag ${light ? "tag-light" : ""}`}>{children}</span>;
}

export function ArrowBtn({ children, onClick, variant = "dark", type = "button", href }) {
  const inner = (
    <>
      <span>{children}</span>
      <i aria-hidden="true">
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </i>
    </>
  );
  if (href) {
    return (
      <a className={`arrow-btn ${variant}`} href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button className={`arrow-btn ${variant}`} type={type} onClick={onClick}>
      {inner}
    </button>
  );
}

export function SectionHead({ tag, title, text, center = false }) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <div>
        {tag && <Tag>{tag}</Tag>}
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

/* ---------------------------------------------------------------
   App
   --------------------------------------------------------------- */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [mood, setMood] = useState("Nature Escape");
  const [stayType, setStayType] = useState("Dormitory");
  const [dayType, setDayType] = useState("Full Day");
  const [openFaq, setOpenFaq] = useState(0);
  const [selected, setSelected] = useState([]);
  const [formError, setFormError] = useState("");
  const railRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only load and play the film when it scrolls into view.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.src) v.src = "/img/ramakalmedu-film.mp4";
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Lock page scroll and allow Esc to close overlays.
  useEffect(() => {
    const locked = bookingOpen || lightbox !== null || menuOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setBookingOpen(false);
        setLightbox(null);
        setMenuOpen(false);
      }
      if (lightbox !== null && e.key === "ArrowRight") setLightbox((i) => (i + 1) % gallery.length);
      if (lightbox !== null && e.key === "ArrowLeft") setLightbox((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [bookingOpen, lightbox, menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openBooking = (preset) => {
    if (typeof preset === "string") {
      setSelected((cur) => (cur.includes(preset) ? cur : [...cur, preset]));
    }
    setFormError("");
    setBookingOpen(true);
  };

  const openWhatsApp = (message) => {
    const text =
      typeof message === "string"
        ? message
        : "Hi RKM Travel Hub! I would like to know more about visiting Ramakalmedu.";
    window.open(`https://wa.me/${CONTACT}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const toggleOption = (opt) => {
    setFormError("");
    setSelected((cur) => (cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]));
  };

  const submitBooking = (e) => {
    e.preventDefault();
    if (selected.length === 0) {
      setFormError("Please select at least one option.");
      return;
    }
    const d = new FormData(e.currentTarget);
    const get = (k) => String(d.get(k) || "").trim();
    const body = [
      "Hi RKM Travel Hub!",
      "",
      `Name: ${get("name") || "Not specified"}`,
      `Phone / WhatsApp: ${get("phone") || "Not specified"}`,
      `Enquiry: ${selected.join(", ")}`,
      `Preferred date: ${get("date") || "Not specified"}`,
      `Guests: ${get("guests") || "Not specified"}`,
      "",
      "Message:",
      get("message") || "No additional message.",
    ].join("\n");
    openWhatsApp(body);
  };

  const scrollRail = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector(".place-card");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="site">
      {/* ============ HEADER ============ */}
      <header className={`header ${scrolled ? "is-solid" : ""}`}>
        <div className="header-inner">
          <button className="brand" type="button" onClick={() => scrollTo("home")} aria-label="RamaKalMedu home">
            <LogoMark size={42} className="brand-logo" />
            <span className="brand-text">
              <strong>RKM</strong>
              <small>Travel Hub</small>
            </span>
          </button>

          <nav className="pill-nav" aria-label="Main">
            {nav
              .filter(([, id]) => id !== "home")
              .map(([label, id]) =>
                id.startsWith("/") ? (
                  <a key={id} href={id}>
                    {label}
                  </a>
                ) : (
                  <button key={id} type="button" onClick={() => scrollTo(id)}>
                    {label}
                  </button>
                ),
              )}
          </nav>

          <div className="header-cta">
            <ArrowBtn variant="light" onClick={() => openBooking()}>
              Plan Your Visit
            </ArrowBtn>
          </div>

          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
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
            {nav.map(([label, id]) =>
              id.startsWith("/") ? (
                <a key={id} href={id}>
                  {label}
                  <ArrowRight size={18} />
                </a>
              ) : (
                <button key={id} type="button" onClick={() => scrollTo(id)}>
                  {label}
                  <ArrowRight size={18} />
                </button>
              ),
            )}
          </nav>
          <ArrowBtn variant="light" onClick={() => { setMenuOpen(false); openBooking(); }}>
            Plan Your Visit
          </ArrowBtn>
        </div>
      )}

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="home">
          <div className="hero-frame">
            <Photo
              name="ramakalmedu_rock_tamilnadu_view"
              alt="The Ramakkal rock above the patchwork fields of Tamil Nadu"
              sizes="100vw"
              eager
              className="hero-img"
            />
            <div className="hero-shade" />
            <div className="hero-content">
              <Tag light>
                <MapPin size={14} /> Ramakalmedu · Idukki, Kerala
              </Tag>
              <h1>
                Where Divinity
                <br />
                Meets Nature.
              </h1>
              <p>
                Your welcoming travel hub in the Western Ghats — refreshment, rest, food, shopping and local
                adventures for families, tourist groups, school tours and explorers.
              </p>
              <div className="hero-actions">
                <ArrowBtn variant="light" onClick={() => openBooking()}>
                  Plan Your Visit
                </ArrowBtn>
                <button className="ghost-btn" type="button" onClick={() => scrollTo("explore")}>
                  Explore Ramakalmedu
                </button>
              </div>
              <div className="hero-chips">
                {["Refresh", "Stay", "Explore", "Experience"].map((x, i) => (
                  <span key={x}>
                    {x}
                    {i < 3 && <b aria-hidden="true">•</b>}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-strip">
              <span className="hero-strip-label">Ideal for</span>
              {audiences.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="section about">
          <div className="container narrow center-text">
            <Tag>About Us</Tag>
            <h2 className="display">Your gateway to authentic Ramakalmedu</h2>
            <p className="lead">
              RKM Travel Hub brings everything a hill trip needs into one welcoming place. Arrive and freshen up,
              stay the night, eat well, pick up Kerala spices — and head out to rocks, windmills, viewpoints and
              off-road trails. Come for the view. Stay for the experience.
            </p>
            <ArrowBtn onClick={() => scrollTo("contact")}>Contact for Details</ArrowBtn>
          </div>
        </section>

        {/* ============ EXPLORE / DESTINATIONS ============ */}
        <section className="section explore" id="explore">
          <div className="container">
            <SectionHead
              tag="Destinations"
              title={
                <>
                  From rocks to windmills:
                  <br />
                  discover Ramakalmedu
                </>
              }
              text="Build your day around viewpoints, rock formations, windmill country, off-road routes and nearby attractions — all within reach of the hub."
            />
            <div className="rail" ref={railRef}>
              {places.map((p) => (
                <article className="place-card" key={p.title}>
                  <Photo name={p.img} alt={p.title} sizes="(max-width: 760px) 80vw, 360px" />
                  <div className="place-top">
                    <Tag light>{p.tag}</Tag>
                  </div>
                  <div className="place-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <button type="button" className="mini-btn" onClick={() => openBooking(p.preset)}>
                      Plan a visit <ArrowUpRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="rail-controls">
              <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous destinations">
                <ArrowLeft size={18} />
              </button>
              <button type="button" onClick={() => scrollRail(1)} aria-label="Next destinations">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCES ============ */}
        <section className="section experiences" id="experiences">
          <div className="container">
            <div className="exp-grid">
              <div className="exp-intro">
                <Tag>Experiences</Tag>
                <h2 className="display-sm">{mood}</h2>
                <p>{moods[mood].text}</p>
                <ArrowBtn onClick={() => openBooking()}>Plan this experience</ArrowBtn>
              </div>
              <div className="exp-feature">
                <Photo key={mood} name={moods[mood].img} alt={mood} sizes="(max-width: 760px) 100vw, 40vw" className="fade-in" />
                <Tag light>RKM Experience</Tag>
              </div>
              <div className="exp-picker">
                <h3>Select experience type</h3>
                <div className="chips">
                  {Object.keys(moods).map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={mood === m ? "active" : ""}
                      onClick={() => setMood(m)}
                      aria-pressed={mood === m}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                <small>Every trip can be tailored to your group.</small>
              </div>
            </div>

            <div className="exp-cards">
              {experienceCards.map(([title, img, text]) => (
                <article key={title} className="exp-card">
                  <Photo name={img} alt={title} sizes="(max-width: 760px) 100vw, 33vw" />
                  <Tag light>{title}</Tag>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY RKM (timeline) ============ */}
        <section className="section why">
          <div className="container">
            <SectionHead center tag="Why RKM" title="Why travellers choose RKM Travel Hub" />
            <div className="why-timeline">
              {whyUs.map((item, i) => (
                <div className={`why-row ${i % 2 ? "flip" : ""}`} key={item.title}>
                  <div className="why-media">
                    <Photo name={item.img} alt={item.title} sizes="(max-width: 760px) 100vw, 40vw" />
                  </div>
                  <span className="why-dot" aria-hidden="true" />
                  <div className="why-text">
                    <span className="why-no">0{i + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-cta">
              <h3>Discover your perfect place</h3>
              <p>Tell us your date and group size — we'll help you plan the stop, stay and adventure.</p>
              <ArrowBtn onClick={() => openBooking()}>See Details</ArrowBtn>
            </div>
          </div>
        </section>

        {/* ============ STAY ============ */}
        <section className="section stay" id="stay">
          <div className="container">
            <SectionHead
              tag="Stay"
              title="Choose the way you want to stay"
              text="Come for the view. Stay for the experience. Pick a stay that suits your group and we'll confirm availability on WhatsApp."
            />
            <div className="stay-grid">
              {stays.map(([name, text, img]) => (
                <button
                  key={name}
                  type="button"
                  className={`stay-card ${stayType === name ? "active" : ""}`}
                  onClick={() => setStayType(name)}
                  aria-pressed={stayType === name}
                >
                  <Photo name={img} alt={name} sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="stay-check" aria-hidden="true">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <div>
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="stay-bar">
              <div>
                <small>Your selection</small>
                <strong>{stayType}</strong>
              </div>
              <ArrowBtn onClick={() => openBooking(stayType === "Tent Stay" ? "Camping" : stayType === "Dormitory" ? "Group stay" : "Stay")}>
                Ask about {stayType}
              </ArrowBtn>
            </div>
          </div>
        </section>

        {/* ============ FILM ============ */}
        <section className="film">
          <div className="film-frame">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster="/img/ramakalmedu-film-poster.webp"
              aria-label="Short film of the Ramakalmedu landscape"
            />
            <div className="film-shade" />
            <div className="film-content">
              <Tag light>Live the landscape</Tag>
              <h2>
                Let the hills speak
                <br />
                for themselves.
              </h2>
              <p>Wide skies, mountain air and the Western Ghats unfolding around you.</p>
              <ArrowBtn variant="light" onClick={() => openBooking()}>
                Plan Your Visit
              </ArrowBtn>
            </div>
          </div>
        </section>

        {/* ============ FACILITIES ============ */}
        <section className="section facilities" id="facilities">
          <div className="container">
            <SectionHead
              tag="Facilities"
              title="Everything you need, right here"
              text="Facilities and services for a smoother stop, stay and adventure."
            />
            <div className="fac-grid">
              {facilities.map(([Icon, title, text]) => (
                <article key={title} className="fac-card">
                  <span className="fac-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PLAN YOUR DAY ============ */}
        <section className="section plan">
          <div className="container plan-grid">
            <div className="plan-media">
              <Photo name="ramakalmedu_windmills_elevated_view" alt="Windmills at sunset" sizes="(max-width: 760px) 100vw, 45vw" />
            </div>
            <div>
              <Tag>Plan Your Day</Tag>
              <h2 className="display-sm">From sunrise to campfire</h2>
              <p className="muted">Use this as inspiration and adjust the pace to suit your group.</p>
              <div className="seg" role="tablist">
                {Object.keys(dayPlans).map((d) => (
                  <button
                    key={d}
                    type="button"
                    role="tab"
                    aria-selected={dayType === d}
                    className={dayType === d ? "active" : ""}
                    onClick={() => setDayType(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <ol className="day-list">
                {dayPlans[dayType].map(([time, title, text]) => (
                  <li key={time + title}>
                    <time>{time}</time>
                    <div>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ GALLERY ============ */}
        <section className="section gallery" id="gallery">
          <div className="container">
            <SectionHead
              tag="Gallery"
              title="The place is the experience"
              text="Viewpoints, rocks, windmills, valleys, trails and local landmarks — straight from Ramakalmedu."
            />
            <div className="masonry">
              {gallery.map(([img, title], i) => (
                <button key={img} type="button" className="masonry-item" onClick={() => setLightbox(i)} aria-label={`Open ${title}`}>
                  <Photo name={img} alt={title} sizes="(max-width: 760px) 50vw, 33vw" />
                  <span>{title}</span>
                </button>
              ))}
            </div>
            <p className="follow">
              Follow the journey · <strong>@ramakalmedu</strong>
            </p>
          </div>
        </section>

        {/* ============ TEAM ============ */}
        <section className="section team" id="team">
          <div className="container">
            <SectionHead
              tag="Our Team"
              title="Meet the people behind RKM"
              text="Call or WhatsApp the right person directly — for stays, jeep safaris, spices and shopping at Ramakalmedu."
            />
            <div className="team-grid">
              {team.map((m) => (
                <article className="team-card" key={m.id}>
                  <div className="team-photo">
                    {m.photo ? (
                      <img src={`/img/team/${m.id}.webp?v=2`} alt={m.name} width="640" height="800" loading="lazy" decoding="async" />
                    ) : (
                      <div className="team-placeholder" aria-label={`Photo of ${m.name} coming soon`}>
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
                    <button
                      type="button"
                      className="mini-btn wa"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${digits(m.phones[0])}?text=${encodeURIComponent(`Hi ${m.name.split(" ")[0]}, I found you on ramakalmedu.com and would like to enquire about ${m.role.split(" · ")[0]}.`)}`,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      <MessageCircle size={15} /> WhatsApp
                    </button>
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
              <ArrowBtn onClick={() => openWhatsApp()}>Message the Office</ArrowBtn>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section faq">
          <div className="container faq-grid">
            <div>
              <Tag>FAQ</Tag>
              <h2 className="display-sm">Everything you need to know before you go</h2>
              <p className="muted">
                Planning a trip to Ramakalmedu? Here are quick answers to the questions we hear most.
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

        {/* ============ GROUPS / CONTACT ============ */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-card">
              <Photo name="RamaKalMedu_view" alt="View from Ramakalmedu" sizes="100vw" className="contact-bg" />
              <div className="contact-shade" />
              <div className="contact-inner">
                <div>
                  <Tag light>
                    <Users size={14} /> Travel together
                  </Tag>
                  <h2>
                    Relax. Refresh.
                    <br />
                    Reconnect.
                  </h2>
                  <p>
                    Ready to make your Ramakalmedu stop memorable? Contact RKM Travel Hub for stay, group, food and
                    local experience enquiries.
                  </p>
                  <div className="hero-actions">
                    <ArrowBtn variant="light" onClick={() => openWhatsApp()}>
                      WhatsApp Us
                    </ArrowBtn>
                    <button className="ghost-btn" type="button" onClick={() => openBooking()}>
                      Enquire Online
                    </button>
                  </div>
                </div>
                <ul className="contact-list">
                  <li>
                    <MapPin size={20} />
                    <div>
                      <small>Location</small>
                      <strong>Ramakalmedu, Idukki, Kerala</strong>
                    </div>
                  </li>
                  <li>
                    <Phone size={20} />
                    <div>
                      <small>Phone / WhatsApp</small>
                      <a href={`tel:+${CONTACT}`}>{PHONE_DISPLAY}</a>
                    </div>
                  </li>
                  <li>
                    <Compass size={20} />
                    <div>
                      <small>Travel hub</small>
                      <strong>Refresh · Stay · Explore · Experience</strong>
                    </div>
                  </li>
                  <li>
                    <Mail size={20} />
                    <div>
                      <small>Email</small>
                      <a href="mailto:rkmtravelhub@gmail.com">rkmtravelhub@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <ShieldCheck size={20} />
                    <div>
                      <small>Website</small>
                      <strong>www.ramakalmedu.com</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand footer-brand">
              <LogoMark size={44} className="brand-logo" />
              <span className="brand-text">
                <strong>RamaKalMedu.com</strong>
                <small>RKM Travel Hub · Ramakalmedu, Idukki, Kerala</small>
              </span>
            </div>
          </div>
          <nav aria-label="Footer">
            {nav.slice(1).map(([label, id]) =>
              id.startsWith("/") ? (
                <a key={id} href={id}>
                  {label}
                </a>
              ) : (
                <button key={id} type="button" onClick={() => scrollTo(id)}>
                  {label}
                </button>
              ),
            )}
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>Rama in spirit · Kal in strength · Medu in beauty</span>
          <span suppressHydrationWarning>© {new Date().getFullYear()} RKM Travel Hub</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button className="wa-float" type="button" onClick={() => openWhatsApp()} aria-label="Chat with RKM Travel Hub on WhatsApp">
        <MessageCircle size={24} />
      </button>

      {/* ============ LIGHTBOX ============ */}
      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[lightbox][1]} onClick={() => setLightbox(null)}>
          <button className="lb-close" type="button" aria-label="Close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <button
            className="lb-nav prev"
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i - 1 + gallery.length) % gallery.length);
            }}
          >
            <ArrowLeft size={22} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={`/img/${gallery[lightbox][0]}-1600.webp`} alt={gallery[lightbox][1]} />
            <figcaption>{gallery[lightbox][1]}</figcaption>
          </figure>
          <button
            className="lb-nav next"
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i + 1) % gallery.length);
            }}
          >
            <ArrowRight size={22} />
          </button>
        </div>
      )}

      {/* ============ BOOKING MODAL ============ */}
      {bookingOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(e) => e.target === e.currentTarget && setBookingOpen(false)}>
          <div className="modal-card">
            <button className="modal-close" type="button" onClick={() => setBookingOpen(false)} aria-label="Close enquiry form">
              <X size={20} />
            </button>
            <Tag>Enquiry</Tag>
            <h2 id="booking-title">Plan your visit</h2>
            <p className="muted">Tell us what you need — your enquiry opens in WhatsApp, ready to send.</p>
            <form onSubmit={submitBooking}>
              <div className="form-row">
                <label>
                  <span>Your name</span>
                  <input name="name" required autoComplete="name" placeholder="Full name" />
                </label>
                <label>
                  <span>Phone / WhatsApp</span>
                  <input name="phone" required type="tel" autoComplete="tel" placeholder="+91" />
                </label>
              </div>
              <fieldset>
                <legend>What are you looking for?</legend>
                <div className="chips">
                  {enquiryOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={selected.includes(opt) ? "active" : ""}
                      aria-pressed={selected.includes(opt)}
                      onClick={() => toggleOption(opt)}
                    >
                      {selected.includes(opt) && <Check size={14} strokeWidth={3} />}
                      {opt}
                    </button>
                  ))}
                </div>
                {formError && <p className="form-error">{formError}</p>}
              </fieldset>
              <div className="form-row">
                <label>
                  <span>Preferred date</span>
                  <input name="date" type="date" />
                </label>
                <label>
                  <span>Guests</span>
                  <input name="guests" type="number" min="1" placeholder="e.g. 20" />
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea name="message" rows="3" placeholder="Anything else we should know?" />
              </label>
              <button className="arrow-btn dark full" type="submit">
                <span>Send on WhatsApp</span>
                <i aria-hidden="true">
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
