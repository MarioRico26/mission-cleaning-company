export default function HomePage() {
  return (
    <main className="w-full text-neutral-900 bg-white">

      {/* ================= HERO / LOGO BANNER ================= */}
      <section className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 flex justify-center">
          <img
            src="/images/mission-logo-banner.png"
            alt="Mission Cleaning Company"
            className="w-full max-w-5xl object-contain"
          />
        </div>
      </section>

      {/* ================= ABOUT (TOP) ================= */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4">
          About Mission Cleaning Company
        </h2>

        <p className="text-lg text-neutral-700 mb-4">
          Mission Cleaning Company is a full-service commercial cleaning company
          specializing in kitchen exhaust systems, hoods, and appliances.
        </p>

        <p className="text-neutral-700 mb-4">
          Founded and built on excellence and integrity with the ultimate goal of
          keeping people and property safe.
        </p>

        <p className="text-neutral-700">
          We work in accordance with NFPA Code 96 and local requirements to ensure
          safety, compliance, and inspection-ready results.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium">
          NFPA Code 96 Certified · Insured · Fire Safety Focused
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8">Main Services</h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Kitchen Exhaust Hood Cleaning */}
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold mb-2">
              Kitchen Exhaust Hood Cleaning
            </h3>
            <p className="text-neutral-700 mb-4">
              Professional hood cleaning with detail-focused results.
            </p>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Hoods and canopy areas</li>
              <li>Grease removal and cleanup</li>
              <li>Safety-first service standards</li>
            </ul>
          </div>

          {/* Appliance Cleaning */}
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold mb-2">
              Appliance Cleaning
            </h3>
            <p className="text-neutral-700 mb-4">
              Commercial kitchen appliances cleaned to a higher standard of detail.
            </p>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Ranges, fryers, ovens, surfaces</li>
              <li>High-contact areas</li>
              <li>Consistent, repeatable process</li>
            </ul>
          </div>

          {/* Safety & Compliance Inspections */}
          <div className="rounded-xl border p-6 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">
              Safety & Compliance Inspections
            </h3>
            <p className="text-neutral-700">
              On-site inspection of new and existing commercial kitchen exhaust
              systems to ensure safety and compliance in accordance with NFPA Code 96.
            </p>
          </div>

        </div>
      </section>

      {/* ================= OUR WORK (IMAGES ONLY) ================= */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Our Work</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="/images/work-1.jpg"
            alt="Commercial kitchen exhaust hood cleaning"
            className="rounded-xl object-cover w-full h-[300px]"
          />
          <img
            src="/images/work-2.jpg"
            alt="Commercial kitchen hood and appliance cleaning"
            className="rounded-xl object-cover w-full h-[300px]"
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Request a Free Estimate
          </h2>
          <p className="mb-6">
            Serving commercial kitchens across New Jersey.
          </p>
          <a
            href="tel:6097097997"
            className="inline-block rounded-full bg-white text-neutral-900 px-8 py-3 font-medium"
          >
            Call 609-709-7997
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-neutral-600">
          <p>Mission Cleaning Company · New Jersey</p>
          <p className="mt-2">
            Proudly designed by{" "}
            <a
              href="https://www.bytenetworks.net"
              target="_blank"
              className="font-medium underline"
            >
              Byte Networks
            </a>
          </p>
        </div>
      </footer>

    </main>
  )
}
