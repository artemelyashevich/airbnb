import prisma from "../lib/db";
import { supabase } from "../lib/supabase";
import { getFileNameWithoutExtension } from "../utils";

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

export async function updateHomeDescription(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price");
    const imageFile = formData.get("image") as File;
    const homeId = formData.get("homeId") as string;

    const guestNumber = formData.get("guest") as string;
    const roomNumber = formData.get("room") as string;
    const bathroomsNumber = formData.get("bathroom") as string;

    const fileName = `${getFileNameWithoutExtension(imageFile.name)}`.replace(/\s/g, '')

    const { data } = await supabase.storage
        .from("images")
        .upload(fileName, imageFile);

    const dataHome = await prisma.home.update({
        where: {
            id: homeId,
        },
        data: {
            title: title,
            description: description,
            price: Number(price),
            bedrooms: roomNumber,
            bathrooms: bathroomsNumber,
            guests: guestNumber,
            photo: data?.path,
            addedDescription: true,
        },
    })
    return dataHome
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

export async function getAllHomes(
    {
        searchParams,
        userId
    }: {
        searchParams?: { filter?: string },
        userId: string | undefined
    }
) {
    return prisma.home.findMany({
        where: {
            addedCategory: true,
            addedDescription: true,
            addedLocation: true,
            categoryName: searchParams?.filter ?? undefined,
        },
        select: {
            photo: true,
            id: true,
            price: true,
            description: true,
            title: true,
            country: true,
            Favorite: {
                where: {
                    userId: userId ?? undefined
                }
            }
        }
    })
}