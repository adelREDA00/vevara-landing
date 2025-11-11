import { Mail, MessageCircle, Book, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto px-6 py-20 max-w-5xl">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Support Center</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get help with Vevara and find answers to common questions
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid ">
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
                  <p className="text-gray-600 text-sm">Get help via email within 24 hours</p>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = 'mailto:toumireda34@gmail.com'}>
                    Contact Us
                  </Button>
                </CardContent>
              </Card>

              {/* <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Live Chat</h3>
                  <p className="text-gray-600 text-sm">Chat with our support team</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                    <Book className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Documentation</h3>
                  <p className="text-gray-600 text-sm">Browse our help articles</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                    <HelpCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
                  <p className="text-gray-600 text-sm">Find quick answers</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View FAQ
                  </Button>
                </CardContent>
              </Card> */}
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Quick answers to common questions about Vevara</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">How do I get started with Vevara?</h3>
                    <p className="text-gray-600">
                      Simply choose a template from our gallery, add your content (images and text), customize the
                      colors, and click "Generate Slides" to create your animation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Is Vevara really free?</h3>
                    <p className="text-gray-600">
                      Yes! Vevara is completely free to use. There are no hidden fees, subscriptions, or premium
                      features. All templates and features are available at no cost.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Do I need a Canva account?</h3>
                    <p className="text-gray-600">
                      While you don't need a Canva account to use Vevara, having one allows you to export your
                      animations directly to your Canva workspace for further editing.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">What file formats are supported?</h3>
                    <p className="text-gray-600">
                      Vevara supports common image formats (JPG, PNG, GIF) and exports animations in formats compatible
                      with Canva and other design platforms.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">How many templates are available?</h3>
                    <p className="text-gray-600">
                      We currently offer 100+ professionally designed templates across various categories including
                      sliders, text animations, and shape morphing, with new templates added regularly.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Can I customize the templates?</h3>
                    <p className="text-gray-600">
                      You can customize colors, fonts, text content, and images to match your brand or personal style.
                      Our templates are designed to be flexible and adaptable.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      How long does it take to create an animation?
                    </h3>
                    <p className="text-gray-600">
                      Most animations can be created in under 3 seconds once you've selected your template and added
                      your content. The actual generation is nearly instantaneous.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Is there a limit to how many animations I can create?
                    </h3>
                    <p className="text-gray-600">
                      No limits! You can create as many animations as you want, whenever you want. There are no
                      restrictions on usage or downloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">Still need help?</h2>
                  <p className="text-gray-600">Send us a message and we'll get back to you within 24 hours</p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Describe your issue or question..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
