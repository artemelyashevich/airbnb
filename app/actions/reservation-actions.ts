"use server"

import { redirect } from "next/navigation"
import { createReservation } from "../repo/reservation-repo"

export async function setReservation(formData: FormData) {
    const userId = String(formData.get("userId"))
    const homeId = String(formData.get("homeId"))
    const startDate = String(formData.get("startDate"))
    const endDate = String(formData.get("endDate"))

    const data = await createReservation(formData)

    redirect("/")
}