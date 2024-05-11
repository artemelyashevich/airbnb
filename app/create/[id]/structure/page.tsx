import { setCategory } from "@/app/actions";
import { BottomBar } from "@/app/components/BottomBar";
import { SelectedCategory } from "@/app/components/SelectedCategory";

export default function StructureRoute({ params }: { params: { id: string } }) {
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Which of these categories best describe your Home?
                </h2>
            </div>
            <form action={setCategory}>
                <input type="hidden" name="homeId" value={params.id} />
                <SelectedCategory />
                <BottomBar />
            </form>
        </>
    )
} 