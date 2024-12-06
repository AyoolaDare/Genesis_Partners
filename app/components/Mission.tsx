import Image from 'next/image'

export default function Mission() {
  return (
    <section id="mission" className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
            <p className="text-lg text-blue-900">
              Our mission at Genesis Global Partnership is to inspire and mobilize individuals and communities to engage in meaningful partnerships that address pressing social issues. We are committed to fostering spiritual growth, providing essential resources, and creating sustainable solutions that uplift and transform lives around the globe.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 order-1 md:order-2">
            {[1, 2].map((index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={`/mission-${index}.jpg`}
                  alt={`Mission ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

