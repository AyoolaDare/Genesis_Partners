import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  const images = [
    { src: '/placeholder.svg?height=300&width=300', alt: 'Gallery Image 1' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Gallery Image 2' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Gallery Image 3' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Gallery Image 4' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Gallery Image 5' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Gallery Image 6' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

