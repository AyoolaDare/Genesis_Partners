import Image from 'next/image'
import Link from 'next/link'

export default function OurStory() {
  return (
    <section id="our-story" className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-blue-900">
              Genesis Global Partnership was born out of a deep-rooted desire to make a lasting impact on communities worldwide. Our journey began with a small group of dedicated individuals who believed in the power of faith and collective action to transform lives.
            </p>
            <p className="text-lg text-blue-900">
              Over the years, we&apos;ve had the privilege of serving countless individuals and communities, providing support in areas such as education, healthcare, and spiritual growth. Our work has touched lives across continents, bringing hope and positive change to those in need.
            </p>
            <p className="text-lg text-blue-900">
              As we continue to grow, our commitment to our mission remains unwavering. We believe that by working together, we can create a brighter future for all.
            </p>
            <Link
              href="/gallery"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Our Gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/story-1.jpg" alt="Story 1" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/story-2.jpg" alt="Story 2" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/story-3.jpg" alt="Story 3" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/story-video-thumbnail.jpg" alt="Video Thumbnail" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
