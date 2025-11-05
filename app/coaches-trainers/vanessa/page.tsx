export default function VanessaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Vanessa
          </h1>
          <p className="max-w-2xl text-xl text-gray-200">
            Reformer Pilates Instructor & Personal Trainer
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            About Vanessa
          </h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              With a vast background in holistic bodywork, therapeutic massage, yoga, pilates and conscious living, Vanessa offers an in-depth understanding and intuitive sensitivity to the interconnected mechanisms of body and mind. With a great emphasis on alignment and functional movement, she guides to overall improved wellbeing and lifestyle awareness, specific to the needs of her clients. Her passion for movement and care for detail is a strong element of her classes, providing a sense of fulfilment on all levels.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Foundation & Basic Mat Pilates by Conscious Movement Education - The Source Cape Town</li>
              <li>Pilates Equipment / Reformer by Conscious Movement Education - The Source Cape Town</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Languages
            </h3>
            <p className="text-gray-600">English, Afrikaans</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Book a Session
            </h3>
            <p className="mb-4 text-gray-600">
              Ready to start your Pilates journey with Vanessa?
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-brand-orange px-6 py-3 text-white transition-colors hover:bg-orange-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
