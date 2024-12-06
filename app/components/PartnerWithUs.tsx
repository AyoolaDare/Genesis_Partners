import { Heart, Users, Star, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: "Compassionate Supporter",
    price: "₦5,000",
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    description: "Join our community of caring individuals and make a difference.",
    features: [
      "Exclusive monthly impact newsletter",
      "Invitations to virtual community events",
      "Recognition on our digital supporter wall",
    ],
    cta: "Become a Supporter"
  },
  {
    name: "Empowering Partner",
    price: "₦50,000",
    icon: <Users className="w-12 h-12 text-blue-600" />,
    description: "Amplify your impact and help us reach more communities.",
    features: [
      "All Supporter benefits",
      "Quarterly personalized impact report",
      "Exclusive webinars with thought leaders",
      "Personalized thank you video",
    ],
    cta: "Become a Partner"
  },
  {
    name: "Visionary Champion",
    price: "₦1,000,000",
    icon: <Star className="w-12 h-12 text-blue-600" />,
    description: "Lead the charge in transforming lives and communities.",
    features: [
      "All Partner benefits",
      "VIP access to annual gala and leadership summit",
      "One-on-one strategy session with our leadership",
      "Named sponsorship of a major project",
      "Customized impact assessment and recognition",
    ],
    cta: "Become a Champion"
  },
]

export default function PartnerWithUs() {
  return (
    <section id="partner" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Partner With Us</h2>
        <p className="text-xl text-center mb-12 text-blue-700">Join our mission to transform lives and communities. Every contribution makes a difference.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-8">
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2 text-blue-900">{plan.name}</h3>
                <p className="text-3xl font-bold text-center mb-4 text-blue-600">{plan.price}</p>
                <p className="text-center mb-6 text-blue-700">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-blue-900">
                      <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-blue-50">
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  {plan.cta}
                  <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-blue-900 mb-4">Can&apos;t decide? Every act of generosity counts.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-lg">
            Make a Custom Donation
          </button>
        </div>
      </div>
    </section>
  )
}

