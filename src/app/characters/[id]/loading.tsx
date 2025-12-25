export default function Loading() {
  return (
    <div className="container mx-auto py-10">
      <div className="animate-pulse grid gap-10 md:grid-cols-2">
        {/* Imagen */}
        <div className="h-96 rounded-xl bg-gray-200" />

        {/* Info */}
        <div className="space-y-4">
          <div className="h-8 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-1/4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
