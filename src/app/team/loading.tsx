// src/app/team/loading.tsx
export default function TeamLoading() {
  return (
    <main>
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto h-9 w-48 animate-pulse rounded-lg bg-white/25" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            <div className="aspect-square animate-pulse bg-gray-200" />
            <div className="space-y-2 p-5">
              <div className="mx-auto h-4 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="mx-auto h-3 w-1/2 animate-pulse rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}