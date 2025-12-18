export default function HomePage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#f7fafc] py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* LOGO BANNER INTEGRADO */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/mission-banner.png"
              alt="Mission Cleaning Company"
              className="h-24 md:h-28 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Kitchen Exhaust Hood Cleaning
              </h1>

              <p className="mt-4 text-xl text-slate-600">
                Cleaner systems. Safer businesses.
              </p>

              <p className="mt-6 text-slate-600 max-w-xl">
                We work in accordance with NFPA Code 96 and local requirements.
                Our ultimate goal is the safety and security of your customers,
                staff, and business.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition"
                >
                  Request a free estimate
                </a>

                <span className="text-slate-700 font-medium">
                  Call us: <strong>609-709-7997</strong>
                </span>
              </div>

              {/* TRUST BADGES */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'NFPA Code 96 Certified',
                  'Insured',
                  'Fire Safety Focused',
                  'New Jersey',
                ].map(item => (
                  <span
                    key={item}
                    className="px-4 py-1.5 text-sm rounded-full border bg-white text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="/images/hero-kitchen.jpg"
                alt="Commercial kitchen exhaust cleaning"
                className="rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            About Mission Cleaning Company
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Mission Cleaning Company is a full-service cleaning company
            specializing in commercial kitchen exhaust systems and appliances.
          </p>

          <p className="mt-4 text-slate-600">
            Founded and built on excellence and integrity with the ultimate goal
            of keeping people and property safe.
          </p>

          <p className="mt-4 text-slate-600">
            We look forward to the opportunity to meet and exceed your
            expectations with our impeccable service.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f7fafc] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Main Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

            <ServiceCard
              title="Kitchen Exhaust Hood Cleaning"
              items={[
                'Hoods and canopy areas',
                'Grease removal and cleanup',
                'Safety-first service standards',
              ]}
            />

            <ServiceCard
              title="Appliance Cleaning"
              items={[
                'Ranges, fryers, ovens, surfaces',
                'High-contact areas',
                'Consistent, repeatable process',
              ]}
            />

            <ServiceCard
              title="Safety & Compliance Inspections"
              items={[
                'On-site inspection of new and existing systems',
                'NFPA Code 96 compliance',
                'Inspection-ready cleanliness',
              ]}
            />

          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Our Work
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/work-1.jpeg"
              className="rounded-xl shadow"
              alt="Commercial kitchen cleaning work"
            />
            <img
              src="/images/work-2.jpeg"
              className="rounded-xl shadow"
              alt="Exhaust hood cleaning work"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0f172a] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Request a Free Estimate
          </h2>

          <p className="mt-4 text-slate-300">
            Email us or call to schedule your service.
          </p>

          <div className="mt-6 text-lg">
            <p>📧 missioncleaningcomp@gmail.com</p>
            <p className="mt-2">📞 609-709-7997</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Mission Cleaning Company · New Jersey
        </p>
        <p className="mt-2">
          Proudly designed by{' '}
          <a
            href="https://www.bytenetworks.net"
            target="_blank"
            className="underline hover:text-white"
          >
            ByteNetworks
          </a>
        </p>
      </footer>

    </main>
  )
}

function ServiceCard({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-600">
        {items.map(item => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}
