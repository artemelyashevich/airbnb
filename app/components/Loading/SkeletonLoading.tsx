import SkeletonItem from "./SkeletonItem";

export function SkeletonLoading({ times }: { times: number }) {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-10">
            {
                Array(times).fill(0).map(_ => (<SkeletonItem />))
            }
        </div>
    )
}