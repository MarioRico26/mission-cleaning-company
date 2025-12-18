"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4">{children}</div>;
}

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const statusCopy = useMemo(() => {
    if (status === "sending") return "Sending…";
    if (status === "success") return "Sent! We’ll get back to you soon.";
    if (status === "error") return "Error sending message. Please try again.";
    return "";
  }, [status]);

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
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
                  Commercial Kitchen Exhaust Systems • Hoods • Appliances
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <a href="#about" className="hover:text-slate-900">
                About
              </a>
              <a href="#services" className="hover:text-slate-900">
                Services
              </a>
              <a href="#work" className="hover:text-slate-900">
                Our Work
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
          <div className="py-10 md:py-14">
            {/* BANNER STRIP (más ALTO + email pegado debajo) */}
            <div className="mb-8">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
                <div className="relative px-6 py-6 md:px-10 md:py-7">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <img
                      src="/images/mission-banner.png"
                      alt="Mission Cleaning Company banner"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/logo.png";
                      }}
                      // MÁS ALTO AQUÍ
                      className="h-28 w-full object-cover object-center md:h-32"
                    />
                  </div>

                  {/* Email como “parte del banner” */}
                  <div className="mt-4 flex items-center justify-center">
                    <a
                      href="mailto:missioncleaningcomp@gmail.com"
                      className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm hover:bg-slate-50"
                    >
                      <span className="h-2 w-2 rounded-full bg-slate-900" />
                      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Email
                      </span>
                      <span className="text-sm font-semibold text-slate-900 group-hover:underline underline-offset-4">
                        missioncleaningcomp@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO GRID */}
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* Left */}
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Kitchen Exhaust Hood Cleaning
                  <span className="block text-slate-500">
                    cleaner systems. safer businesses.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
                  We work in accordance with NFPA Code 96 and local requirements.
                  Our ultimate goal is the safety and security of your customers,
                  staff, and business.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
                  >
                    Request a free estimate
                  </a>
                  {/* Quitamos el teléfono de aquí para evitar duplicación */}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <StatPill label="Kitchen hoods" sub="Commercial systems" />
                  <StatPill
                    label="Appliance cleaning"
                    sub="Detail-focused results"
                  />
                  <StatPill label="Inspections" sub="Safety & compliance" />
                </div>
              </div>

              {/* Right visual */}
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-slate-300/60 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                  <div className="h-72 bg-[url('/images/hero-kitchen.jpg')] bg-cover bg-center grayscale sm:h-80" />

                  <div className="border-t border-slate-200 bg-white p-5">
                    {/* Pills: Hoods / Appliances / Inspections */}
                    <div className="flex flex-wrap gap-2">
                      <Badge>Hoods</Badge>
                      <Badge>Appliances</Badge>
                      <Badge>Inspections</Badge>
                    </div>

                    {/* Pills de NFPA/Insured/Fire Safety */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Pill>NFPA Code 96 Certified</Pill>
                      <Pill>Insured</Pill>
                      <Pill>Fire Safety Focused</Pill>
                    </div>

                    {/* Quitamos el phone/email de aquí (email ya está bajo banner) */}

                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-900">
                        What we do
                      </p>
                      <p className="mt-1 text-xs text-slate-600">
                        Hood cleaning, appliance cleaning, and on-site inspections.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                        <li className="flex items-start gap-2">
                          <Dot /> Work aligned with NFPA Code 96.
                        </li>
                        <li className="flex items-start gap-2">
                          <Dot /> Safety-first service standards.
                        </li>
                        <li className="flex items-start gap-2">
                          <Dot /> Inspection-ready results.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end right */}
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                About Mission Cleaning Company
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                Mission Cleaning Company is a full-service cleaning company
                specializing in commercial kitchen exhaust systems and appliances.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Founded and built on excellence and integrity with the ultimate
                goal of keeping people and property safe.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                We look forward to the opportunity to meet and exceed your
                expectations with our impeccable service.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <FeatureItem
                title="NFPA Code 96 certified"
                description="Fire-safety focused service aligned with local requirements."
              />
              <FeatureItem
                title="Insured"
                description="Professional, reliable service you can trust."
              />
              <FeatureItem
                title="Safety & compliance inspections"
                description="On-site inspection of new and existing commercial kitchen exhaust systems to ensure safety and compliance in accordance with NFPA Code 96."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-slate-200 bg-slate-50 py-12 md:py-16"
      >
        <Container>
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Main Services
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Commercial kitchen services built around safety and consistent results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Kitchen Exhaust Hood Cleaning"
              description="Professional hood cleaning with detail-focused results."
              bullets={[
                "Hoods and canopy areas",
                "Grease removal and cleanup",
                "Safety-first service standards",
              ]}
            />

            <ServiceCard
              title="Appliance Cleaning"
              description="Commercial kitchen appliances cleaned with a higher standard of detail."
              bullets={[
                "Ranges, fryers, ovens, surfaces",
                "High-contact areas",
                "Consistent, repeatable process",
              ]}
            />

            <ServiceCard
              title="Safety & Compliance Inspections"
              description="On-site inspection of new and existing commercial kitchen exhaust systems to ensure safety and compliance in accordance with NFPA Code 96."
              bullets={[
                "On-site safety review",
                "Compliance-focused inspection",
                "Recommendations and next steps",
              ]}
            />
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-700">
              We work in accordance with NFPA Code 96 and local requirements.
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
            <p className="mt-2 text-sm text-slate-600">Examples of our work.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <WorkImageOnly imgSrc="/images/work-1.jpeg" />
            <WorkImageOnly imgSrc="/images/work-2.jpeg" />
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

              {/* Aquí dejamos el teléfono solo una vez, con estilo, y listo */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Direct Contact
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-800">
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:609-709-7997"
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      609-709-7997
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:missioncleaningcomp@gmail.com"
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      missioncleaningcomp@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

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
                    Phone (optional)
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
                    <option>Kitchen exhaust hood cleaning</option>
                    <option>Appliance cleaning</option>
                    <option>Safety & compliance inspections</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Business name / location
                </label>
                <input
                  name="business"
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  placeholder="Restaurant / facility name + city"
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
                  placeholder="Tell us what you need, timeline, inspection deadlines, etc."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full rounded-full py-2.5 text-sm font-semibold text-white transition ${
                  status === "sending"
                    ? "cursor-not-allowed bg-slate-700"
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
              <p>Commercial Cleaning Services | New Jersey</p>
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

/* UI bits */

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700">
      {children}
    </span>
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

function WorkImageOnly({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img
        src={imgSrc}
        alt="Work photo"
        className="h-72 w-full object-cover grayscale"
      />
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
