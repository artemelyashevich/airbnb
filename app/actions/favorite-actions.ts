"use server"

import { revalidatePath } from "next/cache"
import {
    createFavorite,
    unfavoriteHome
} from "../repo/favorite-repo"

export async function addToFavorite(formData: FormData) {
    const pathname = String(formData.get("pathname"))
    const data = await createFavorite(formData)
    revalidatePath(pathname)
}

export async function unfavorite(formData: FormData) {
    const pathname = String(formData.get("pathname"))
    const data = await unfavoriteHome(formData)
    revalidatePath(pathname)
}