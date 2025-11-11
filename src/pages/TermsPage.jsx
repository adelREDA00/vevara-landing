import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Terms and Conditions</h1>
              <p className="text-gray-600">Last updated: May 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Acceptance</h2>
                <p className="text-gray-600 leading-relaxed">
                  Using Vévara means you accept these terms. We may update them; check regularly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Usage</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vévara is for personal or commercial slide creation. You must comply with Canva's terms and provide your own content (e.g., images, text).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">License</h2>
                <p className="text-gray-600 leading-relaxed">
                  We grant you a non-exclusive, revocable license to use Vévara. You may not resell or modify the app.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vévara is provided "as is." We are not liable for any damages from use, including data loss or errors.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We can suspend or terminate your access if you violate these terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions, contact us at toumlireda34@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
