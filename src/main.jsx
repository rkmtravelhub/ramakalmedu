import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import "./styles.css";

const A = "/images/";

const CONTACT = "919074685552";
const PHONE_DISPLAY = "+91 90746 85552";

const gallery = [
  ["RamaKalMedu_view.jpg", "Ramakalmedu viewpoint", "Mountain panorama"],
  ["RamaKalMedu_Nature_view.jpg", "Rock & valley", "Western Ghats landscape"],
  [
    "ramakalmedu_windmills_elevated_view.jpg",
    "Windmills at sunset",
    "Scenic Ramakalmedu",
  ],
  ["ramakalmedu_rock_view.jpg", "Ramakalmedu rock", "Signature landmark"],
  ["ramakalmedu_tamilnadu_view.jpg", "Tamil Nadu panorama", "Valley views"],
  ["ramakalmedu_offroad_view.jpg", "Off-road trail", "Adventure route"],
  ["RamaKalMedu_Near_Vineyard.jpg", "Local vineyard", "Taste of the region"],
  [
    "ramakalmedu_kuravan_kurathi_statue.jpg",
    "Kuravan & Kurathi",
    "Local landmark",
  ],
];

const facilities = [
  [
    "🚿",
    "FreshUp Rooms",
    "Clean bathrooms and toilets for tourist groups, buses, vans and families.",
  ],
  [
    "🛏️",
    "Dormitory Stay",
    "Practical group accommodation for travellers, school tours and families.",
  ],
  [
    "⛺",
    "Tent Stay",
    "Outdoor accommodation for guests who want a closer-to-nature experience.",
  ],
  [
    "🔥",
    "Campfire",
    "Relax around a campfire and enjoy the mountain evening with friends and family.",
  ],
  [
    "🏊",
    "Swimming Pool",
    "A leisure facility for guests and visitors to cool down after exploring.",
  ],
  [
    "☕",
    "Food Court",
    "Food ordering and refreshments for travellers and tour groups.",
  ],
  [
    "🌿",
    "Spices Shop",
    "Discover Kerala spices and take a taste of Idukki home with you.",
  ],
  [
    "🛍️",
    "Fancy Shop",
    "Convenient travel, gift and small shopping needs at the hub.",
  ],
  [
    "🚙",
    "Jeep Safari",
    "Local off-road adventure support and jeep safari booking enquiries.",
  ],
  [
    "🏡",
    "Homestay",
    "A local-style stay option for travellers wanting a longer experience.",
  ],
  [
    "🌬️",
    "Windmill Visit",
    "Explore the wind-swept highlands and nearby windmill country.",
  ],
  [
    "🍇",
    "Vineyard Visit",
    "Plan a nearby Cumbum-side vineyard visit as part of a longer day trip.",
  ],
  [
    "🪨",
    "Tortoise Rock",
    "Explore Tortoise Rock / Amappara and its off-road route.",
  ],
  [
    "🚌",
    "Bus & Van Support",
    "A convenient stop for tourist buses, vans and group travel.",
  ],
  [
    "ℹ️",
    "Tourist Information",
    "Useful local information to help plan your Ramakalmedu visit.",
  ],
  [
    "📶",
    "Wi-Fi & Backup",
    "Free Wi-Fi, power backup and security support for a smoother stay.",
  ],
];

const experiences = [
  {
    no: "01",
    title: "Refresh",
    image: "20260927_070308.jpeg",
    text: "Arrive, freshen up and take a comfortable pause in the hills.",
  },
  {
    no: "02",
    title: "Stay",
    image: "RamaKalMedu_RKM_Travel_Hub.jpeg",
    text: "Choose a practical stay for families, schools, groups and travellers.",
  },
  {
    no: "03",
    title: "Explore",
    image: "ramakalmedu_rock_elevated_rear_view.jpg",
    text: "Discover rocks, viewpoints, windmills, trails and valley panoramas.",
  },
  {
    no: "04",
    title: "Experience",
    image: "RamaKalMedu_Near_Vineyard.jpg",
    text: "Slow down with food, local culture, nature and the spirit of Idukki.",
  },
];

const highlights = [
  "Ideal for tourist groups and family trips",
  "School and college tours",
  "Corporate and adventure groups",
  "Jeep safari booking support",
  "Tourist information",
  "Clean toilets and bathrooms",
  "Free Wi-Fi",
  "Power backup and security",
];

