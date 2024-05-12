import prisma from "../lib/db";
import { supabase } from "../lib/supabase";

export function findHomeByUserId(userId: string) {
    return prisma.home.findFirst({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export function createHome(userId: string) {
    return prisma.home.create({
        data: {
            userId: userId
        }
    })
}

export function updateHomeCategory(formData: FormData) {
    return prisma.home.update({
        where: {
            id: String(formData.get("homeId"))
        },
        data: {
            categoryName: String(formData.get("categoryName")),
            addedCategory: true
        }
    })
}

export async function updateHomeDescription(formData: FormData, image: any) {
    const title = String(formData.get("title"))
    const description = String(formData.get("description"))
    const price = Number(formData.get("price"))
    const homeId = String(formData.get("homeId"))

    const guests = String(formData.get("guests"))
    const bedrooms = String(formData.get("rooms"))
    const bathrooms = String(formData.get("bathrooms"))

    return prisma.home.update({
        where: {
            id: homeId
        },
        data: {
            title,
            description,
            guests,
            bedrooms,
            bathrooms,
            price,
            photo: image?.path,
            addedDescription: true
        }
    })
}

export async function uploadHomeImage(imageFile: File) {
    return supabase.storage
        .from("images")
        .upload(`${imageFile.name}-${new Date()}`, imageFile, {
            cacheControl: "2592000",
            contentType: "image/png"
        })
}

export async function updateHomeLocation(formData: FormData) {
    const homeId = String(formData.get("homeId"))
    const country = String(formData.get("countryValue"))
    return prisma.home.update({
        where: {
            id: homeId
        },
        data: {
            addedLocation: true,
            country
        }
    })
}