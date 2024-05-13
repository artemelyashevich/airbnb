"use client"

import { Button } from "@/components/ui/button";
import {
    Minus,
    Plus
} from "lucide-react";
import { useState } from "react";

export function Counter({ name }: { name: string }) {
    const [amount, setAmount] = useState<number>(0)

    function handlePlus() {
        setAmount(amount + 1)
    }

    function handleMinus() {
        if (amount > 0) {
            setAmount(amount - 1)
        }
    }
    return (
        <div className="flex items-center gap-x-4">
            <input type="hidden" name={name} value={amount} />
            <Button
                onClick={handleMinus}
                variant={"outline"} size="icon" type="button"
            >
                <Minus className="h-4 w-4 text-primary" />
            </Button>
            <p>{amount}</p>
            <Button
                onClick={handlePlus}
                variant={"outline"} size="icon" type="button"
            >
                <Plus className="h-4 w-4 text-primary" />
            </Button>
        </div>
    )
}