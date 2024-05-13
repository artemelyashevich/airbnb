import Image from "next/image";
import Link from "next/link";
import DeskTopLogo from "../../../public/desktop-logo.svg.png"
import MobileLogo from "../../../public/mobile-logo.png"
import { UserNav } from "./UserNav";
import { SearchModal } from "./SearchModal";

export function Navbar() {
    return (
        <nav className="w-full border-b">
            <div className="flex items-center justify-between container mx-auto px- lg:px-10 py-5">
                <Link href={"/"}>
                    <Image src={DeskTopLogo} alt="Desktop logo" className="w-32 hidden lg:block" />
                    <Image src={MobileLogo} alt="Mobile logo" className="block lg:hidden w-12" />
                </Link>
                <SearchModal />
                <UserNav />
            </ div>
        </nav>
    )
}