import {
    createUser,
    getUserById
} from "@/app/repo/user-repo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user || user === null || !user.id) {
        throw new Error("something went wrong...")
    }
    let dbUser = await getUserById(user.id)
    if (!dbUser) {
        dbUser = await createUser(user)
    }
    return NextResponse.redirect("http://localhost:3000/")
}
