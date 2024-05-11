import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import prisma from "../lib/db";

export function getUserById(userId: string) {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

export function createUser(user: KindeUser | null) {
    return prisma.user.create({
        data: {
            email: user?.email ?? "",
            firstName: user?.given_name || "",
            lastName: user?.family_name || "",
            id: user?.id || "",
            profileImage: user?.picture || ""
        }
    })
}