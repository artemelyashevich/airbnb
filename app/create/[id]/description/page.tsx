import { setDescription } from "@/app/actions";
import { BottomBar } from "@/app/components/BottomBar";
import { Counter } from "@/app/components/Counter";
import { DescriptionItem } from "@/app/components/DescriptionItem";
import { descriptionItems } from "@/app/lib/description-items";
import { updateHomeDescription } from "@/app/repo/home-repo";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionRoute({ params }: { params: { id: string } }) {
    return (
        <>
            <div className="w3-5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors text-center">
                    Please describe your home!
                </h2>
            </div>
            <form action={setDescription}>
                <input type="hidden" name="homeId" value={params.id} />
                <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
                    <div className="flex flex-col gap-y-2">
                        <Label>Title</Label>
                        <Input name="title" required placeholder="Please enter title..." />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <Textarea name="description" required placeholder="Please describe your home..." />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Price</Label>
                        <Input name="price" type="number" required placeholder="Price (USD)" min={10} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Image</Label>
                        <Input type="file" name="image" required />
                    </div>
                    <Card className="flex flex-col gap-5 justify-center">
                        {
                            descriptionItems.map((item: string, index: number) => (
                                <DescriptionItem key={index} name={item} />
                            ))
                        }
                    </Card>
                </div>
                <BottomBar />
            </form>
        </>
    )
} 