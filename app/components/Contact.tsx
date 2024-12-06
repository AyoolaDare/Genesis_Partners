import { Phone, Mail, MapPin, Youtube } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6 text-blue-900">
              Genesis Global Partnership is dedicated to making a positive impact in communities around the world. We believe in the power of partnership and the strength of coming together for a common cause. Whether you have questions, want to get involved, or simply want to learn more about our work, we&apos;d love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-blue-900">
                <Phone className="mr-2 text-blue-600" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center text-blue-900">
                <Mail className="mr-2 text-blue-600" />
                <span>info@genesisglobalpartnership.org</span>
              </div>
              <div className="flex items-center text-blue-900">
                <MapPin className="mr-2 text-blue-600" />
                <span>123 Main Street, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center text-blue-900">
                <Youtube className="mr-2 text-blue-600" />
                <a href="https://www.youtube.com/channel/UCxxx" className="text-blue-600 hover:underline">
                  Our YouTube Channel
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-blue-300 rounded text-blue-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-blue-300 rounded text-blue-900"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 py-2 border border-blue-300 rounded text-blue-900"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
