import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { getAllHomes } from "../../repo/home-repo"
import HomeCard from "./HomeCard"

export async function ShowItems({
    searchParams
}: {
    searchParams?: {
        filter?: string,
        country?: string,
        guests?: string,
        rooms?: string,
        bathrooms?: string
    }
}) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const homes = await getAllHomes({ searchParams: searchParams, userId: user?.id })
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
                            favoriteId={home.Favorite[0]?.id}
                            isFavorite={home.Favorite.length > 0}
                            homeId={home.id}
                            pathname="/"
                            userId={user?.id}
                            key={home.id}
                        />
                    ))
            }
        </div>
    )
}
