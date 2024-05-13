import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonLoading } from "../components/Loading/SkeletonLoading";
import SkeletonItem from "../components/Loading/SkeletonItem";

export default function FavoritesLoading() {
    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10 w-full">
            <h2 className="text-3xl font-semibold tracking-tight ">Your favorites</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cold-2 md:grid-cols-2 grid-cols-2 gap-6 mt-8 w-full">
                {
                    Array(6).fill(0).map(_ => <SkeletonItem />)
                }
            </div>
        </section>
    )
}