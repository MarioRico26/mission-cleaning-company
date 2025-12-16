"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>;
}

export default function HomePage() {
  const [heroPanel, setHeroPanel] = useState<"logo" | "info">("logo");

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const statusCopy = useMemo(() => {
    if (status === "sending") return "Sending…";
    if (status === "success") return "Sent! We’ll get back to you soon.";
    if (status === "error") return "Error sending message. Please try again.";
    return "";
  }, [status]);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroPanel((p) => (p === "logo" ? "info" : "logo"));
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Mission Cleaning Company logo"
                className="h-10 w-10 rounded-xl object-contain"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide text-slate-900">
                  Mission Cleaning Company
                </p>
                <p className="text-xs text-slate-500">
                  Residential & Commercial Cleaning
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <a href="#services" className="hover:text-slate-900">
                Services
              </a>
              <a href="#work" className="hover:text-slate-900">
                Our Work
              </a>
              <a href="#about" className="hover:text-slate-900">
                About
              </a>
              <a href="#contact" className="hover:text-slate-900">
                Contact
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Get a quote
              </a>
            </nav>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-slate-100">
        <Container>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:items-center md:py-16">
            {/* Text */}
            <div className="md:w-1/2">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                Reliable cleaning services across New Jersey
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Residential & commercial cleaning
                <span className="block text-slate-500">
                  done with excellence and integrity.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
                Mission Cleaning Company delivers dependable general cleaning
                for homes and businesses, plus specialized services when your
                space needs a higher standard of detail and safety.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
                >
                  Request a free estimate
                </a>
                <a
                  href="tel:609-709-7997"
                  className="text-sm font-medium text-slate-800 underline-offset-4 hover:underline"
                >
                  Call us: 609-709-7997
                </a>
              </div>

              {/* Quick trust highlights (general, not restaurant-only) */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <StatPill label="Residential cleaning" sub="Recurring & deep clean" />
                <StatPill label="Commercial cleaning" sub="Offices & facilities" />
                <StatPill label="Specialty services" sub="Kitchen exhaust & more" />
              </div>
            </div>

            {/* Visual */}
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-slate-300/60 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                  <div className="h-64 bg-[url('/images/work-1.jpeg')] bg-cover bg-center grayscale sm:h-80" />

                  <div className="border-t border-slate-200 bg-white p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge>Residential</Badge>
                        <Badge>Commercial</Badge>
                        <Badge>Detail-focused</Badge>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition ${
                            heroPanel === "logo"
                              ? "bg-slate-900"
                              : "bg-slate-300"
                          }`}
                        />
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition ${
                            heroPanel === "info"
                              ? "bg-slate-900"
                              : "bg-slate-300"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      {heroPanel === "logo" ? (
                        <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6">
                          <img
                            src="/images/logo.png"
                            alt="Mission Cleaning Company logo large"
                            className="h-24 w-auto object-contain grayscale sm:h-28"
                          />
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <p className="text-sm font-semibold text-slate-900">
                            What we do
                          </p>
                          <p className="mt-1 text-xs text-slate-600">
                            General cleaning plus specialized services when needed.
                          </p>
                          <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                            <li className="flex items-start gap-2">
                              <Dot /> Residential: recurring & deep cleaning.
                            </li>
                            <li className="flex items-start gap-2">
                              <Dot /> Commercial: offices and business spaces.
                            </li>
                            <li className="flex items-start gap-2">
                              <Dot /> Specialty: kitchen exhaust systems & appliances.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-12 md:py-16">
        <Container>
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Main Services
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear, consistent cleaning for homes and businesses, with specialty
              options available for specific environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Residential Cleaning"
              description="Routine or one-time cleaning for homes and apartments."
              bullets={[
                "Recurring cleaning (weekly/biweekly/monthly)",
                "Deep cleaning options",
                "Move-in / move-out support",
              ]}
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Professional cleaning for offices and commercial spaces."
              bullets={[
                "Common areas & restrooms",
                "Break rooms & kitchens",
                "Reliable scheduling for businesses",
              ]}
            />
            <ServiceCard
              title="Specialty Cleaning"
              description="Services that require extra attention to detail and safety."
              bullets={[
                "Commercial kitchen exhaust systems",
                "Appliance cleaning",
                "Detail-focused, safety-first approach",
              ]}
            />
          </div>

          {/* Keep the NFPA paragraph EXACT as requested, but as a specialty highlight */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">
              Specialty service highlight
            </p>
            <p className="mt-2 text-sm text-slate-700">
              We clean your kitchen exhaust system, appliances and more in
              accordance with NFPA Code 96 and local fire marshal requirements.
              Our ultimate goal is the safety and security of your customers,
              staff, and business.
            </p>
          </div>
        </Container>
      </section>

      {/* OUR WORK */}
      <section
        id="work"
        className="border-t border-slate-200 bg-white py-12 md:py-16"
      >
        <Container>
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Our Work
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A few examples of our work across residential, commercial, and specialty jobs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <WorkCard
              imgSrc="/images/work-1.jpeg"
              title="Work Example #1"
              desc="Professional cleaning with consistent, detail-focused results."
            />
            <WorkCard
              imgSrc="/images/work-2.jpeg"
              title="Work Example #2"
              desc="Reliable service for spaces that require a higher standard of clean."
            />
          </div>
        </Container>
      </section>

      {/* ABOUT (texts exactly as you gave) */}
      <section
        id="about"
        className="border-t border-slate-200 bg-slate-50 py-12 md:py-16"
      >
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                About Mission Cleaning Company
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                Mission Cleaning Company is a full-service cleaning company specializing in commercial kitchen exhaust systems and appliances.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Founded and built on excellence and integrity with the ultimate goal of keeping people and property safe.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                We look forward to the opportunity to meet and exceed your expectations with our impeccable service.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <FeatureItem
                title="General cleaning, done right"
                description="Residential and commercial cleaning with consistent quality and clear communication."
              />
              <FeatureItem
                title="Specialty expertise"
                description="Commercial kitchen exhaust systems and appliance cleaning when your environment requires it."
              />
              <FeatureItem
                title="Excellence & integrity"
                description="Founded on doing the job properly with respect for people, property, and safety."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-slate-200 bg-white py-12 md:py-16"
      >
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Request a free estimate
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Tell us what you need and we&apos;ll respond with a free, no-obligation estimate.
              </p>

              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a className="hover:underline" href="tel:609-709-7997">
                    609-709-7997
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    className="hover:underline"
                    href="mailto:missioncleaningcomp@gmail.com"
                  >
                    missioncleaningcomp@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Service area:</span> New Jersey and surrounding areas.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  What to include in your request:
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Residential or commercial</li>
                  <li>• Type of cleaning needed</li>
                  <li>• Preferred date range</li>
                  <li>• Any special instructions (including kitchen exhaust if applicable)</li>
                </ul>
              </div>
            </div>

            {/* Form (sends email via /api/contact) */}
            <form
              className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              onSubmit={async (e) => {
                e.preventDefault();
                if (status === "sending") return;

                setStatus("sending");

                const form = e.currentTarget;
                const fd = new FormData(form);

                const payload = {
                  name: String(fd.get("name") || "").trim(),
                  email: String(fd.get("email") || "").trim(),
                  phone: String(fd.get("phone") || "").trim(),
                  serviceType: String(fd.get("serviceType") || "").trim(),
                  business: String(fd.get("business") || "").trim(),
                  message: String(fd.get("message") || "").trim(),
                };

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });

                  if (res.ok) {
                    form.reset();
                    setStatus("success");
                    setTimeout(() => setStatus("idle"), 5000);
                  } else {
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 5000);
                  }
                } catch {
                  setStatus("error");
                  setTimeout(() => setStatus("idle"), 5000);
                }
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Full name
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Service type
                  </label>
                  <select
                    name="serviceType"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option>Residential cleaning</option>
                    <option>Commercial cleaning</option>
                    <option>Deep cleaning</option>
                    <option>Move-in / Move-out</option>
                    <option>Kitchen exhaust & appliances (specialty)</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Address / business name (optional)
                </label>
                <input
                  name="business"
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  placeholder="City, business name, or neighborhood"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Details
                </label>
                <textarea
                  name="message"
                  required
                  className="h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  placeholder="Tell us what you need, timeline, and any special requests…"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full rounded-full py-2.5 text-sm font-semibold text-white transition ${
                  status === "sending"
                    ? "bg-slate-700 cursor-not-allowed"
                    : "bg-slate-900 hover:bg-black"
                }`}
              >
                {status === "sending" ? "Sending…" : "Submit request"}
              </button>

              {status !== "idle" && (
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                  {statusCopy}
                </div>
              )}

              <p className="text-xs text-slate-500">
                By submitting this form you agree to be contacted about your
                cleaning request. No spam, ever.
              </p>
            </form>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <Container>
          <div className="py-6 text-xs text-slate-500">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <p>© {new Date().getFullYear()} Mission Cleaning Company.</p>
              <p>General Cleaning Services | New Jersey</p>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <a
                href="https://www.bytenetworks.net/"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-5 py-2 shadow-sm"
              >
                <span className="absolute inset-0 rounded-full opacity-0 blur-lg transition group-hover:opacity-100 bg-slate-200/60" />
                <span className="relative h-2 w-2 rounded-full bg-slate-900" />
                <span className="relative text-[11px] tracking-[0.14em] uppercase text-slate-600">
                  Proudly Created by
                </span>
                <span className="relative text-[11px] font-semibold tracking-wide text-slate-900">
                  Byte Networks
                </span>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}

function StatPill({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs font-semibold text-slate-900">{label}</p>
      <p className="mt-1 text-[11px] text-slate-500">{sub}</p>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

function Dot() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900" />
  );
}

function ServiceCard({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Dot />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkCard({
  imgSrc,
  title,
  desc,
}: {
  imgSrc: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img
        src={imgSrc}
        alt={title}
        className="h-72 w-full object-cover grayscale"
      />
      <div className="border-t border-slate-200 p-4">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
      <p className="text-xs font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-600">{description}</p>
    </div>
  );
}
