import Image from "next/image";
import { IHome } from "../types";
import Link from "next/link";
import { useCountries } from "../lib/hooks";

export default function HomeCard({ title, description, photo, price, country }: IHome) {
    const { getCountryByValue } = useCountries()
    const currCountry = getCountryByValue(country as string)
    return (
        <div className="flex flex-col">
            <div className="relative h-72">
                <Image
                    fill
                    src={`https://lqevkukomzxnhmukhrcx.supabase.co/storage/v1/object/public/images/${photo}`}
                    alt={title}
                    className="rounded-lg h-full object-cover"
                />
            </div>
            <Link href={"/"}>
                <h3 className="font-medium text-base flex items-center gap-3">
                    <img className="w-8" src={`https://flagsapi.com/${currCountry?.value}/flat/64.png`} alt={currCountry?.region} /> / {currCountry?.label}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                    {description}
                </p>
                <p className="pt-2 text-muted-foreground">
                    <span className="font-medium text-black">{price}</span>
                </p>
            </Link>
        </div>
    )
} 