import LocationList from "@/features/locations/components/LocationList";
import { getLocations } from "@/features/locations/services/LocationService";
import { rockSalt } from "../layout";

export default async function LocationsPage() {
  const locations = await getLocations();

  console.log("locations data", { locations });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1
        className={`${rockSalt.className} text-3xl md:text-6xl font-bold mb-6 justify-center flex text-white drop-shadow-[0_6px_24px_rgba(250,204,21,0.85)]`}
      >
        Locations
      </h1>

      <LocationList locations={locations} />
    </main>
  );
}
