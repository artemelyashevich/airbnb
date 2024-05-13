"use client"

import { useCountries } from "@/app/lib/hooks";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import { HomeMap } from "../Home/HomeMap";
import { CreationSubmit } from "../Creation/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { descriptionItems } from "@/app/lib/description-items";
import { DescriptionItem } from "../Creation/DescriptionItem";

export function SearchModal() {
    const [step, setStep] = useState(1)
    const { getAllCountries } = useCountries()
    const [locationValue, setLocationValue] = useState<string>("")
    function SubmitButtonLocal() {
        if (step === 1) {
            return (
                <Button type="button" onClick={() => setStep(step + 1)}>
                    Next
                </Button>
            )
        }
        else if (step === 2) {
            return <CreationSubmit />
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
                    <div className="flex h-full divide-x font-medium">
                        <p className="px-4">Anywhere</p>
                        <p className="px-4">Any week</p>
                        <p className="px-4">Any guests</p>
                    </div>
                    <Search className="bg-primary text-white p-1 h-8 w-8 rounded-full" />
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form className="gap-4 flex flex-col">
                    <input type="hidden" name="country" value={locationValue} />
                    {
                        step === 1
                            ? <>
                                <DialogHeader>
                                    <DialogTitle>Select a country</DialogTitle>
                                    <DialogDescription>Please choose a country</DialogDescription>
                                </DialogHeader>
                                <Select required onValueChange={(value: string) => setLocationValue(value)} value={locationValue}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Countries
                                            </SelectLabel>
                                            {
                                                getAllCountries().map((item, index: number) => (
                                                    <SelectItem key={index} value={item.value}>
                                                        <div className="flex gap-5 items-center">
                                                            <img className="w-8" src={`https://flagsapi.com/${item.value}/flat/64.png`} alt={item.region} />
                                                            | {item.label}
                                                        </div>
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <HomeMap locationValue={locationValue} />
                            </>
                            : <>
                                <DialogHeader>
                                    <DialogTitle>Select all info</DialogTitle>
                                    <DialogDescription>
                                        Select all info you need
                                    </DialogDescription>
                                </DialogHeader>
                                <Card className="flex flex-col gap-5 justify-center">
                                    {
                                        descriptionItems.map((item: string, index: number) => (
                                            <DescriptionItem key={index} name={item} />
                                        ))
                                    }
                                </Card>
                            </>
                    }
                    <DialogFooter>
                        <SubmitButtonLocal />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}