import { getAllHomes } from "../repo/home-repo"
import HomeCard from "./HomeCard"

export async function ShowItems({ searchParams }: { searchParams?: { filter?: string } }) {
    const homes = await getAllHomes({ searchParams: searchParams })
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-10">
            {
                homes.length === 0
                    ? <div className="w-full text-center mt-10">
                        <h2>Sorry, no homes for this category found...</h2>
                    </div>
                    : homes.map((home) => (
                        <HomeCard
                            title={home.title as string}
                            description={home.description as string}
                            price={home.price as number}
                            photo={home.photo as string}
                            country={home.country as string}
                            key={home.id}
                        />
                    ))
            }
        </div>
    )
}
