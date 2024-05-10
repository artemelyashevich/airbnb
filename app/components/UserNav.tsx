
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MenuIcon } from "lucide-react";

export async function UserNav() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <img src={
                        user?.picture
                        ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VTsTN947wxfPvR6azPju20BotT7BNvh_VZLnjduuNQ&s"
                    } className="rounded-full h-8 w-8 hidden lg:block" alt="User avatar" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {
                    user
                        ? <>
                            <DropdownMenuItem>
                                <LogoutLink className="w-full">Logout</LogoutLink>
                            </DropdownMenuItem></>
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