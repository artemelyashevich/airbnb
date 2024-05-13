"use server"

import { redirect } from "next/navigation"
import { createReservation } from "../repo/reservation-repo"

export async function setReservation(formData: FormData) {
    const data = await createReservation(formData)
    redirect("/")
}