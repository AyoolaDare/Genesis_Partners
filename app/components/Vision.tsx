import Image from 'next/image'

export default function Vision() {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/vision-${index}.jpg`}
                  alt={`Vision ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <p className="text-lg text-blue-900">
              Genesis Global Partnership envisions a world where communities are empowered through faith, compassion, and collective action. We strive to create a global network of partners committed to spreading love, hope, and positive change in every corner of the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

