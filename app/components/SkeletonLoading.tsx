import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoading() {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-10">
            {
                Array(8).fill(0).map(_ => (
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-72 w-full rounded-lg" />
                        <div className="space-y-2 flex flex-col">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}