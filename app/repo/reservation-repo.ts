import { GoTrueAdminApi } from "@supabase/supabase-js"
import prisma from "../lib/db"

export async function createReservation(formData: FormData) {
    const userId = String(formData.get("userId"))
    const homeId = String(formData.get("homeId"))
    const startDate = String(formData.get("startDate"))
    const endDate = String(formData.get("endDate"))

    return prisma.reservation.create({
        data: {
            userId,
            endDate,
            startDate,
            homeId
        }
    })
}

export async function getReservationsByUserId(userId: string) {
    return prisma.reservation.findMany({
        where: {
            userId: userId
        },
        select: {
            Home: {
                select: {
                    id: true,
                    country: true,
                    photo: true,
                    description: true,
                    price: true,
                    title: true,
                    Favorite: {
                        where: {
                            userId: userId
                        }
                    }
                }
            }
        }
    })
}