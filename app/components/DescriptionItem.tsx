import { Card } from "@/components/ui/card";
import { Counter } from "./Counter";

export function DescriptionItem({ name }: { name: string }) {
    return (
        <Card className="flex border-none flex-col gap-y-5 p-3">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h3 className="underline font-medium">{name}</h3>
                    <p className="text-muted-foreground">How many {name}?</p>
                </div>
                <Counter name={name.toLowerCase()} />
            </div>
        </Card>
    )
}