"use client"

import { setLocation } from "@/app/actions";
import { BottomBar } from "@/app/components/BottomBar";
import { useCountries } from "@/app/lib/hooks";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function AddressRoute({ params }: { params: { id: string } }) {

    const { getAllCountries } = useCountries()
    const LazyMap = dynamic(() => import("@/app/components/Map"), {
        ssr: false,
        loading: () => <Skeleton className="h-[50vh] w-full" />
    })

    const [locationValue, setLocationValue] = useState<string>("")

    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3lg font-semibold tracking-tight transition-colors mb-10">
                    Where is your home?
                </h2>
            </div>

            <form action={setLocation}>
                <input type="hidden" name="homeId" value={params.id} />
                <input type="hidden" name="countryValue" value={locationValue} />
                <div className="w-3/5 mx-auto">
                    <div className="mb-5">
                        <Select required onValueChange={(value: string) => setLocationValue(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>
                                        Countries
                                    </SelectLabel>
                                    {
                                        getAllCountries().map((item, index: number) => (
                                            <SelectItem key={index} value={item.value}>
                                                <div className="flex gap-5 items-center">
                                                    {/* <img className="w-7 h-7" src={`${process.env.FLAG_BASE_URL}${item.value}.svg`} /> */}
                                                    {item.label} | {item.region}
                                                </div>
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <LazyMap locationValue={locationValue} />
                </div>
                <BottomBar />
            </form>
        </>
    )
}