"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { categoryItems } from "../../lib/categories"
import { ICategory } from "../../types"
import Image from "next/image"
import { useState } from "react"

export function SelectedCategory() {
    const [selectCategory, setSelectedCategory] = useState<string | undefined>(undefined)
    return (
        <div className="grid grid-cols-4 gap-8 mt-10 mb-40 w-3/5 mx-auto">
            <input type="hidden" name="categoryName" value={selectCategory as string} />
            {
                categoryItems.map((category: ICategory) => (
                    <div key={category.id} className="cursor-pointer">
                        <Card
                            onClick={() => setSelectedCategory(category.name)}
                            className={selectCategory === category.name
                                ? "border-primary"
                                : ""
                            }
                        >
                            <CardHeader>
                                <Image
                                    src={category.imageUrl}
                                    alt={category.name}
                                    height={32}
                                    width={32}
                                    className="w-8 h-8"
                                />
                                <h3 className="font-medium">{category.title}</h3>
                            </CardHeader>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}