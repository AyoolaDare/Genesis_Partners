import Hero from '../app/components/Hero'
import Vision from '../app/components/Vision'
import Mission from '../app/components/Mission'
import OurStory from '../app/components/OurStory'
import PartnerWithUs from '../app/components/PartnerWithUs'
import Contact from '../app/components/Contact'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import PartnerSpotlight from '../app/components/PartnerSpotlight'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2f2] text-blue-900"> {/* Updated background color */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Vision />
        <Mission />
        <OurStory />
        <PartnerWithUs />
        <PartnerSpotlight />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