const nearbyPlaces = [
  [
    "Ramakkal Rock",
    "ramakalmedu_rock_view.jpg",
    "The iconic rock and viewpoint associated with the Ramakalmedu landscape.",
  ],
  [
    "Tortoise Rock",
    "ramakalmedu_tortoise.jpg",
    "Amappara / Tortoise Rock and its off-road route for adventure seekers.",
  ],
  [
    "Windmill Country",
    "ramakalmedu_windmills.jpg",
    "The famous wind-swept highlands and surrounding wind farms.",
  ],
  [
    "Cumbum Vineyards",
    "RamaKalMedu_Near_Vineyard.jpg",
    "A nearby Tamil Nadu-side destination that can be included in a longer day trip.",
  ],
];

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const [activeExperience, setActiveExperience] = useState("Nature Escape");

  const [dayType, setDayType] = useState("Full Day");

  const [stayType, setStayType] = useState("Dormitory");

  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const [selectedEnquiries, setSelectedEnquiries] = useState([]);

  const enquiryRef = useRef(null);
  const videoRef = useRef(null);

  const nav = useMemo(
    () => [
      ["Home", "home"],
      ["Stay", "stay"],
      ["Experiences", "experiences"],
      ["Explore", "explore"],
      ["Gallery", "gallery"],
      ["Facilities", "facilities"],
      ["Contact", "contact"],
    ],
    [],
  );

  /*
   * Close enquiry dropdown when clicking outside.
   */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (enquiryRef.current && !enquiryRef.current.contains(event.target)) {
        setEnquiryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /*
   * Close dropdown when modal closes.
   */
  useEffect(() => {
    if (!bookingOpen) {
      setEnquiryOpen(false);
    }
  }, [bookingOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  /*
   * ---------------------------------------------------------
   * ENQUIRY MULTI-SELECT
   * ---------------------------------------------------------
   */

  const toggleEnquiry = (option) => {
    setSelectedEnquiries((current) => {
      if (current.includes(option)) {
        return current.filter((item) => item !== option);
      }

      return [...current, option];
    });
  };

  const removeEnquiry = (option) => {
    setSelectedEnquiries((current) =>
      current.filter((item) => item !== option),
    );
  };

  /*
   * ---------------------------------------------------------
   * WHATSAPP
   * ---------------------------------------------------------
   */

  const buildEnquiry = (form) => {
    if (!(form instanceof HTMLFormElement)) {
      return {
        subject: "RKM Travel Hub Enquiry",
        body: "Hi RKM Travel Hub! I would like to know more about visiting Ramakalmedu.",
      };
    }

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();

    const phone = String(data.get("phone") || "").trim();

    const date = String(data.get("date") || "").trim();

    const guests = String(data.get("guests") || "").trim();

    const message = String(data.get("message") || "").trim();

    const enquiries = data
      .getAll("enquiry")
      .map((value) => String(value).trim())
      .filter(Boolean);

    const enquiryText =
      enquiries.length > 0 ? enquiries.join(", ") : "General Enquiry";

    const subject = `RKM Travel Hub Enquiry - ${enquiryText}`;

    const body = [
      "Hi RKM Travel Hub!",
      "",
      `Name: ${name || "Not specified"}`,
      `Phone / WhatsApp: ${phone || "Not specified"}`,
      `Enquiry: ${enquiryText}`,
      `Preferred date: ${date || "Not specified"}`,
      `Guests: ${guests || "Not specified"}`,
      "",
      "Message:",
      message || "No additional message.",
    ].join("\n");

    return {
      subject,
      body,
    };
  };

  const openWhatsApp = (form = null) => {
    let message =
      "Hi RKM Travel Hub! I would like to know more about visiting Ramakalmedu.";

    /*
     * Prevent the React click event from being
     * accidentally passed into FormData().
     */
    if (form instanceof HTMLFormElement) {
      const { body } = buildEnquiry(form);

      message = body;
    }

    const whatsappUrl =
      `https://wa.me/${CONTACT}` + `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  /*
   * ---------------------------------------------------------
   * FORM SUBMIT
   * ---------------------------------------------------------
   */

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    if (selectedEnquiries.length === 0) {
      setEnquiryOpen(true);

      alert("Please select at least one enquiry option.");

      return;
    }

    openWhatsApp(form);
  };

  /*
   * ---------------------------------------------------------
   * OPEN BOOKING
   * ---------------------------------------------------------
   */

  const openBooking = () => {
    setBookingOpen(true);
  };

  return (
    <div className="site-shell min-h-screen bg-rkm-cream/30 text-rkm-ink">
      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="navbar sticky top-0 z-50">
        <div className="container nav-inner">
          <button
            className="brand"
            type="button"
            onClick={() => scrollTo("home")}
            aria-label="RamaKalMedu home"
          >
            <span className="brand-logo">
              R<span>K</span>M
            </span>

            <span className="brand-copy">
              <strong>
                RamaKalMedu<span>.com</span>
              </strong>

              <small>RKM TRAVEL HUB · IDUKKI</small>
            </span>
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <nav
            id="site-navigation"
            className={menuOpen ? "nav-links open" : "nav-links"}
          >
            {nav.map(([label, id]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}

            <button className="nav-cta" type="button" onClick={openBooking}>
              Enquire Now ↗
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
            ===================================================== */}

        <section id="home" className="hero">
          <img
            className="hero-image"
            src={`${A}RamaKalMedu_Nature_view_WM1.jpg`}
            alt="Ramakalmedu mountain landscape"
          />

          <div className="hero-overlay" />
          <div className="hero-sun" />

          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <span>●</span>
                RAMAKALMEDU · IDUKKI, KERALA · WESTERN GHATS
              </div>

              <h1>
                Where <em>Divinity</em>
                <br />
                Meets Nature.
              </h1>

              <p className="hero-lead">Refresh · Stay · Explore · Experience</p>

              <p className="hero-text">
                Your welcoming travel hub in Ramakalmedu — bringing refreshment,
                rest, food, shopping and local experiences together for
                families, tourist groups, school tours and adventure seekers.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-btn transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  type="button"
                  onClick={openBooking}
                >
                  Plan Your Visit <span>↗</span>
                </button>

                <button
                  className="ghost-btn transition-all duration-300 hover:-translate-y-0.5"
                  type="button"
                  onClick={() => scrollTo("gallery")}
                >
                  View the place ↓
                </button>
              </div>
            </div>

            <div className="hero-side-card">
              <span className="pin">⌖</span>

              <small>YOUR BASE IN</small>

              <strong>Ramakalmedu</strong>

              <span>Idukki · Kerala</span>

              <div className="hero-card-image">
                <img
                  src={`${A}ramakalmedu_windmills_elevated_view.jpg`}
                  alt="Ramakalmedu windmills"
                />
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>Scroll to explore</span>

            <i>↓</i>

            <span>Nature · Stay · Adventure</span>
          </div>
        </section>

        {/* =====================================================
            INTRO
            ===================================================== */}

        <section className="intro-strip">
          <div className="container intro-inner">
            <div>
              <span>✦</span>

              <strong>Experience Ramakalmedu</strong>

              <span>✦</span>
            </div>

            <p>Like Never Before</p>
          </div>
        </section>

        {/* =====================================================
            STAY
            ===================================================== */}

        <section id="stay" className="section light-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">STAY YOUR WAY</span>

              <h2>
                Comfort in the <em>hills.</em>
              </h2>

              <p>
                Come for the view. Stay for the experience. RKM Travel Hub gives
                your group a practical place to pause, stay and start exploring.
              </p>
            </div>

            <div className="stay-grid">
              <article className="stay-card large">
                <img
                  src={`${A}RamaKalMedu_RKM_Travel_Hub.jpeg`}
                  alt="RKM Travel Hub building"
                />

                <div className="stay-card-content">
                  <span>01 · RKM TRAVEL HUB</span>

                  <h3>Your comfortable base.</h3>

                  <p>
                    A purpose-built travel hub surrounded by the landscapes of
                    Ramakalmedu.
                  </p>

                  <button type="button" onClick={openBooking}>
                    Ask about stay →
                  </button>
                </div>
              </article>

              <article className="stay-card">
                <img
                  src={`${A}ramakalmedu_tamilnadu_town_view.jpg`}
                  alt="Ramakalmedu town view"
                />

                <div className="stay-card-content">
                  <span>02 · GROUP STAY</span>

                  <h3>Stay together.</h3>

                  <p>Simple accommodation designed around group travel.</p>

                  <button type="button" onClick={openBooking}>
                    Group enquiry →
                  </button>
                </div>
              </article>

              <article className="stay-card">
                <img
                  src={`${A}ramakalmedu_offroad_view.jpg`}
                  alt="Ramakalmedu off-road trail"
                />

                <div className="stay-card-content">
                  <span>03 · CAMP & ADVENTURE</span>

                  <h3>Go closer to nature.</h3>

                  <p>
                    Pair your stay with camping, trails and local adventure.
                  </p>

                  <button type="button" onClick={() => scrollTo("experiences")}>
                    Explore →
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCES
            ===================================================== */}

        <section id="experiences" className="section dark-section">
          <div className="container">
            <div className="section-heading dark centered">
              <span className="section-kicker">THE RKM WAY</span>

              <h2>
                More than a <em>stop.</em>
              </h2>

              <p>
                Use the hub as the starting point for a relaxed, scenic and
                memorable Ramakalmedu trip.
              </p>
            </div>

            <div className="experience-grid">
              {experiences.map((item) => (
                <article className="experience-card" key={item.no}>
                  <img src={`${A}${item.image}`} alt={item.title} />

                  <div className="experience-overlay" />

                  <div className="experience-copy">
                    <span>{item.no}</span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
            ===================================================== */}

        <section id="gallery" className="section light-section gallery-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">SEE RAMAKALMEDU</span>

              <h2>
                The place is the <em>experience.</em>
              </h2>

              <p>
                A selection from your photographs — viewpoints, rocks,
                windmills, valleys, trails and local landmarks.
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map(([src, title, tag], i) => (
                <button
                  className={`gallery-item gallery-${i + 1}`}
                  key={src}
                  type="button"
                  onClick={() =>
                    setActiveImage({
                      src,
                      title,
                      tag,
                    })
                  }
                >
                  <img src={`${A}${src}`} alt={title} loading="lazy" />

                  <span className="gallery-caption">
                    <small>{tag}</small>

                    <strong>{title}</strong>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            VIDEO
            ===================================================== */}

        <section className="cinematic-section">
          <video
            ref={videoRef}
            className="cinematic-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${A}RamaKalMedu_Nature_view_WM1.jpg`}
          >
            <source src={`${A}RamaKalMedu.mp4`} type="video/mp4" />
          </video>

          <div className="cinematic-overlay" />
          <div className="cinematic-grain" />

          <div className="container cinematic-content">
            <div className="cinematic-copy">
              <span className="section-kicker">A MOMENT FROM RAMAKALMEDU</span>

              <h2>
                Let the hills
                <br />
                <em>speak for themselves.</em>
              </h2>

              <p>
                Take a breath. Watch the landscape move. This is the Ramakalmedu
                experience — wide skies, mountain air and the Western Ghats
                unfolding around you.
              </p>

              <button
                className="light-btn transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                type="button"
                onClick={openBooking}
              >
                Plan Your Visit ↗
              </button>
            </div>

            <div className="cinematic-badge">
              <span>RKM</span>

              <small>TRAVEL HUB</small>

              <i>✦</i>

              <small>RAMAKALMEDU · IDUKKI</small>
            </div>
          </div>

          <div className="cinematic-bottom">
            <span>LIVE THE LANDSCAPE</span>

            <span>●</span>

            <span>WESTERN GHATS</span>
          </div>
        </section>

        {/* =====================================================
            PANORAMA
            ===================================================== */}

        <section className="panorama-section">
          <img
            src={`${A}ramakalmedu_tamilnadu_longview.jpg`}
            alt="Wide view from Ramakalmedu"
          />

          <div className="panorama-overlay" />

          <div className="container panorama-copy">
            <span className="section-kicker">DISCOVER IDUKKI</span>

            <h2>
              Look further.
              <br />
              <em>Feel more.</em>
            </h2>

            <p>
              From dramatic rock formations to endless valley views, Ramakalmedu
              makes the journey part of the destination.
            </p>

            <button
              className="light-btn transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              type="button"
              onClick={openBooking}
            >
              Plan an Adventure ↗
            </button>
          </div>
        </section>

        {/* =====================================================
            FACILITIES
            ===================================================== */}

        <section id="facilities" className="section light-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">AT THE HUB</span>

              <h2>
                Everything you need,
                <br />
                <em>right here.</em>
              </h2>

              <p>
                Facilities and services for a smoother stop, stay and adventure.
              </p>
            </div>

            <div className="facility-grid">
              {facilities.map(([icon, title, text]) => (
                <article className="facility-card" key={title}>
                  <div className="facility-icon">{icon}</div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            NEARBY
            ===================================================== */}

        <section className="explore-places-section section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">EXPLORE AROUND THE HUB</span>

              <h2>
                Make Ramakalmedu your <em>base.</em>
              </h2>

              <p>
                Build a day around viewpoints, rocks, windmills, off-road routes
                and nearby attractions.
              </p>
            </div>

            <div className="nearby-grid">
              {nearbyPlaces.map(([title, image, text]) => (
                <article className="nearby-card" key={title}>
                  <img src={`${A}${image}`} alt={title} />

                  <div>
                    <span>DISCOVER</span>

                    <h3>{title}</h3>

                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE PICKER
            ===================================================== */}

        <section className="experience-picker section" id="experience-picker">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">CHOOSE YOUR EXPERIENCE</span>

              <h2>
                Come for what <em>moves you.</em>
              </h2>

              <p>Pick a mood and discover how a Ramakalmedu day can unfold.</p>
            </div>

            <div className="experience-tabs">
              {[
                "Nature Escape",
                "Campfire Night",
                "Adventure",
                "Family Trip",
                "Group Tour",
                "Relax & Stay",
              ].map((x) => (
                <button
                  key={x}
                  type="button"
                  className={activeExperience === x ? "active" : ""}
                  onClick={() => setActiveExperience(x)}
                >
                  {x}
                </button>
              ))}
            </div>

            <div className="experience-feature">
              <img
                src={`${A}${
                  activeExperience === "Adventure"
                    ? "ramakalmedu_offroad_view.jpg"
                    : activeExperience === "Campfire Night"
                      ? "20260927_065616.jpg"
                      : activeExperience === "Family Trip"
                        ? "RamaKalMedu_view.jpg"
                        : activeExperience === "Group Tour"
                          ? "ramakalmedu_tamilnadu_longview.jpg"
                          : activeExperience === "Relax & Stay"
                            ? "RamaKalMedu_RKM_Travel_Hub.jpeg"
                            : "RamaKalMedu_Nature_view.jpg"
                }`}
                alt={activeExperience}
              />

              <div className="experience-feature-copy">
                <span>RKM EXPERIENCE</span>

                <h3>{activeExperience}</h3>

                <p>
                  {activeExperience === "Adventure"
                    ? "Take the scenic route with off-road trails, viewpoints and jeep safari possibilities."
                    : activeExperience === "Campfire Night"
                      ? "End the day slowly with warm food, stories, mountain air and a campfire."
                      : activeExperience === "Family Trip"
                        ? "A relaxed base for families who want views, comfort and easy local exploring."
                        : activeExperience === "Group Tour"
                          ? "Plan school, college, corporate and friends trips with practical support at the hub."
                          : activeExperience === "Relax & Stay"
                            ? "Freshen up, rest, eat well and enjoy the hills without rushing."
                            : "Wide views, quiet moments and the feeling of being above the valleys."}
                </p>

                <button
                  className="primary-btn"
                  type="button"
                  onClick={openBooking}
                >
                  Plan this experience ↗
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PLAN DAY
            ===================================================== */}

        <section className="plan-day-section section" id="plan-day">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">PLAN YOUR DAY</span>

              <h2>
                From sunrise to <em>campfire.</em>
              </h2>

              <p>
                Use this as inspiration and adjust the pace to suit your group.
              </p>
            </div>

            <div className="day-tabs">
              {["Half Day", "Full Day"].map((x) => (
                <button
                  key={x}
                  type="button"
                  className={dayType === x ? "active" : ""}
                  onClick={() => setDayType(x)}
                >
                  {x}
                </button>
              ))}
            </div>

            <div className="timeline">
              {(dayType === "Half Day"
                ? [
                    [
                      "08:00",
                      "FreshUp & breakfast",
                      "Start slowly at RKM Travel Hub.",
                    ],
                    [
                      "09:00",
                      "Windmill country",
                      "Take in the highland views.",
                    ],
                    [
                      "11:00",
                      "Ramakkal Rock",
                      "Enjoy the signature viewpoint.",
                    ],
                    [
                      "12:30",
                      "Lunch & refresh",
                      "Return for food and a comfortable pause.",
                    ],
                  ]
                : [
                    [
                      "06:00",
                      "Sunrise",
                      "Start with the cool mountain morning.",
                    ],
                    ["08:00", "Breakfast & FreshUp", "Recharge at the hub."],
                    [
                      "10:00",
                      "Windmills & viewpoints",
                      "Explore the highlands.",
                    ],
                    ["13:00", "Lunch", "Pause and refuel."],
                    [
                      "15:00",
                      "Jeep / local adventure",
                      "Choose an off-road experience.",
                    ],
                    [
                      "17:30",
                      "Tortoise Rock / sunset",
                      "Finish with a scenic view.",
                    ],
                    ["19:00", "Campfire", "Slow down under the evening sky."],
                  ]
              ).map(([time, title, text]) => (
                <article key={time} className="timeline-item">
                  <time>{time}</time>

                  <div>
                    <h3>{title}</h3>

                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STAY SELECTOR
            ===================================================== */}

        <section className="stay-selector section" id="stay-selector">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">FIND YOUR STAY</span>

              <h2>
                Choose the way you want to <em>stay.</em>
              </h2>
            </div>

            <div className="stay-selector-grid">
              {[
                [
                  "Dormitory",
                  "Group-friendly practical accommodation",
                  "RamaKalMedu_RKM_Travel_Hub.jpeg",
                ],
                [
                  "Tent Stay",
                  "A closer-to-nature outdoor option",
                  "ramakalmedu_offroad_view.jpg",
                ],
                [
                  "Homestay",
                  "A relaxed local-style experience",
                  "RamaKalMedu_view.jpg",
                ],
              ].map(([name, text, img]) => (
                <button
                  key={name}
                  type="button"
                  className={`stay-choice ${stayType === name ? "active" : ""}`}
                  onClick={() => setStayType(name)}
                >
                  <img src={`${A}${img}`} alt={name} />

                  <div>
                    <span>{name}</span>

                    <h3>{name}</h3>

                    <p>{text}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="stay-detail">
              <div>
                <span>YOUR SELECTION</span>

                <h3>{stayType}</h3>

                <p>
                  Tell RKM your date, group size and requirements. The team can
                  confirm the suitable option on WhatsApp.
                </p>
              </div>

              <button
                className="primary-btn"
                type="button"
                onClick={openBooking}
              >
                Ask about {stayType} ↗
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAP
            ===================================================== */}

        <section className="map-section section" id="explore">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">EXPLORE AROUND RKM</span>

              <h2>
                Your base for the <em>Western Ghats.</em>
              </h2>

              <p>
                A simple visual guide to places you can consider around your
                Ramakalmedu visit.
              </p>
            </div>

            <div className="illustrated-map">
              <div className="map-road road-a" />
              <div className="map-road road-b" />

              <button
                className="map-pin hub"
                type="button"
                onClick={openBooking}
              >
                <b>RKM</b>

                <span>Travel Hub</span>
              </button>

              <button
                className="map-pin rock"
                type="button"
                onClick={openBooking}
              >
                🪨
                <span>Ramakkal Rock</span>
              </button>

              <button
                className="map-pin tortoise"
                type="button"
                onClick={openBooking}
              >
                🐢
                <span>Tortoise Rock</span>
              </button>

              <button
                className="map-pin wind"
                type="button"
                onClick={openBooking}
              >
                🌬️
                <span>Windmills</span>
              </button>

              <button
                className="map-pin vineyard"
                type="button"
                onClick={openBooking}
              >
                🍇
                <span>Vineyards</span>
              </button>

              <div className="map-label">
                RAMAKALMEDU
                <br />
                <small>IDUKKI · KERALA</small>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOD
            ===================================================== */}

        <section className="food-section section">
          <div className="container split-grid food-grid">
            <div className="food-photo">
              <img
                src={`${A}RamaKalMedu_RKM_Travel_Hub.jpeg`}
                alt="RKM Travel Hub"
              />
            </div>

            <div>
              <span className="section-kicker">TASTE IDUKKI</span>

              <h2>
                Eat. Sip. <em>Slow down.</em>
              </h2>

              <p className="large-copy">
                Make the hub part of your journey — with food, refreshments and
                a chance to discover the character of Kerala through local
                flavours and spices.
              </p>

              <div className="food-tags">
                <span>☕ Local Tea</span>

                <span>🌶 Kerala Spices</span>

                <span>🍛 Local Food</span>

                <span>🔥 Campfire Dining</span>
              </div>

              <button
                className="primary-btn"
                type="button"
                onClick={openBooking}
              >
                Ask about food ↗
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOMENTS
            ===================================================== */}

        <section className="moments-section section" id="moments">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">MOMENTS AT RKM</span>

              <h2>
                Take a little of the <em>hills home.</em>
              </h2>
            </div>

            <div className="moments-grid">
              {gallery.slice(0, 6).map(([src, title]) => (
                <button
                  key={src}
                  type="button"
                  onClick={() =>
                    setActiveImage({
                      src,
                      title,
                      tag: "RKM Travel Hub",
                    })
                  }
                >
                  <img src={`${A}${src}`} alt={title} />

                  <span>{title}</span>
                </button>
              ))}
            </div>

            <div className="social-note">
              Follow the journey · <strong>@ramakalmedu</strong>
            </div>
          </div>
        </section>

        {/* =====================================================
            BEFORE YOU COME
            ===================================================== */}

        <section className="visit-section section">
          <div className="container visit-grid">
            <div>
              <span className="section-kicker">BEFORE YOU COME</span>

              <h2>
                Pack light. <em>Explore well.</em>
              </h2>

              <p>Small things make a hill trip more comfortable.</p>
            </div>

            <div className="packing-list">
              {[
                "Comfortable shoes",
                "Light jacket",
                "Sunscreen",
                "Water bottle",
                "Camera",
                "Power bank",
                "Rain protection",
                "A little extra time",
              ].map((x) => (
                <div key={x}>
                  <span>✓</span>

                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TRAVEL INFO
            ===================================================== */}

        <section className="travel-info section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">GETTING HERE</span>

              <h2>
                Make the journey part of the <em>story.</em>
              </h2>
            </div>

            <div className="distance-grid">
              {[
                ["Kochi", "~150 km"],
                ["Munnar", "~100 km"],
                ["Thekkady", "~75 km"],
                ["Kottayam", "~130 km"],
              ].map(([a, b]) => (
                <div key={a}>
                  <span>{a}</span>

                  <strong>{b}</strong>
                </div>
              ))}
            </div>

            <div className="travel-actions">
              <button
                className="primary-btn"
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Ramakalmedu%2C%20Idukki%2C%20Kerala",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Get Directions ↗
              </button>

              <button
                className="outline-btn"
                type="button"
                onClick={openBooking}
              >
                Ask about transport
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            GROUPS
            ===================================================== */}

        <section className="groups-section">
          <div className="container split-grid">
            <div>
              <span className="section-kicker">MADE FOR GROUPS</span>

              <h2>
                Travel together.
                <br />
                <em>Remember more.</em>
              </h2>

              <p className="large-copy">
                Whether you are bringing a school group, family, friends or an
                adventure team, RKM Travel Hub is designed around the realities
                of group travel.
              </p>

              <div className="highlight-list">
                {highlights.map((item) => (
                  <div key={item}>
                    <span>✓</span>

                    {item}
                  </div>
                ))}
              </div>

              <button
                className="primary-btn dark-btn"
                type="button"
                onClick={openBooking}
              >
                Send a Group Enquiry ↗
              </button>
            </div>

            <div className="groups-photo">
              <img
                src={`${A}RamaKalMedu_view.jpg`}
                alt="Panoramic view from Ramakalmedu"
              />

              <div>
                <strong>RKM</strong>

                <span>YOUR BASE FOR THE WESTERN GHATS</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
            ===================================================== */}

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div>
              <span className="section-kicker">PLAN YOUR VISIT</span>

              <h2>
                Relax. Refresh.
                <br />
                <em>Reconnect.</em>
              </h2>

              <p>
                Ready to make your Ramakalmedu stop memorable? Contact RKM
                Travel Hub for stay, group, food and local experience enquiries.
              </p>

              <div className="contact-actions">
                <button
                  className="primary-btn transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  type="button"
                  onClick={openWhatsApp}
                >
                  WhatsApp Us ↗
                </button>

                <button
                  className="outline-btn"
                  type="button"
                  onClick={openBooking}
                >
                  Enquire Online
                </button>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-row">
                <span>⌖</span>

                <div>
                  <small>LOCATION</small>

                  <strong>Ramakalmedu, Idukki, Kerala</strong>
                </div>
              </div>

              <div className="contact-row">
                <span>☎</span>

                <div>
                  <small>PHONE / WHATSAPP</small>

                  <strong>{PHONE_DISPLAY}</strong>
                </div>
              </div>

              <div className="contact-row">
                <span>✦</span>

                <div>
                  <small>TRAVEL HUB</small>

                  <strong>Refresh · Stay · Explore · Experience</strong>
                </div>
              </div>

              <div className="contact-row">
                <span>◉</span>

                <div>
                  <small>WEBSITE</small>

                  <strong>www.ramakalmedu.com</strong>
                </div>
              </div>

              <button
                className="full primary-btn"
                type="button"
                onClick={openBooking}
              >
                Start Your Enquiry ↗
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          MOBILE WHATSAPP
          ===================================================== */}

      <button
        className="mobile-whatsapp"
        type="button"
        onClick={openWhatsApp}
        aria-label="Contact RKM Travel Hub on WhatsApp"
      >
        <span>◉</span>
        WhatsApp Us
      </button>

      {/* =====================================================
          MOBILE BOTTOM NAV
          ===================================================== */}

      <nav className="mobile-bottom-nav">
        {[
          ["⌂", "Home", "home"],
          ["🏔", "Explore", "explore"],
          ["🛏", "Stay", "stay"],
          ["▦", "Gallery", "gallery"],
          ["◉", "WhatsApp", null],
        ].map(([icon, label, id]) => (
          <button
            key={label}
            type="button"
            onClick={() => (id ? scrollTo(id) : openWhatsApp())}
          >
            <span>{icon}</span>

            <small>{label}</small>
          </button>
        ))}
      </nav>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>RamaKalMedu.com</strong>

            <p>RKM Travel Hub · Ramakalmedu, Idukki, Kerala</p>
          </div>

          <div className="footer-links">
            {nav.slice(0, 5).map(([label, id]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>

          <div className="footer-tag">
            RAMA IN SPIRIT · KAL IN STRENGTH · MEDU IN BEAUTY
          </div>
        </div>
      </footer>

      {/* =====================================================
          BOOKING MODAL
          ===================================================== */}

      {bookingOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setBookingOpen(false);
              setEnquiryOpen(false);
            }
          }}
        >
          <div
            className="relative my-auto w-full max-w-xl overflow-visible rounded-3xl bg-white p-5 text-rkm-ink shadow-2xl sm:p-7 md:p-8"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}

            <button
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-2xl leading-none transition hover:bg-black/10"
              type="button"
              onClick={() => {
                setBookingOpen(false);
                setEnquiryOpen(false);
              }}
              aria-label="Close enquiry form"
            >
              ×
            </button>

            {/* HEADER */}

            <span className="section-kicker">RKM TRAVEL HUB</span>

            <h2 className="mt-2 pr-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              Plan your visit.
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 opacity-65 sm:text-base">
              Tell us what you need and the team can get back to you.
            </p>

            <form onSubmit={handleBookingSubmit} className="mt-6">
              {/* NAME + PHONE */}

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  className="min-h-12 w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 text-sm outline-none transition placeholder:text-black/40 focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/5"
                />

                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  autoComplete="tel"
                  className="min-h-12 w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 text-sm outline-none transition placeholder:text-black/40 focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/5"
                />
              </div>

              {/* =================================================
                  CUSTOM MULTI SELECT
                  ================================================= */}

              <div ref={enquiryRef} className="relative mt-5">
                <label className="block text-sm font-bold">
                  What are you looking for?
                </label>

                <p className="mt-1 text-xs opacity-55">
                  Select one or more options
                </p>

                {/* SELECTED CHIPS */}

                {selectedEnquiries.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedEnquiries.map((option) => (
                      <span
                        key={option}
                        className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-rkm-cream px-3 py-1.5 text-xs font-medium text-rkm-ink"
                      >
                        <span className="min-w-0 truncate">{option}</span>

                        <button
                          type="button"
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/[0.08] text-sm leading-none transition hover:bg-black/[0.16]"
                          onClick={() => removeEnquiry(option)}
                          aria-label={`Remove ${option}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* DROPDOWN TRIGGER */}

                <button
                  type="button"
                  className={`mt-3 flex min-h-12 w-full items-center justify-between rounded-xl border bg-white px-4 text-left text-sm shadow-sm outline-none transition ${
                    enquiryOpen
                      ? "rounded-b-none border-black/30 ring-4 ring-black/5"
                      : "border-black/10 hover:border-black/25"
                  }`}
                  onClick={() => setEnquiryOpen((open) => !open)}
                  aria-expanded={enquiryOpen}
                  aria-haspopup="listbox"
                >
                  <span
                    className={
                      selectedEnquiries.length === 0
                        ? "text-black/45"
                        : "font-medium"
                    }
                  >
                    {selectedEnquiries.length === 0
                      ? "Select enquiry options"
                      : `${selectedEnquiries.length} option${
                          selectedEnquiries.length > 1 ? "s" : ""
                        } selected`}
                  </span>

                  <span
                    className={`ml-3 shrink-0 text-lg leading-none transition-transform ${
                      enquiryOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {/* DROPDOWN */}

                {enquiryOpen && (
                  <div
                    className="absolute left-0 right-0 top-full z-[300] overflow-hidden rounded-b-xl border border-t-0 border-black/10 bg-white shadow-2xl"
                    role="listbox"
                    aria-multiselectable="true"
                  >
                    <div className="max-h-64 overflow-y-auto py-1">
                      {enquiryOptions.map((option) => {
                        const selected = selectedEnquiries.includes(option);

                        return (
                          <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={selected}
                            className={`flex min-h-11 w-full items-center justify-between border-b border-black/[0.045] px-4 py-2.5 text-left text-sm transition last:border-b-0 ${
                              selected
                                ? "bg-black/[0.045] font-semibold"
                                : "hover:bg-black/[0.025]"
                            }`}
                            onClick={() => toggleEnquiry(option)}
                          >
                            <span>{option}</span>

                            {selected && (
                              <span className="ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rkm-ink text-xs text-white">
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <p className="mt-2 text-[11px] leading-4 text-black/45">
                  Select all the services you need.
                </p>
              </div>

              {/* =================================================
                  HIDDEN ENQUIRY VALUES
                  ================================================= */}

              {selectedEnquiries.map((option) => (
                <input
                  key={option}
                  type="hidden"
                  name="enquiry"
                  value={option}
                />
              ))}

              {/* DATE + GUESTS */}

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  name="date"
                  type="date"
                  className="min-h-12 w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 text-sm outline-none transition focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/5"
                />

                <input
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="No. of guests"
                  className="min-h-12 w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 text-sm outline-none transition placeholder:text-black/40 focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/5"
                />
              </div>

              {/* MESSAGE */}

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your trip..."
                className="mt-3 block w-full resize-y rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-black/40 focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/5"
              />

              {/* SEND */}

              <button
                className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-rkm-ink px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                type="submit"
              >
                <span>◉</span>
                Send Enquiry on WhatsApp ↗
              </button>

              <small className="mt-2 block text-center text-[11px] leading-5 opacity-55">
                WhatsApp opens with your enquiry pre-filled. No email is
                required.
              </small>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          LIGHTBOX
          ===================================================== */}

      {activeImage && (
        <div
          className="lightbox"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setActiveImage(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="lightbox-close"
            aria-label="Close image"
          >
            ×
          </button>

          <img src={`${A}${activeImage.src}`} alt={activeImage.title} />

          <div>
            <small>{activeImage.tag}</small>

            <h3>{activeImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement._reactRoot) {
  rootElement._reactRoot = createRoot(rootElement);
}

rootElement._reactRoot.render(<App />);
