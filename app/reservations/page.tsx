import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import HomeCard from "../components/Home/HomeCard";
import { getReservationsByUserId } from "../repo/reservation-repo";
import { redirect } from "next/navigation";

export default async function Reservations() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user) redirect("/")
    const data = await getReservationsByUserId(user?.id as string)
    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10">
            <h2 className="text-3xl font-semibold tracking-tight ">Your Reservations</h2>
            {
                data.length === 0
                    ? <h2>Sorry, no homes for this page found...</h2>
                    : <div className="grid lg:grid-cols-3 sm:grid-cold-2 md:grid-cols-2 grid-cols-2 gap-6 mt-8">
                        {
                            data.map((item) => (
                                <HomeCard
                                    key={item.Home?.id}
                                    description={item.Home?.description as string}
                                    country={item.Home?.country as string}
                                    price={item.Home?.price as number}
                                    pathname="/favorites"
                                    homeId={item.Home?.id as string}
                                    photo={item.Home?.photo as string}
                                    userId={user?.id}
                                    favoriteId={item.Home?.Favorite[0].id as string}
                                    isFavorite={item.Home?.Favorite.length as number > 0}
                                    title={item.Home?.title as string}
                                />
                            ))
                        }
                    </div>
            }
        </section>
    )
}