import { MapFilterItems } from "./components/MapFilterItems";
import { Suspense } from "react";
import { SkeletonLoading } from "./components/SkeletonLoading";
import { ShowItems } from "./components/ShowItems";

export default function Home({ searchParams }: { searchParams?: { filter?: string } }) {
  return (
    <div className="mb-5">
      <MapFilterItems />
      <Suspense key={searchParams?.filter} fallback={<SkeletonLoading />}>
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  )
}