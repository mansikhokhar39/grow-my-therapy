export default function HomePage() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-primary">
              Anxiety & Trauma Therapy in Austin, TX
            </h1>

            <p className="mt-6 text-lg text-muted max-w-md">
              Compassionate, trauma-informed therapy for adults and couples.
              Supporting anxiety relief, emotional healing, and meaningful connection.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 bg-accent text-white px-7 py-3 rounded-md text-lg"
            >
              Book a Consultation
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Therapist portrait"
              className="w-full max-w-md rounded-2xl object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="mb-16 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Therapy Services
            </h2>
            <p className="mt-4 text-muted text-lg">
              Thoughtful, personalized support designed around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Anxiety & Stress Therapy",
                text: "Support for chronic worry, stress, and overwhelm using practical tools.",
                img: "https://images.unsplash.com/photo-1584467735871-bb3b1d7b0d2b?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Trauma & PTSD Therapy",
                text: "Trauma-informed therapy focused on safety, trust, and healing.",
                img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Couples Counseling",
                text: "Improve communication and strengthen emotional connection.",
                img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR OFFICE SECTION */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="mb-16 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Our Office
            </h2>
            <p className="mt-4 text-lg text-muted">
              A calm, welcoming space designed to help you feel safe, comfortable, and supported.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl h-64 w-full object-cover shadow-md"
              alt="Therapy office interior"
            />
            <img
              src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl h-64 w-full object-cover shadow-md"
              alt="Therapy room seating"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl h-64 w-full object-cover shadow-md"
              alt="Counseling office environment"
            />
          </div>

        </div>
      </section>

      {/* FINAL CTA WITH IMAGE */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black/60">
          <div className="max-w-4xl mx-auto px-6 py-32 text-center text-white">

            <h2 className="text-3xl md:text-4xl font-serif">
              Begin Therapy with Dr. Maya Reynolds
            </h2>

            <p className="mt-6 text-lg max-w-2xl mx-auto">
              If you’re feeling overwhelmed or ready for change, therapy can help you move forward.
            </p>

            <a
                href="/contact"
                className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-md text-lg font-medium"
              >
                Book a Consultation
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
