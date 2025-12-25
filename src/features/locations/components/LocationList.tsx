import Image from 'next/image'
import { Location } from '../types/Location'
import { getSimpsonsImage } from '@/lib/image'

interface Props {
  locations: Location[]
}

export default function LocationList({ locations }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location) => {
        const imageUrl = getSimpsonsImage(location.image_path || '', 500)
        return (
          <div
            key={location.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={imageUrl}
              alt={location.name}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {location.name}
              </h3>

              <p className="text-sm text-gray-600">
                {location.town}
              </p>

              <span className="inline-block mt-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                {location.use}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
