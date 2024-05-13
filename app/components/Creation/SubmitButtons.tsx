"use client"

import { Button } from "@/components/ui/button"
import { Heart, Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function CreationSubmit() {
    const { pending } = useFormStatus()
    return (
        <>
            {
                pending
                    ? <Button disabled size="lg">
                        <Loader2 className="mr-2 w-4 animate-spin" />
                        Wait...
                    </Button>
                    : <Button type="submit" size={"lg"}>Next</Button>
            }
        </>
    )
}

export function FavoriteButton() {
    const { pending } = useFormStatus()
    return (
        <>
            {
                pending
                    ? <Button
                        variant={"outline"}
                        size={"icon"}
                        disabled
                        className="bg-primary-foreground"
                    >
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    </Button>
                    : <Button
                        variant={"outline"}
                        className="bg-primary-foreground"
                        type="submit"
                    >
                        <Heart className="w-4 h-4" />
                    </Button>
            }
        </>
    )
}

export function UnfavoriteButton() {
    const { pending } = useFormStatus()
    return (
        <>
            {
                pending
                    ? <Button
                        variant={"outline"}
                        size={"icon"}
                        disabled
                        className="bg-primary-foreground"
                    >
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    </Button>
                    : <Button
                        variant={"outline"}
                        className="bg-primary-foreground"
                        type="submit"
                    >
                        <Heart className="w-4 h-4 text-primary" fill="#e21c49" />
                    </Button>
            }
        </>
    )
}

export function ReservationSubmitButton() {
    const { pending } = useFormStatus()
    return (
        <>
            {
                pending
                    ? <Button
                        variant={"outline"}
                        size={"icon"}
                        disabled
                        className="bg-primary-foreground"
                    >
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    </Button>
                    : <Button
                        variant={"outline"}
                        className="bg-primary-foreground"
                        type="submit"
                    >
                        Make a Reservation
                    </Button>
            }
        </>
    )
}
