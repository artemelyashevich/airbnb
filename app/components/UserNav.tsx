
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { userLinks } from "../lib/user-links";
import { IUserLink } from "../types";
import { createAirbnbHome } from "../actions";

export async function UserNav() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const handleCreateHome = createAirbnbHome.bind(null, {
        userId: user?.id as string 
    })
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <img src={
                        user?.picture
                        ?? "../../public/avatar.png"
                    } className="rounded-full h-8 w-8 hidden lg:block" alt="User avatar" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {
                    user
                        ? <>
                            <DropdownMenuItem>
                                <form action={handleCreateHome} className="w-full">
                                <button type="submit" 
                                className="w-full text-start">Airbnb your home</button>
                                </form>
                            </DropdownMenuItem>
                            {
                                userLinks.map((userLink: IUserLink, index: number) => (
                                    <DropdownMenuItem>
                                        <Link href={userLink.to} className="w-full">{userLink.text}</Link>
                                    </DropdownMenuItem>
                                ))
                            }
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogoutLink className="w-full">Logout</LogoutLink>
                            </DropdownMenuItem>
                        </>
                        : <>
                            <DropdownMenuItem>
                                <RegisterLink className="w-full">Register</RegisterLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LoginLink className="w-full">Login</LoginLink>
                            </DropdownMenuItem>
                        </>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}