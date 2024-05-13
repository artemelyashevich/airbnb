import { setReservation } from "@/app/actions/reservation-actions"
import { ReservationSubmitButton } from "@/app/components/Creation/SubmitButtons"
import { CategoryCase } from "@/app/components/Home/CategoryCase"
import { HomeMap } from "@/app/components/Home/HomeMap"
import { SelectCalendar } from "@/app/components/Home/SelectCalendar"
import { useCountries } from "@/app/lib/hooks"
import { getHomeById } from "@/app/repo/home-repo"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Image from "next/image"
import Link from "next/link"

export default async function HomePage({ params }: { params: { id: string } }) {
    const home = await getHomeById(params.id)
    const { getCountryByValue } = useCountries()
    const country = getCountryByValue(home?.country as string)
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    return (
        <div className="mx-auto mt-10 w-[75%]">
            <h1 className="font-medium text-2xl mb-5">{home?.title}</h1>
            <div className="relative h-[550px]">
                <Image
                    src={`https://lqevkukomzxnhmukhrcx.supabase.co/storage/v1/object/public/images/${home?.photo}`}
                    alt={String(home?.title)}
                    fill
                    className="rounded-lg f-full object-cover w-full"
                />
            </div>
            <div className="flex justify-between gap-x-24 mt-8">
                <div className="w-2/3 mb-12">
                    <div className="flex items-center w-full">
                        <img className="w-8" src={`https://flagsapi.com/${country?.value}/flat/64.png`} alt={country?.region} />
                        <h3 className="text-xl font-medium w-full">{country?.label} | {country?.region}</h3>
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                        <p>{home?.guests} Guests</p>
                        <p> * {home?.bathrooms} Bathrooms</p>
                        <p> * {home?.bedrooms} Bedrooms</p>
                    </div>
                    <Separator className="my-7" />
                    <CategoryCase name={home?.categoryName as string} />
                    <Separator className="my-7" />
                    <p className="text-muted-foreground">{home?.description}</p>
                    <Separator className="my-7" />
                    <HomeMap locationValue={country?.value as string} />
                </div>
                <form action={setReservation}>
                    <input type="hidden" name="homeId" value={params.id} />
                    <input type="hidden" name="userId" value={user?.id} />
                    <SelectCalendar reservation={home?.Reservation} />
                    {
                        user?.id
                            ? (
                                <ReservationSubmitButton />
                            )
                            : (
                                <Link className="w-full" href={"/api/auth/login"}>
                                    <Button className="w-full">
                                        Make Reservation
                                    </Button>
                                </Link>
                            )
                    }
                </form>
            </div>
        </div>
    )
} 