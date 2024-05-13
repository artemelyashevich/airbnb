import { GoTrueAdminApi } from "@supabase/supabase-js"
import prisma from "../lib/db"

export async function createFavorite(formData: FormData) {
    const homeId = String(formData.get("homeId"))
    const userId = String(formData.get("userId"))

    return prisma.favorite.create({
        data: {
            homeId: homeId,
            userId: userId
        }
    })

}

export async function unfavoriteHome(formData: FormData) {
    const userId = String(formData.get("userId"))
    const favoriteId = String(formData.get("favoriteId"))
    return prisma.favorite.delete({
        where: {
            id: favoriteId,
            userId: userId
        }
    })
}

export async function getFavorites(userId: string){
    return prisma.favorite.findMany({
        where: {
            userId: userId
        },
        select: {
            Home: {
                select: {
                    photo: true,
                    id: true,
                    Favorite: true,
                    price: true,
                    country: true,
                    title: true,
                    description: true
                }
            }
        }
    })
}