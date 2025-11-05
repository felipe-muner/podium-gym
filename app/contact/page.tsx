export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            📧 Contacts
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-12">
          {/* Reception */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              🧾 Reception — Memberships & General Enquiries
            </h2>
            <p className="mb-6 text-gray-600">
              For all enquiries regarding <strong>membership pauses, pricing, schedules, and general information:</strong>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <a
                  href="mailto:reception@podiumgym.com"
                  className="text-brand-orange hover:underline"
                >
                  reception@podiumgym.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <span className="text-gray-700">WhatsApp:</span>
                <a
                  href="https://wa.me/66828454756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  +66 (0)82-845-4756
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="px-4 text-gray-400">⸻</span>
          </div>

          {/* CrossFit Classes & Content */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              💪 CrossFit Classes & Content
            </h2>
            <p className="mb-6 text-gray-600">
              For all questions about <strong>CrossFit programming, class content, and coaching:</strong>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <span className="text-gray-700">WhatsApp:</span>
                <a
                  href="https://wa.me/972546481186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  +972 54-648-1186
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📷</span>
                <span className="text-gray-700">Instagram:</span>
                <a
                  href="https://instagram.com/Podium.CrossFit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  @Podium.CrossFit
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="px-4 text-gray-400">⸻</span>
          </div>

          {/* Brazilian Jiu-Jitsu (BJJ) */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              🤼 Brazilian Jiu-Jitsu (BJJ)
            </h2>
            <p className="mb-6 text-gray-600">
              For everything related to <strong>BJJ classes, schedule, and memberships:</strong>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <span className="text-gray-700">WhatsApp:</span>
                <a
                  href="https://wa.me/66994244784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  +66 (0)99 424 4784
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📷</span>
                <span className="text-gray-700">Instagram:</span>
                <a
                  href="https://instagram.com/PodiumBJJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                >
                  @PodiumBJJ
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="px-4 text-gray-400">⸻</span>
          </div>

          {/* Management */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              💬 Management — Specific Enquiries
            </h2>
            <p className="mb-6 text-gray-600">
              For <strong>job applications</strong> or any <strong>specific enquiries:</strong>
            </p>
            <div className="flex items-center gap-3">
              <span className="text-lg">📧</span>
              <a
                href="mailto:gm@podiumgym.com"
                className="text-brand-orange hover:underline"
              >
                gm@podiumgym.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
