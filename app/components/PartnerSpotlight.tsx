import Image from 'next/image'
import Link from 'next/link'

const partnerStories = [
  {
    title: "Genesis Global and Rotary Club Water for Life Project",
    description: "Our partnership with the local Rotary Club brings sustainable water solutions to Alakuko. Together, we're providing clean water access to thousands of residents, improving health and quality of life.",
    image: "/partner-1.jpg",
    link: "#",
    category: "Clean Water and Sanitation"
  },
  {
    title: "Empowering Through Education",
    description: "Genesis Global collaborates with local schools to enhance educational opportunities in Alakuko. Our programs focus on providing resources, mentorship, and innovative learning experiences.",
    image: "/partner-2.jpg",
    link: "#",
    category: "Education"
  },
  {
    title: "Inclusive Healthcare Initiative",
    description: "Working with Alakuko General Hospital, we're improving healthcare access for all, with a special focus on supporting children with disabilities and their families.",
    image: "/partner-3.jpg",
    link: "#",
    category: "Global Health"
  },
  {
    title: "Sport and Tech Outreach: Empowering Alakuko's Youth",
    description: "Our innovative program combines sports training with technology education, providing Alakuko's youth with new skills and opportunities. Through partnerships with local tech companies and sports clubs, we're opening doors to exciting career paths and personal development.",
    image: "/partner-4.jpg",
    link: "#",
    category: "Sport and Tech Outreach"
  },
  {
    title: "1000 Students Benefit from School Renovation Project",
    description: "Thanks to our dedicated volunteers and local business partners, we've renovated and equipped five schools in Alakuko, directly impacting the learning environment for over 1000 students.",
    image: "/partner-5.jpg",
    link: "#",
    category: "Education"
  },
  {
    title: "Community Resilience: Disaster Preparedness Initiative",
    description: "Genesis Global partners with Alakuko's emergency services to implement a comprehensive disaster preparedness plan, ensuring our community is ready to face any challenge.",
    image: "/partner-6.jpg",
    link: "#",
    category: "Disaster Response"
  }
]

export default function PartnerSpotlight() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Partner Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600">{story.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-blue-900">{story.title}</h3>
                <p className="text-blue-700 mb-4">{story.description}</p>
                <Link href={story.link} className="text-blue-600 font-semibold hover:underline">
                  Read the Story
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Let&apos;s Transform Alakuko Together!</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-700">
            Your first step toward partnership is easy: Complete our short online form. Tell us about your organization. 
            What do you envision for Alakuko&apos;s future? How can we collaborate to make a lasting impact? Next, you&apos;ll hear from us. Together, we can 
            create a partnership that builds a world of hope in and through your organization, right here in Alakuko.
          </p>
          <Link href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  )
}
