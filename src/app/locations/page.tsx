import LocationList from "@/features/locations/components/LocationList"
import { getLocations } from "@/features/locations/services/LocationService"

export default async function LocationsPage() {
  const locations = await getLocations()

  console.log("locations data",{locations});

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 justify-center flex text-yellow-400 ">
        Locations
      </h1>

      <LocationList locations={locations} />
    </main>
  )
}
