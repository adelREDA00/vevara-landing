import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: May 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Data We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may collect images, text, and customization settings (e.g., colors) you provide to create animated slides. No personal data is stored unless you upload it (e.g., images with identifiable information).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Usage</h2>
                <p className="text-gray-600 leading-relaxed">
                  Data is used solely to generate and deliver your slides within Canva. We do not share your data with third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Storage</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your data is temporarily processed and not stored long-term by us. Canva's privacy policies apply to data handled by their platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use reasonable measures to protect your data, but no online transmission is fully secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  You can delete your slides or stop using Vévara at any time, removing associated data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Changes</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this policy; check back for updates.
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
