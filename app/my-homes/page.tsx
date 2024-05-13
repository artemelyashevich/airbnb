import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { getHomesByUserId } from "../repo/home-repo"
import { redirect } from "next/navigation"
import HomeCard from "../components/Home/HomeCard"

export default async function MyHomes() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user) redirect("/")
    const data = await getHomesByUserId(user.id)
    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10">
            <h2 className="text-3xl font-semibold tracking-tight ">Your Homes</h2>
            {
                data.length === 0
                    ? <></>
                    : <div className="grid lg:grid-cols-3 sm:grid-cold-2 md:grid-cols-2 grid-cols-2 gap-6 mt-8">
                        {
                            data.map((item) => (
                                <HomeCard
                                    key={item.id}
                                    description={item.description as string}
                                    country={item.country as string}
                                    price={item.price as number}
                                    pathname="/favorites"
                                    homeId={item.id as string}
                                    photo={item.photo as string}
                                    userId={user.id}
                                    favoriteId={item.Favorite[0]?.id as string}
                                    isFavorite={item.Favorite.length as number > 0}
                                    title={item.title as string}
                                />
                            ))
                        }
                    </div>
            }
        </section>
    )
}