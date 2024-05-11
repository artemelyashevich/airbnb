import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreationSubmit } from "./SubmitButtons";

export function BottomBar() {
    return (
        <>
            <div className="fixed w-full bottom-0 x-10 bg-white border-t h-24">
                <div className="flex w-full justify-between items-center mx-auto px-5 lg:px-10 h-full">
                    <Link href={"/"}>
                        <Button variant={"outline"} size={"lg"}>Cancel</Button>
                    </Link>
                    <CreationSubmit />
                </div>
            </div>
        </>
    )
}