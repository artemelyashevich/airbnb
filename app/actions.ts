"use server"

import { redirect } from "next/navigation"
import { createHome, findHomeByUserId, updateHomeCategory, updateHomeDescription, updateHomeLocation, uploadHomeImage } from "./repo/home-repo"

export async function createAirbnbHome({ userId }: { userId: string }) {
    const data = await findHomeByUserId(userId)
    if (data === null) {
        const data = await createHome(userId)
        return redirect(`/create/${data.id}/structure`)
    }
    else if (!data.addedCategory && !data.addedDescription && !data.addedLocation) {
        return redirect(`/create/${data.id}/structure`)
    } else if (data.addedCategory && !data.addedDescription) {
        return redirect(`/create/${data.id}/description`)
    }
    else if (data.addedDescription && !data.addedLocation) {
        return redirect(`/create/${data.id}/location`)
    }
}

export async function setCategory(formData: FormData) {
    const data = await updateHomeCategory(formData)
    return redirect(`/create/${formData.get("homeId")}/description`)
}

/*
    @TODO: fix images uploading
*/
export async function setDescription(formData: FormData) {
    const imageFile = formData.get("image") as File
    const { data: image } = await uploadHomeImage(imageFile)
    const data = await updateHomeDescription(formData, image)
    return redirect(`/create/${data.id}/location`)
}

export async function setLocation(formData: FormData) {
    const data = await updateHomeLocation(formData)
    return redirect(`/`)
}