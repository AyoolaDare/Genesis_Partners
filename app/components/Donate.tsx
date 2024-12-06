import { CheckCircle } from 'lucide-react'

const plans = [
  {
    name: "Supporter",
    price: "₦5,000",
    features: [
      "Monthly newsletter",
      "Access to community events",
      "Name listed on our website",
    ],
  },
  {
    name: "Partner",
    price: "₦50,000",
    features: [
      "All Supporter benefits",
      "Quarterly impact report",
      "Exclusive webinars",
      "Personalized thank you letter",
    ],
  },
  {
    name: "Visionary",
    price: "₦1,000,000",
    features: [
      "All Partner benefits",
      "VIP access to annual gala",
      "One-on-one meeting with leadership",
      "Named sponsorship opportunity",
      "Customized impact assessment",
    ],
  },
]

export default function Donate() {
  return (
    <section id="donate" className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Partner With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg overflow-hiddenshadow-lg transition-transform transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-900">{plan.name}</h3>
                <p className="text-4xl font-bold text-center mb-6 text-blue-600">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-blue-900">
                      <CheckCircle className="text-blue-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-blue-50">
                <button className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

