import { MapFilterItems } from "./components/Creation/MapFilterItems";
import { Suspense } from "react";
import { SkeletonLoading } from "./components/Loading/SkeletonLoading";
import { ShowItems } from "./components/Home/ShowItems";

export default function Home({ searchParams, userId }: { searchParams?: { filter?: string }, userId: string | undefined }) {
  return (
    <div className="mb-5">
      <MapFilterItems />
      <Suspense key={searchParams?.filter} fallback={<SkeletonLoading times={8} />}>
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  )
}