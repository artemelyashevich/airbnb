"use client"

import Link from "next/link";
import { categoryItems } from "../lib/categories";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export function MapFilterItems() {
    const searchParams = useSearchParams()
    const search = searchParams.get("filter")
    const pathname = usePathname()

    const createQuery = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    return (
        <div className="flex gap-x-10 justify-between px-10 mt-5 w-full overflow-x-scroll no-scrollbar">
            {
                categoryItems.map(category => (
                    <Link key={category.id} href={
                        pathname + "?" + createQuery("filter", category.name)
                    } className={
                        cn(
                            search === category.name ? "border-b-2 border-black pb-2 flex-shrink-0" : "opacity-70 flex-shrink-0", "flex flex-col gap-y-3 justify-center items-center"
                        )
                    }>
                        <div className="relative w-6 h-6">
                            <Image src={category.imageUrl} alt="Category image" width={24} height={24} />
                        </div>
                        <p className="text-xs font-medium">{category.title}</p>
                    </Link>
                ))
            }
        </div>
    )
}