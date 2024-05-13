import { categoryItems } from "@/app/lib/categories"
import Image from "next/image"

export function CategoryCase({ name }: { name: string }) {
    const category = categoryItems.find(item => item.name === name)
    return (
        <div className="flex items-center">
            <Image
                src={category?.imageUrl as string}
                alt={category?.name as string}
                width={44}
                height={44}
            />
            <div className="flex flex-col ml-4">
                <h3 className="font-medium">{category?.title}</h3>
                <p className="font-muted-foreground">{category?.description}</p>
            </div>
        </div>
    )
}